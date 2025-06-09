import sparBackgroundPlaceholer from '~/assets/spar-background-placeholder.png';

import wmHome from '~/assets/WM_home.png';
import wmHomePlaceholder from '~/assets/WM_home-placeholder.png';
import wmSimple from '~/assets/WM_Simple.png';
import wmSimpleLow from '~/assets/WM_Simple2-360.png';
import wmSimple2 from '~/assets/WM_Simple2.png';
import wmSimple2Placeholder from '~/assets/WM_Simple2-placeholder.png';
import wmIndepth from '~/assets/WM_In-depth.png';
import wmInDepthLow from '~/assets/WM_In-depth-320w.png';
import wmInDepthPlaceholder from '~/assets/WM_In-depth-placeholder.png';
import wmVideo from '~/assets/WM_Video.mp4';
import wmWelcomeAnim from '~/assets/WM_Welcome.gif';

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
import { List, ListItem } from '~/components/list';
import { Text } from '~/components/text';

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

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Introduction</ProjectSectionHeading>
            <ProjectSectionText>
              According to Warren Buffett{' '}
              <Text span highlight>
                people should invest in what they know
              </Text>
              . This application embodies that principle. By leveraging this app, users
              gain the ability to scan the objects in their surroundings using their phone
              camera. This provides supplementary investment details, such as identifying
              the specific RBC fund associated with that object. Furthermore, users can
              gain insights into how these funds stack up against well-known index funds.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div>
              <ProjectSectionHeading>Project Details</ProjectSectionHeading>
              <ProjectSectionText>
                In this project, I made three significant contributions:
              </ProjectSectionText>
              <ProjectSectionText>
                <List>
                  <ListItem>
                    <Text span highlight>
                      Welcome Screen Animation
                    </Text>
                    : Building upon RBC's initial logo animation, I introduced my own
                    animation that smoothly glided atop the existing logo. This animation
                    was synchronized with the emergence of new text, creating a
                    captivating visual transition.
                  </ListItem>
                  <ListItem>
                    <Text span highlight>
                      UI Design and Development
                    </Text>
                    : I designed and developed both the Simple and In-depth views for
                    scanned objects in form of floating card in Unity.
                  </ListItem>
                  <ListItem>
                    <Text span highlight>
                      Graph Integration
                    </Text>
                    : Additionally, I integrated a data graph feature that facilitated a
                    comparative analysis of RBC's funds' values against popular index
                    funds.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${wmInDepthLow} 360w, ${wmIndepth} 720w`}
                placeholder={wmInDepthPlaceholder}
                alt="The unreal app with Metahuman is streamed to the web application using pixelstreaming"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${wmSimpleLow} 360w, ${wmSimple2} 720w`}
                placeholder={wmSimple2Placeholder}
                alt="Each scenario have a different avatar and difficulty level."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${wmWelcomeAnim} 664w`}
                placeholder={wmHomePlaceholder}
                alt="User can select various conversation scenarios."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
