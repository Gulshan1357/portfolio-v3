import sparBackgroundPlaceholer from '~/assets/spar-background-placeholder.png';

import wmHome from '~/assets/WM_home.png';
import wmSimple from '~/assets/WM_Simple.png';
import wmSimple2 from '~/assets/WM_Simple2.png';
import wmIndepth from '~/assets/WM_In-depth.png';
import wmVideo from '~/assets/WM_Video.mp4';

import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './wealth-management.module.css';

const title = 'Wealth Management AR';
const description = `I worked as a Unity developer for RBC to build an augmented reality smartphone app that scans real-world objects and displays the associated RBC investment fund`;
const roles = ['Unity Game Development', 'UI Design and Development', 'C# Development'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const WealthManagement = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          src={wmSimple}
          srcSet={`${wmSimple} 1920w`}
          width={1280}
          height={800}
          placeholder={sparBackgroundPlaceholer}
          opacity={0.8}
        />
        <ProjectHeader title={title} description={description} roles={roles} />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              className={styles.video}
              srcSet={`${wmVideo} 1920w`}
              width={1920}
              height={1080}
              placeholder={sparBackgroundPlaceholer}
              alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
              sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
