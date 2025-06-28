import lacrosseHigh from '~/assets/lacrosse-vr.png';
import lacrosseLow from '~/assets/lacrosse-vr-320.png';
import lacrossePlaceholder from '~/assets/lacrosse-vr-placeholer.png';
import lacrosseVideo from '~/assets/lacrosse.mp4';

import { Footer } from '~/components/footer';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Button } from '~/components/button';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './lacrosse-vr.module.css';
import { Text } from '~/components/text';

const title = 'Lacrosse VR';
const description = `I worked as a Unity developer for RBC to build an virtual reality lacrosse game targeting Meta Quest 2 for North American Indigenous Games 2023 (NAIG)`;
const roles = ['Unity Development', 'Video Game Programming', 'C# Development'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const LacrosseVR = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          src={lacrosseHigh}
          srcSet={`${lacrosseHigh} 1024w, ${lacrosseLow} 320w`}
          width={1024}
          height={1024}
          placeholder={lacrossePlaceholder}
          opacity={0.8}
        />
        <ProjectHeader title={title} description={description} roles={roles} />

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Introduction</ProjectSectionHeading>
            <ProjectSectionText>
              Our team's objective was to demonstrate the potential of Virtual Reality at
              the North American Indigenous Games 2023 (NAIG), scheduled for July 2023 in
              Nova Scotia. Aligned with the event's theme, we chose to develop a project
              centered around the sport of lacrosse. The project was structured into two
              distinct segments: firstly, an exploration of lacrosse's historical roots,
              and secondly, an interactive experience allowing users to engage in various
              lacrosse games. Although I departed from the team in April, I was an active
              contributor. During my involvement, I specifically focused on{' '}
              <Text highlight>creating and testing the shooting mechanism</Text> for the
              game.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              className={styles.video}
              srcSet={`${lacrosseVideo} 1024w`}
              width={1024}
              height={1024}
              placeholder={lacrossePlaceholder}
              alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
              sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Project Details</ProjectSectionHeading>
            <ProjectSectionText>
              During the development phase, I harnessed the capabilities of Unity's new XR
              Interaction Toolkit to emulate both single-handed and double-handed throwing
              actions within the VR environment. I introduced{' '}
              <Text highlight>two distinct throwing mechanisms</Text> to enhance the user
              experience.
            </ProjectSectionText>
            <ProjectSectionText>
              In the initial approach, the user triggers the ball's release by pressing a
              designated button. In contrast, the second method operates by detecting the
              user's throwing motion. Specifically, the ball is released once the user's
              throwing motion generates angular velocity that surpasses a predefined
              threshold. This dynamic interaction adds a layer of realism and engagement
              to the VR experience, enhancing the immersion of the lacrosse game.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <Button
            secondary
            iconHoverShift
            href="https://www.linkedin.com/posts/design-de-plume_ddp-x-rbc-10th-north-american-indigenous-activity-7095403465618706433-unh_?utm_source=share&utm_medium=member_desktop"
            iconEnd="link"
          >
            LinkedIn Post by Design de Plume Inc.
          </Button>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
