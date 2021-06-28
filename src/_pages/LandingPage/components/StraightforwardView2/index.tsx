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
intrest(){
    [
    "drinking chai", "spending time with friends",
    "engulf myself into a noble cause","hangout with friends",
    "Doing Bhangra 🕺", "Exploring something new",
    "I love Tech", 
    "I love switching between technologies and learn about them",
    "Love debating about spirituality and understand all religions",
    "Also intrested in geo-plotics centered around an indian perspective"
    ]
  }
    `,
    codeWithComment: `intrest(){
      [
        "drinking chai", "spending time with friends",
        "engulf myself into a noble cause","hangout with friends",
        "Doing Bhangra 🕺", "Exploring something new",
        "I love Tech", 
        "I love switching between technologies and learn about them",
        "Love debating about spirituality and understand all religions",
        "Also intrested in geo-plotics centered around an indian perspective"
      ]
    }
  `,
    title: 'Interests',
    description: '🤩',
    icon: 'zap',
  },
  {
    code: `
//If you are an interviewee and about to ask
//me this question please find it below 😊😉😀
 
5yearplan(){
  return([
    "In next 5 years I want to be in a job where my skills and effors gets appritiated",
     "I want to be around people who inspire me.",
     "I am certain that the coming five years will be productive for me.",
     "Working in an esteemed organization with a positive work environment can be rewarding.",
     "I want to keep growing as a person, getting more responsible, having great skills in my domain"
  ]);
 }
`,
    codeWithComment: `
//If you are an interviewee and about to ask
//me this question please find it below 😊😉😀
 
5yearplan(){
  return([
    "In next 5 years I want to be in a job where my skills and effors gets appritiated",
     "I want to be around people who inspire me.",
     "I am certain that the coming five years will be productive for me.",
     "Working in an esteemed organization with a positive work environment can be rewarding.",
     "I want to keep growing as a person, getting more responsible, having great skills in my domain"
  ]);
 }
`,
    title: 'where do I see myself in 5 years',
    description: '😃”',
    icon: 'repeat',
  },
  {
    code: `Computer Science Student
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

const StraightforwardView2: React.FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.HeaderContainer}>
          <div className={styles.Tagline}>🤘</div>
          <Spacer height={10} />
          <div className={styles.Title}>My Interest</div>
          <Spacer height={20} />
          <div className={styles.Description}>
          I spend the majority of my time learning new skills or using them to make new projects. But whenever I get a free slot I do things I love.
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

export default StraightforwardView2;
