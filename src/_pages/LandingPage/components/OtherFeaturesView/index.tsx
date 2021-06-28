import React from 'react';
import styles from './styles.module.css';
import Cards, { CardInterface } from './components/Cards';

const cards: CardInterface[] = [
  {
    title: 'Travel Buddy',
    description:
      'Travel Buddy is a full stack application which allows my fello college mates to find travel companions back home and vice versa. Travel budy also supports cab sharing to banglore and chennai as well.',
    to: 'docs/travelbuddy',
    imagePath: 'img/pages/landing/software_engineer.svg',
  },
  // {
  //   title: 'Flexible',
  //   description:
  //     'AgileTs works with nearly any UI-Layer and isn’t bound to any specific workflow. Use it the way it suits you best.',
  //   to: 'docs/introduction',
  //   imagePath: 'img/pages/landing/teaching.svg',
  // },
  {
    title: 'Docs Stream',
    description:
      'Easies and the fastest way to collaborate while making a document. Provides a solution to hosting your document online..',
    to: 'docs/docstream',
    imagePath: 'img/pages/landing/science.svg',
  },
  {
    title: 'Say Hello',
    description:
      'Say Hello is essentially a speech to sign language converter which takes a speech input from the user and converts it to a text form with the help of a JavaScript API followed by which, this text is used as an input to finally convert this speech into sign language.',
    to: 'docs/sayhello',
    imagePath: 'img/pages/landing/engineer.svg',
  },  
  {
    title: 'Bond Mantainer',
    description:
      'Bond Mantainer is a full stack application integrated with Twilo Api to send reminder messages to the user. Bond Mantainer allows user to make healthy and effictive connections.',
    to: 'docs/bondmantainer',
    imagePath: 'img/pages/landing/typescript.svg',
  },
];

const OtherFeaturesView: React.FC = () => {
  return (
    <div className={styles.Container}>
      <h1>Projects</h1>
      <Cards cards={cards} />
    </div>
  );
};

export default OtherFeaturesView;
