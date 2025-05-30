import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'Python',
      level: 2,
    },
    {
      title: 'JavaScript',
      level: 2,
    },
    {
      title: 'TypeScript',
      level: 1,
    },
    {
      title: 'HTML/CSS',
    },
  ],
};
const framework: ISkill.Skill = {
  category: 'Frmework & Libraries',
  items: [
    {
      title: 'Spring Boot',
      level: 3,
    },
    {
      title: 'React.js',
      level: 2,
    },
  ],
};

const Infrastructure: ISkill.Skill = {
  category: 'Infrastructure & Datebases',
  items: [
    {
      title: 'AWS',
      level: 2,
    },
    {
      title: 'MySQL',
      level: 2,
    },
    {
      title: 'Docker',
    },
    {
      title: 'GitHub Actions',
    },
    {
      title: 'Redis',
    },
  ],
};

const Tools: ISkill.Skill = {
  category: 'Tools',
  items: [
    {
      title: 'IntelliJ IDEA',
    },
    {
      title: 'Eclipse',
    },
    {
      title: 'Git',
    },
    {
      title: 'GitHub',
    },
    {
      title: 'Postman',
    },
    {
      title: 'Prometheus',
    },
    {
      title: 'Grafana',
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Coffee Brewing',
    },
    {
      title: 'Singing',
    },
    {
      title: 'Running',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, framework, Infrastructure, Tools, misc],
  tooltip: '1: 입문\n2: 기초\n3: 활용\n4: 숙련\n5: 전문',
};

export default skill;
