import React from 'react';
import styles from './styles.module.css';
import Spacer from '../../../../components/other/Spacer';
import SectionScroller, {
  SectionInterface,
} from './components/SectionScroller';
import PlainButton from '../../../../components/buttons/PlainButton';

const sections: SectionInterface[] = [
  {
    code: `
class Karandeep {
// I'm ambitious and love new challenges 🙂
// My of skills set is continuously expanding.
  constructor() {
  this.name = 'Karandeep Singh'
  this.dayOfBirthTimestamp = 602745592
  this.email = 'kdsinzgh.contact@gmail.com'
  }
  education() {
    return [
    { 'VIT Vellore': {'Computer Science and Engineering',
    CGPA:8.6} },
    { 'ISC':  'Percentage: 85.6' },
    { 'ICSE': 'Percentage: 87' },
    ]
  }
    `,
    codeWithComment:  
`class Karandeep {
// I'm ambitious and love new challenges 🙂
// My of skills set is continuously expanding.
constructor() {
  this.name = 'Karandeep Singh'
  this.dayOfBirthTimestamp = 602745592
  this.email = 'kdsinzgh.contact@gmail.com'
  }
  education() {return [{ 'VIT Vellore': {'Computer Science and Engineering',
    CGPA:8.6} },
    { 'ISC':  'Percentage: 85.6' },
    { 'ICSE': 'Percentage: 87' },
    ]}`,
    title: 'A Brief Intro',
    description: '//friends call me KD.',
    icon: 'zap',
  },
  {
    code: `
MySkillset(){
  return [{
    code: ["Javascript", "C", "C"++, "Python", "Java", "php"],
    technologies: {backEnd: {
            code: ["node", "express", "php"],
        },frontEnd: {
            js: ["Vue(#skills to acquire)"],
            css: ["materialize", "tailwind", "bootstrap"],
            framework: ["React"]
        },devOps: ["AWS", "Docker🐳(#skills to acquire)", "Heroku"],
        databases: ["mongo", "MySql", "firebase(#skills to acquire)"],
        },
    skills_to_acquire:["Firebase", "Socket.IO", "VIEW.JS", "Typescript", "Next.js"],
    currentFocus: "Problem solving skills and Competitive programming",
  };]}`,
    codeWithComment: 
`MySkillset(){
 return [{code: ["Javascript", "C", "C"++, "Python", "Java", "php"],
        technologies: {backEnd: {code: ["node", "express", "php"],},
              frontEnd: {js: ["Vue(#skills to acquire)"],
              css: ["materialize", "tailwind", "bootstrap"],
              framework: ["React"]
            },devOps: ["AWS", "Docker🐳(#skills to acquire)", "Heroku"],
            databases: ["mongo", "MySql", "firebase(#skills to acquire)"],
            },
        skills_to_acquire:["Firebase", "Socket.IO", "VIEW.JS", "Typescript", "Next.js"],
        currentFocus: "Problem solving skills and Competitive programming",
      };]}`,
    title: 'My Skill Set',
    description: '“Skills don’t die; only people do.”',
    icon: 'repeat',
  },
  {
    code: 
`Computer Science Student
## Exploring Technology 🚀

//Birthday: 25th Nov, 1999              Phone: +91-7008788033
Website: www.kdsinghcoder.github.io     Degree: Undergraduate
//City: Rourkela, India                 Email: kdsingh.contact@gmail.com
Age: 21                                 Freelance: Available`,
    codeWithComment: `

    Computer Science Student
    Exploring Technology 🚀
    
     Birthday: 25th Nov, 1999              Phone: +91-7008788033
     Website: www.kdsinghcoder.github.io   Degree: Undergraduate
     City: Rourkela, India                 Email: kdsingh.contact@gmail.com
     Age: 21                               Freelance: Available`,
    title: 'Info',
    description: 'Contact details.',
    icon: 'server',
  },
//   {
//     code: `
// const App = new Agile();
// const MY_COLLECTION = App.createCollection(); // <-
// MY_COLLECTION.collect({id: 1, name: "Jeff"});
//     `,
//     codeWithComment: `
// // Create dynamic set of States
// const App = new Agile();
// const MY_COLLECTION = App.createCollection(); // <-
// MY_COLLECTION.collect({id: 1, name: "Jeff"});
//     `,
//     title: 'Collection',
//     description: 'A Collection is a dynamic and reactive set of States.',
//     icon: 'users',
//   },
 

// {
//     code: `
// const App = new Agile();
// const IS_AUTH = App.createComputed(() => {
//    return AUTH_TOKEN.exists && EXPIRATION_TIME.value > 0;
// });
//     `,
//     codeWithComment: `
// // Compute State depending on other States  
// const App = new Agile();
// const IS_AUTH = App.createComputed(() => {
//    return AUTH_TOKEN.exists && EXPIRATION_TIME.value > 0;
// });
//     `,
//     title: 'Computed State',
//     description: 'Compute State depending on other States.',
//     icon: 'edit',
//   },
];

const StraightforwardView: React.FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.HeaderContainer}>
          <div className={styles.Tagline}>😀</div>
          <Spacer height={10} />
          <div className={styles.Title}>About</div>
          <Spacer height={20} />
          <div className={styles.Description}>
            I'm a student pursuing a B.Tech in Computer Science from VIT,
            Vellore. I intend to develop excellent development skills to
            contribute to the tech world in the best of my ability. 
          </div>
        </div>
        <Spacer height={60} />
        <SectionScroller sections={sections} startIndex={0} />
        <PlainButton
          to={'docs/introduction'}
          name={'Learn more'}
          className={styles.LearnMoreButton}
        />
      </div>
    </div>
  );
};

export default StraightforwardView;
