import portfolioV2Hi from '~/assets/portfolioV2-peek.png';
import portfolioV2Low from '~/assets/portfolioV2-peek-320.png';
import portfolioV2Placeholder from '~/assets/portfolioV2-peek-placeholer.png';

import portfolioV2HiFi from '~/assets/portfolio-v2-hifi.png';
import portfolioV2HiFiLow from '~/assets/portfolio-v2-hifi-640.png';
import portfolioV2HiFiPlaceholder from '~/assets/portfolio-v2-hifi-placeholder.png';
import portfolioV2LoFi from '~/assets/portfolio-v2-lofi.png';
import portfolioV2LoFiLow from '~/assets/portfolio-v2-lofi-640.png';
import portfolioV2LoFiPlaceholder from '~/assets/portfolio-v2-lofi-placeholder.png';

import portfolioV1HiFi from '~/assets/portfolio-v1-hifi.png';
import portfolioV1HiFiLow from '~/assets/portfolio-v1-hifi-640.png';
import portfolioV1HiFiPlaceholder from '~/assets/portfolio-v1-hifi-placeholder.png';
import portfolioV1LoFi from '~/assets/portfolio-v1-lofi.png';
import portfolioV1LoFiLow from '~/assets/portfolio-v1-lofi-640.png';
import portfolioV1LoFiPlaceholder from '~/assets/portfolio-v1-lofi-placeholder.png';

import portfolioV3 from '~/assets/portfolio-v3.png';
import portfolioV3Low from '~/assets/portfolio-v3-640.png';
import portfolioV3Placeholder from '~/assets/portfolio-v3-placeholder.png';
import portfolioV3P from '~/assets/portfolio-v3-p.png';
import portfolioV3PLow from '~/assets/portfolio-v3-p-640.png';
import portfolioV3PPlaceholder from '~/assets/portfolio-v3-p-placeholder.png';

import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { List, ListItem } from '~/components/list';
import { Link } from '~/components/link';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './portfolio.module.css';
import { Button } from '~/components/button';

const title = 'Portfolio Websites';
const description = `The first version of my portfolio website was build using Webflow, second version using React and SCSS, and the third (and also current) version using React, Three.js and Framer Motion.`;
const roles = [
  'Front-End Developer',
  'Full-Stack Developer',
  'User Interface (UI) Design',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Portfolio = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          src={portfolioV2Hi}
          srcSet={`${portfolioV2Low} 320w, ${portfolioV2Hi} 927w`}
          placeholder={portfolioV2Placeholder}
          opacity={0.8}
        />
        <ProjectHeader title={title} description={description} roles={roles} />

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Introduction</ProjectSectionHeading>
            <ProjectSectionText>
              My first portfolio site, built with Webflow, was my initial step into
              showcasing my work online. It served its purpose, but over time it began to
              feel... vintage.
            </ProjectSectionText>
            <ProjectSectionText>
              So I rolled out Version 2—custom built, more technically aligned with where
              I was as a developer, and better suited to highlight my expanding skill set
              and professional journey. It was build in React with custom design
              components using SCSS.
            </ProjectSectionText>{' '}
            <ProjectSectionText>
              Now that I’ve grown even further, I developed a third version (this
              website). This is not only an improvement in terms of design but also in
              terms of maintainability and accessability.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Version 1: The Webflow Wonder</ProjectSectionHeading>
              <ProjectSectionText>
                This was my very first portfolio website, built using Webflow in 2020. I
                was just getting my feet wet in web development. I could’ve used React
                (yes, I already knew it back then—flex), but I wanted something quick and
                shiny.
              </ProjectSectionText>
              <ProjectSectionText>
                To get things rolling, I had to learn both Figma for the initial designs
                and Webflow for the development. It’s not much but I still love looking
                back at it to remind myself how far I’ve come (and also to cringe a
                little)
              </ProjectSectionText>
              <div className={styles.buttons}>
                <div className={styles.button}>
                  <Button
                    iconHoverShift
                    href="https://gulshansankhyan.webflow.io/"
                    iconEnd="link"
                    secondary
                  >
                    Live Link
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${portfolioV1LoFiLow} 640w, ${portfolioV1LoFi} 1440w`}
                placeholder={portfolioV1LoFiPlaceholder}
                alt="Low Fidelity figma design of the website's homepage."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${portfolioV1HiFiLow} 640w, ${portfolioV1HiFi} 1440w`}
                placeholder={portfolioV1HiFiPlaceholder}
                alt="Hi Fidelity figma design of the website's homepage."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Version 2: The React Reboot</ProjectSectionHeading>
              <ProjectSectionText>
                My first portfolio soon started showing its limitations—like a bike with
                training wheels on a racetrack. So, I built this second one in 2023.
              </ProjectSectionText>
              <ProjectSectionText>
                I stayed with Figma for design but decided to go with React for
                development. I wanted something with a cyberpunk vibe—glow, neon, shadows…
                basically the design equivalent of saying “I watched Blade Runner once.”
              </ProjectSectionText>
              <ProjectSectionText>
                It was a fun ride, but also the moment I started suspecting I might not
                love the whole web design gig.
              </ProjectSectionText>
              <div className={styles.buttons}>
                <div className={styles.button}>
                  <Button
                    iconHoverShift
                    href="https://gulshan-portfolio-v2.vercel.app/"
                    iconEnd="link"
                    secondary
                  >
                    Live Link
                  </Button>
                </div>
                <div className={styles.button}>
                  <Button
                    iconHoverShift
                    href="https://github.com/Gulshan1357/gulshan-portfolio-v2"
                    iconEnd="github"
                    secondary
                  >
                    GitHub Repo
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${portfolioV2LoFiLow} 640w, ${portfolioV2LoFi} 1440w`}
                placeholder={portfolioV2LoFiPlaceholder}
                alt="Low Fidelity figma design of the website's homepage."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${portfolioV2HiFiLow} 640w, ${portfolioV2HiFi} 1440w`}
                placeholder={portfolioV2HiFiPlaceholder}
                alt="Hi Fidelity figma design of the website's homepage."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>
                Version 3: Hoping it'll survive longer
              </ProjectSectionHeading>
              <ProjectSectionText>
                Something about my last portfolio always felt off to me. I realised that
                I’m just okay at web design and all my designs were fine. Just fine. To
                elevate my portfolio I need a different approach.
              </ProjectSectionText>
              <ProjectSectionText>
                That’s when I stumbled upon{' '}
                <Link href="https://github.com/HamishMW/portfolio">Hamish Williams</Link>{' '}
                and his brilliant portfolio site. His design work is really top-notch and
                best-of-all open source, and I figured—why reinvent the wheel when a
                rocket ship is parked next door?
              </ProjectSectionText>
              <ProjectSectionText>
                So, in 2025, I shamelessly used his work as a foundation. It saved me
                weeks. If you're reading this Hamish: you, my friend, are a legend.
              </ProjectSectionText>
              <div className={styles.buttons}>
                <div className={styles.button}>
                  <Button
                    iconHoverShift
                    href="https://github.com/Gulshan1357/portfolio-v3"
                    iconEnd="github"
                    secondary
                  >
                    GitHub Repo
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${portfolioV3PLow} 640w, ${portfolioV3P} 1920w`}
                placeholder={portfolioV3PPlaceholder}
                alt="Hi Fidelity figma design of the website's homepage."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${portfolioV3Low} 640w, ${portfolioV3} 1920w`}
                placeholder={portfolioV3Placeholder}
                alt="Low Fidelity figma design of the website's homepage."
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
