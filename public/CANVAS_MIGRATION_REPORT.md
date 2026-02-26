# StoLink & StoRead : 프로젝트 상세 소개

> 웹소설 작가를 위한 지식 관리 플랫폼 | 팀 프로젝트 (5인 개발 / 기획, 프론트엔드 70%, 백엔드 20%) | 2025.12 ~ 2026.02

---

## 1. 렌더링 성능 최적화 — SVG → Canvas 전환

### 문제 정의

StoLink의 핵심 기능인 소설 인물 관계도는 D3.js 기반 SVG로 구현되어 있었습니다. 노드가 50개만 넘어도 클릭 및 드래그 응답이 **420ms**까지 느려지는 문제가 발생했습니다. DevTools Performance 탭으로 분석한 결과, **Style Recalculation**이 병목임을 확인했습니다.

- 노드가 많아질수록 화면 반응 속도가 현저히 느려짐 (FPS 10 미만)
- **원인**: 브라우저가 수백 개의 SVG DOM 요소를 매 프레임마다 재배치(Reflow)하는 과정에서 부하 발생

### 해결 과정

SVG/DOM의 구조적 한계를 이해하고 **Canvas 렌더링**으로 전환했습니다. Offscreen Canvas에 비트맵 캐싱을 적용하고, 단일 렌더 루프에서 일괄 렌더링하는 방식을 채택했습니다.

React의 불변성(Immutability)과 물리 엔진의 가변성(Mutability)이 충돌하는 문제는 `structuredClone`과 `useRef`를 활용한 데이터 분리 전략으로 해결했습니다.

```typescript
// 1. 물리 연산을 위한 전용 복사본 만들기 (structuredClone)
// React가 관리하는 원본은 보호하고, 물리 엔진이 수정할 수 있는 복사본을 제공합니다.
const graphData = useMemo(
  () => ({
    nodes: structuredClone(initialNodes), // 복제
    links: structuredClone(processedLinks),
  }),
  [initialNodes, processedLinks],
);

// 2. 실시간 위치 정보는 Ref로 참조
// 매초 수십 번 변하는 좌표 때문에 화면 전체를 다시 그리지 않도록, useRef로 데이터만 참조합니다.
const graphDataRef = useRef(graphData);

// 3. 라이브러리 내부 엔진 제어하기
// D3.js 관계 그래프 구현 사례를 참고하여 물리 시뮬레이션을 커스텀 했습니다.
useEffect(() => {
  if (!graphRef.current) return;
  const fg = graphRef.current;

  // 주인공이 항상 중심에 오도록 하는 레이아웃 로직
  const focusForce = (alpha: number) => {
    const simNodes = graphDataRef.current.nodes;
    simNodes.forEach((node) => {
      const k = alpha * 1.2;
      node.vx += (targetX - node.x) * k;
      node.vy += (targetY - node.y) * k;
    });
  };

  fg.d3Force('focus', focusForce); // 커스텀 물리 법칙 적용
  fg.d3ReheatSimulation(); // 엔진 재가동
}, [layoutMode]);
```

### 결과

| 지표                  | SVG (변경 전) | Canvas (변경 후) | 개선 효과                |
| :-------------------- | :------------ | :--------------- | :----------------------- |
| **반응 속도 (INP)**   | 420ms         | **64ms**         | **85% 단축**             |
| **화면 갱신 시간**    | 935ms         | **0ms**          | **렉 현상 완전 제거**    |
| **프레임 (FPS)**      | 10 FPS 미만   | **60 FPS**       | **매우 부드러운 움직임** |
| **수용 가능 노드 수** | 30개          | **650개 이상**   | **20배 이상 성능 향상**  |

---

## 2. 데이터 처리 최적화 — 트리 변환 메모이제이션

### 문제 정의

계층형 문서 구조(Flat Array → Nested Tree)를 매 렌더링마다 재귀적으로 변환하고 있었습니다. 매번 전체 배열을 순회하는 **O(n²) 연산**이 반복되어, 문서 100개 기준 **15~20ms**의 처리 시간이 발생했습니다.

### 해결 과정

**HashMap 기반 O(n) 트리 조립 로직**으로 리팩토링하고, `useMemo`를 활용하여 데이터가 변경될 때만 재연산하도록 최적화했습니다. React 참조 동등성(Referential Equality)을 활용하여 불필요한 리렌더링도 방지했습니다.

```typescript
// [Before] O(n²) 재귀적 트리 변환
const buildTreeRecursive = (items: Document[], parentId: string | null): TreeNode[] => {
  return items
    .filter(item => item.parentId === parentId)  // O(n) 매번 전체 순회
    .map(item => ({
      ...item,
      children: buildTreeRecursive(items, item.id),  // 재귀로 O(n²)
    }));
};

// [After] O(n) HashMap 기반 트리 조립
const buildTreeOptimized = (items: Document[]): TreeNode[] => {
  const map = new Map<string, TreeNode>();
  const roots: TreeNode[] = [];

  // 1단계: 모든 노드를 Map에 등록 (O(n))
  items.forEach(item => {
    map.set(item.id, { ...item, children: [] });
  });

  // 2단계: 부모-자식 관계 연결 (O(n))
  items.forEach(item => {
    const node = map.get(item.id)!;
    if (item.parentId) {
      map.get(item.parentId)?.children.push(node);
    } else {
      roots.push(node);
    }
  });

  return roots;
};

// useMemo로 데이터 변경 시에만 재연산
const tree = useMemo(() => buildTreeOptimized(documents), [documents]);
```

### 결과

| 지표                          | 변경 전            | 변경 후              | 개선 효과          |
| :---------------------------- | :----------------- | :------------------- | :----------------- |
| **트리 변환 시간 (문서 100개)** | 15~20ms            | **1ms 이하**         | **15~20배 개선**   |
| **시간 복잡도**               | O(n²)              | **O(n)**             | **구조적 개선**    |
| **API 응답 시간**             | 450ms (N+1 쿼리)   | **25ms (Fetch Join)** | **18배 개선**      |

---

## 3. 번들 최적화

### 문제 정의

사용자로부터 초기 로딩이 느리다는 피드백을 받았습니다. Lighthouse로 분석한 결과, Export 관련 라이브러리(`docx` 714KB, `jspdf` 341KB)가 초기 번들에 포함되어 있었습니다. 실제로 이 기능은 사용자가 "내보내기" 버튼을 클릭할 때만 필요한 코드였습니다.

### 해결 과정

**Vite manualChunks**로 용도별 청크를 분리하고, 마우스 호버 시 **사전 로딩(Prefetch)** 전략을 적용했습니다. 사용자가 내보내기 버튼에 마우스를 올리는 순간 해당 청크를 미리 다운로드하여, 실제 클릭 시에는 즉시 실행될 수 있도록 했습니다.

```typescript
// vite.config.ts - manualChunks 설정
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'vendor-react': ['react', 'react-dom'],
        'vendor-graph': ['react-force-graph-2d', 'd3-force'],
        'export-docx': ['docx'],
        'export-pdf': ['jspdf'],
      },
    },
  },
},

// 마우스 호버 시 Prefetch
const ExportButton = () => {
  const handleMouseEnter = () => {
    // 사용자가 내보내기 버튼에 호버하면 미리 로드
    import('docx');
    import('jspdf');
  };

  return (
    <button onMouseEnter={handleMouseEnter} onClick={handleExport}>
      내보내기
    </button>
  );
};
```

### 결과

| 지표                          | 변경 전 | 변경 후    | 개선 효과      |
| :---------------------------- | :------ | :--------- | :------------- |
| **초기 JS 번들 크기 (gzip)**  | 450KB   | **187KB**  | **58% 절감**   |

---

## 4. 크레딧 결제 시스템 (백엔드)

### 문제 정의

토스페이먼츠 테스트 결제 API를 연동하면서(승인 → 확인 → 웹훅), 외부 PG API 응답이 느릴 경우 트랜잭션이 길어져 **커넥션 풀 고갈** 위험이 있었습니다. 또한 크레딧 잔액의 동시성 제어와 결제 중복 요청 방어가 필요했습니다.

### 해결 과정

외부 PG API 호출을 **트랜잭션 범위 밖으로 분리**하여 커넥션 점유 시간을 최소화했습니다. 그리고 **3중 방어 체계**를 구축했습니다:

- **비관적 락(PESSIMISTIC_WRITE)**: 잔액 차감 시 동시 접근 방지
- **낙관적 락(@Version)**: 결제 상태 변경의 동시성 제어
- **멱등키(Idempotency Key)**: 중복 결제 요청 방어

```java
// CreditRepository.java - 비관적 락
@Lock(LockModeType.PESSIMISTIC_WRITE)
@Query("SELECT c FROM Credit c WHERE c.userId = :userId")
Optional<Credit> findByUserIdWithLock(@Param("userId") UUID userId);

// Payment.java - 낙관적 락
@Version
private Long version;

// PaymentService.java - 멱등키
String idempotencyKey = generateIdempotencyKey(userId, orderId);
if (paymentRepository.existsByIdempotencyKey(idempotencyKey)) {
    throw new PaymentExceptions.DuplicatePaymentException("이미 처리 중인 결제가 있습니다.");
}

// CreditService.java - 트랜잭션 내 락 획득 및 차감
@Transactional
public void useCredit(UUID userId, CreditUseRequest request) {
    Credit credit = creditRepository.findByUserIdWithLock(userId)
        .orElseThrow(() -> new PaymentExceptions.CreditNotFoundException("사용자를 찾을 수 없습니다."));
    credit.use(request.amount());
    creditRepository.save(credit);
}
```

**Testcontainers PostgreSQL** 위에서 동시성 테스트를 작성하여, 100스레드 동시 차감 시나리오에서 잔액 정합성과 초과 차감 방어를 검증했습니다.

```java
// 동시성 테스트 (JUnit + CountDownLatch)
@Test
void concurrencyCreditUseTest() throws InterruptedException {
    UUID userId = UUID.randomUUID();
    Credit credit = Credit.createForUser(userId);
    credit.charge(10000L);
    creditRepository.save(credit);

    int threadCount = 100;
    ExecutorService executorService = Executors.newFixedThreadPool(32);
    CountDownLatch latch = new CountDownLatch(threadCount);
    AtomicInteger successCount = new AtomicInteger();

    for (int i = 0; i < threadCount; i++) {
        executorService.submit(() -> {
            try {
                creditService.useCredit(userId, new CreditUseRequest(100L, "Test", null, null));
                successCount.incrementAndGet();
            } catch (Exception e) { }
            finally { latch.countDown(); }
        });
    }

    latch.await(30, TimeUnit.SECONDS);
    Credit finalCredit = creditRepository.findByUserId(userId).orElseThrow();
    assertThat(finalCredit.getBalance()).isEqualTo(0L);
    assertThat(successCount.get()).isEqualTo(100);
}
```

### 결과

- 100스레드 동시 차감에서 **잔액 정합성 100%** 달성
- 초과 차감 완전 방어
- 외부 API 호출 분리로 트랜잭션 점유 시간 최소화

---

## 5. 팀 협업 — Git 워크플로우 자동화

### 문제 정의

5인 팀에서 Git 숙련도 격차가 있었습니다. 이슈 생성, 브랜치 생성, 커밋, PR 작성까지의 워크플로우가 팀원마다 달라 협업 효율이 떨어졌습니다.

### 해결 과정

**Antigravity**를 도입하여 이슈 → 브랜치 → 커밋 → PR을 단일 명령으로 처리할 수 있는 워크플로우를 구축했습니다.

### 결과

- 개인 도구에서 시작하여 **팀 전체**로 확산
- 이후 **다른 팀**에서도 채택하여 사용
- Git 숙련도와 무관하게 일관된 워크플로우 유지
