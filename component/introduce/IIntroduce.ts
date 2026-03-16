import { ICommon } from '../common/ICommon';

export declare namespace IIntroduce {
  /**
   * ### Sample Rendering
   *
   * ![image](https://user-images.githubusercontent.com/8033320/78027282-156e6100-7398-11ea-9afa-91fa95716d1e.png)
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/introduce.ts
   */
  export interface Payload extends ICommon.Payload {
    /**
     * ### 자기소개 내용
     *
     * @description `string` 배열이다. 요소 하나가 하나의 `<p>` 태그가 된다.
     */
    contents: string[];

    /**
     * ### 하단 싸인
     *
     * @description 그냥 있어보여서 추가해봤다.
     */

    sign: string;
  }
}
