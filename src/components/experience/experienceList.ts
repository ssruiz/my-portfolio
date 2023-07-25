export type Experience = {
  startYear: string;
  endYear: string;
  title: string;
  company: string;
  brief: string;
  id: string;
  project?: string;
  link?: string;
  stack: string[];
};

export const experiences: Experience[] = [
  {
    id: '0',
    brief: `Little project for Willdom that helps to keep tracking their assets. I configured the project, dev enviromnment and helped in deployment tasks.`,
    company: 'Willdom',
    endYear: 'Present',
    startYear: '06/2023',
    title: 'Developer',
    project: 'Project: Assets Control',
    stack: ['NextJs', 'Postgres', 'Prisma', 'Vercel', 'Docker'],
  },
  {
    id: '1',
    brief:
      'Led a team of 5 developers in the design and implementation of a complex government entity business operation platform using Java, React, and Oracle.',
    company: 'Willdom',
    endYear: '06/2023',
    startYear: '11/2022',
    title: 'Tech Lead',
    project: 'Project: VUE',
    stack: ['React', 'Java', 'Camunda', 'Jenkins', 'JasperReports'],
  },
  {
    id: '2',
    brief:
      'Implemented migration of legacy code to JAVA EE architecture. Developed and maintained RESTful APIs to support web functionality.',
    company: 'Willdom',
    endYear: '10/2022',
    startYear: '02/2021',
    title: 'Developer',
    project: 'Project: VUE',
    stack: ['React', 'Java', 'Camunda', 'Jenkins', 'JasperReports'],
  },
  {
    id: '3',
    brief: `Contributed with the awesome people of GirlsCode. Creation of new features for the project. Code reviewed of PRs.
    Developed responsive and accessible user interfaces in React.
    Created React editable components via a Headless CMS`,
    company: 'Willdom',
    endYear: '10/2022',
    startYear: '09/2022',
    title: 'Developer',
    project: 'Project: Girls Code - Maintenance Landing page',
    link: 'https://github.com/GirlsCodePy/girls-code-web',
    stack: ['React', 'Gatsby', 'Netlify'],
  },
  {
    id: '4',
    brief: `The project was about an app to facilitate users to make appointments and get
      medical advice via video calls. Contributed to the creation of new features for the project.
      Coded review of PRs
      Testing of app functionalities.
      Fixed bugs in their web page.`,
    company: 'Freelancer',
    startYear: '08/2020',
    endYear: '02/2021',
    title: 'Developer',
    stack: ['Angular', 'Flutter', 'JS'],
  },
];
