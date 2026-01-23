import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    { title: 'Java' },
    { title: 'Python' },
    { title: 'JavaScript' },
    { title: 'TypeScript' },
    { title: 'HTML/CSS' },
  ],
};

const framework: ISkill.Skill = {
  category: 'Framework & Libraries',
  items: [
    { title: 'Spring Boot' },
    { title: 'JPA / Hibernate' },
    { title: 'Spring Security' },
    { title: 'React.js' },
  ],
};

const infrastructure: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    { title: 'AWS' },
    { title: 'MySQL / MariaDB' },
    { title: 'Docker' }, // 실무 사용 경험만 명시
  ],
};

const tools: ISkill.Skill = {
  category: 'Tools & Monitoring',
  items: [
    { title: 'Git' },
    { title: 'Swagger' },
    { title: 'JUnit5' },
    { title: 'IntelliJ IDEA' },
    { title: 'Postman' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, framework, infrastructure, tools],
};

export default skill;
