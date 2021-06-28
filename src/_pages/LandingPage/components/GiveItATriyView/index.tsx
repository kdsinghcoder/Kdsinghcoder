import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Spacer from '../../../../components/other/Spacer';

const GiveItATryView: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className={styles.Container}>
      <div className={styles.Title}>Give it a Try. It's 100% free.</div>
      <Spacer height={40} />
      <div className={styles.Terminal}>
        <code>
          npm hire{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"mailto:kdsingh.contact@gmail.com"}>
            @karandeepsingh
          </a>
        </code>
      </div>
      <div className={styles.Terminal}>
        <code>
          nmp click <a
            target="_blank"
            rel="noopener noreferrer"
            href={"mailto:kdsingh.contact@gmail.com"}>
            @karandeepsingh
          </a> to send mail{' '}
        </code>
      </div>
    </div>
  );
};

export default GiveItATryView;
