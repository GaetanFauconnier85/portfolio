const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://GaetanFauconnier85.github.io/portfolio',
  title: 'GF.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Gaëtan Fauconnier',
  role: 'Full Stack Developer ',
  description:
    'I have a solid foundation in several areas of expertise such as React Native, Angular, Redux, Java, etc. I am currently open to any request. I am serious, dynamic and motivated to learn and progress in contact with professionals.',
  social: {
    linkedin: 'https://www.linkedin.com/in/ga%C3%ABtan-fauconnier-2542b8154/',
    github: 'https://github.com/GaetanFauconnier85',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'SECOLLAB',
    description:
        'Secollab is a project aimed at facilitating collaboration and communication among team members by providing a secure online platform for discussions, tasks, and document management.',
    stack: ['Angular', 'Redux', 'Java', 'Neo4J'],
    livePreview: 'https://www.sodiuswillert.com/en/products/secollab',
  },
  {
    name: 'Trackday',
    description:
      'Trackday is a solution that allows you to track your performance, compare your times, and challenge yourself among speed and adrenaline enthusiasts.',
    stack: ['React Native', 'Redux','Firebase', 'NodeJs', 'MongoDB'],
    livePreview: 'https://trackday.cc',
  },
  {
    name: 'StreamCard, projet personnel',
    description:
        'StreamCard is an application that allows you to collect cards of internet personalities.',
    stack: ['React Native', 'Firebase'],
  },
  {
    name: 'En cours, projet personnel',
    description:
        'Development of an application designed to promote participation in cultural activities such as museums, exhibitions, and conferences through an engaging quest-based system.',
    stack: ['React Native', 'React', 'NestJs', 'Supabase'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Angular',
  'React Native',
  'Redux',
  'React',
    'Firebase',
    'Supabase',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'JAVA',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'fauconnier.gaetan@gmail.com',
}

export { header, about, projects, skills, contact }
