import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Spacer from '../../../../components/other/Spacer';
import { useAgile } from '@agile-ts/react';
import core from '../../../../core';
import StatBadge from './components/StatBadge';
import { useWindowSize } from '../../../../hooks/useWindowSize';

const StatsView: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  const { windowHeight } = useWindowSize();
  const npmDownloads = useAgile(core.stats.NPM_DOWNLOADS);
  const githubStars = useAgile(core.stats.GITHUB_STARS);
  const githubForks = useAgile(core.stats.GITHUB_FORKS);

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.HeaderContainer}>
          <div className={styles.Tagline}>Always ready to help.</div>
          <Spacer height={10} />
          <div className={styles.Title}>I Love open source</div>
          <Spacer height={20} />
        </div>
        <Spacer height={windowHeight > 768 ? 60 : 20} />
        <div className={styles.BadgesContainer}>
          <StatBadge
            icon={'star'}
            number={969}
            text={'Total Commits'}
            to={`${siteConfig.customFields.githubUrl}/stargazers`}
            className={styles.Badge}
          />
          <StatBadge
            icon={'star'}
            number={56}
            text={'Pull Requests in last 365 days'}
            to={`${siteConfig.customFields.githubUrl}/network/members`}
            className={styles.Badge}
          />
          <StatBadge
            icon={'star'}
            number={16}
            text={'Contributed to repo'}
            to={siteConfig.customFields.npmCoreUrl}
            className={styles.Badge}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsView;
