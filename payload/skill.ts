import { ISkill } from '../component/skill/ISkill';

export const languages: ISkill.Skill = {
  category: 'Languages',
  items: [
    { title: 'Java' },
    { title: 'TypeScript' },
    { title: 'Python' },
    { title: 'C' },
    { title: 'JavaScript' },
    { title: 'HTML/CSS' },
  ],
};

export const frameworks: ISkill.Skill = {
  category: 'Frameworks & Libraries',
  items: [
    { title: 'Spring Boot' },
    { title: 'Node.js' },
    { title: 'React.js' },
    { title: 'Next.js' },
    { title: 'Tailwind CSS' },
    { title: 'shadcn/ui' },
    { title: 'Zustand' },
    { title: 'TanStack Query' },
    { title: 'Tiptap' },
    { title: 'Vite' },
  ],
};

export const infrastructure: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    { title: 'PostgreSQL' },
    { title: 'MySQL' },
    { title: 'Redis' },
    { title: 'Neo4j' },
    { title: 'Docker' },
    { title: 'AWS' },
  ],
};

export const tools: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    { title: 'Git' },
    { title: 'Github' },
    { title: 'Antigravity' },
    { title: 'Claude Code CLI' },
    { title: 'IntelliJ IDEA' },
    { title: 'VS Code' },
    { title: 'Vim' },
    { title: 'Eclipse' },
  ],
};

export const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    { title: 'AI Agent & LLM Application' },
    { title: 'Performance Optimization' },
    { title: 'System Architecture' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [languages, frameworks, infrastructure, tools, misc],
};

export default skill;
