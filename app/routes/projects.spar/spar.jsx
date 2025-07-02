import sparBackground from '~/assets/spar-background.png';
import sparBackgroundMedium from '~/assets/spar-background-1024w.png';
import sparBackgroundLow from '~/assets/spar-background-320w.png';
import sparBackgroundPlaceholder from '~/assets/spar-background-placeholder.png';
import spar1 from '~/assets/spar1.png';
import spar1Medium from '~/assets/spar1-1024w.png';
import spar1Low from '~/assets/spar1-320w.png';
import spar1Placeholder from '~/assets/spar1-placeholder.png';
import spar2 from '~/assets/spar2.png';
import spar2Medium from '~/assets/spar2-1024w.png';
import spar2Low from '~/assets/spar2-320w.png';
import sparWon from '~/assets/spar-won.jpeg';
import sparWonPlaceholder from '~/assets/spar-won-placeholder.jpeg';
import sparGif from '~/assets/spar-gif.gif';
import sparGifLow from '~/assets/spar-gif-240w.gif';

import sparVideoIntro from '~/assets/spar-intro.mp4';
import sparVideoDemo from '~/assets/spar-demo.mp4';
import sparVideoPlaceholder from '~/assets/spar-video-placeholder.png';

import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { List, ListItem } from '~/components/list';
import { Link } from '~/components/link';
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
import { Text } from '~/components/text';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './spar.module.css';

const title = 'SPAR';
const description = `I worked as an Unreal developer to build an AI-powered digital avatar using technologies like Unreal's Metahuman and pixelstreaming`;
const roles = [
  'Unreal Engine Development',
  'Full Stack Web Development',
  'C++ Development',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Spar = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          src={sparBackgroundMedium}
          srcSet={`${sparBackgroundMedium} 1024w, ${sparBackground} 1920w`}
          placeholder={sparBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="Medium Article by the founder"
          url="https://medium.com/@hobegi/spar-training-employees-with-ai-avatars-and-roleplays-e3a411b583ab"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              className={styles.video}
              srcSet={`${sparVideoIntro} 3840w`}
              placeholder={sparVideoPlaceholder}
              alt="A short introductory video showcasing SPAR."
              sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Introduction</ProjectSectionHeading>
            <ProjectSectionText>
              As advancements in technology and AI reshaped the business landscape, the
              need for a new approach to workforce training became clear. In response,
              SPAR was founded in 2023 with a mission to redefine how customer-facing
              employees grow, learn, and succeed.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Project Overview</ProjectSectionHeading>
              <ProjectSectionText>
                The goal was to use the Unreal Engine&apos;s MetaHuman Technology and AI
                to create a realistic conversational experience. The unreal app would be
                hosted in the cloud and streamed via Pixel Streaming into a React Web App,
                providing an interactive experience similar to Zoom or Microsoft Teams.
                After each conversation, or should I say &apos;Spar&apos; 😉, the AI
                stepped in, analyzing performance and offering targeted insights for
                improvement.
              </ProjectSectionText>
              <ProjectSectionText>
                My role focused on developing the experience within Unreal Engine, while
                also contributing to the full-stack web development to ensure that the
                Unreal and the Web applications were integrated seamlessly.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${spar1Low} 320w, ${spar1Medium} 640w, ${spar1} 1920w`}
                placeholder={spar1Placeholder}
                alt="User can select various conversation scenarios."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${spar2Low} 320w, ${spar2Medium} 640w, ${spar2} 1920w`}
                placeholder={spar1Placeholder}
                alt="Each scenario have a different avatar and difficulty level."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${sparBackgroundLow} 320w, ${sparBackgroundMedium} 640w, ${sparBackground} 1920w`}
                placeholder={sparBackgroundPlaceholder}
                alt="The unreal app with Metahuman is streamed to the web application using pixelstreaming"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Improving the experience</ProjectSectionHeading>
              <ProjectSectionText>
                Just animating the mouth wasn't enough. To make the Metahuman avatars feel
                more natural and engaging, I implemented additional enhancements like:
              </ProjectSectionText>
              <List>
                <ListItem>Subtle body and hand movements</ListItem>
                <ListItem>
                  Dynamic Facial Expressions and Body Language to signify emotions like
                  Angry, Happy, Joy, Satisfied, etc.
                </ListItem>
                <ListItem>
                  Multiple animation states like Idle, Listening and Talking expressed by
                  animations like head-shake, nodding etc.
                </ListItem>
              </List>
            </ProjectTextRow>
            <ProjectImage
              srcSet={`${sparGifLow} 240w, ${sparGif} 480w`}
              placeholder={sparBackgroundPlaceholder}
              alt="A Metahuman displaying different emotions."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>Project in Action</ProjectSectionHeading>
              <ProjectSectionText>
                The AI still needs a bit of fine-tuning—it’s got more attitude than
                accuracy—but the Unreal to Web pixel streaming, Metahuman switching at
                runtime, and facial expressions are all working fine. Hover over the video
                and <Text highlight>Press Play</Text> to watch the it in action.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectImage
              raised
              className={styles.video}
              srcSet={`${sparVideoDemo} 3840w`}
              placeholder={sparVideoPlaceholder}
              alt="A demonstration of spar in action.."
              sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                The startup won 3rd place at AI Everything 2025 in Dubai, generated
                $10,000 in sales within its first year, and was accepted into the NVIDIA
                Inception incubation program.
              </ProjectSectionText>
              <ProjectSectionText>
                To learn more about the project you can open up my article{' '}
                <Link href="/articles/ai-powered-metahuman">here</Link> or at
                <Link href="https://medium.com/@g.sankhyan1357/ai-powered-metahumans-using-ai-and-unreal-engine-5-to-create-realistic-characters-6c6aeb71c816">
                  {' '}
                  medium
                </Link>
                . You can also read the{' '}
                <Link href="https://medium.com/@hobegi/spar-training-employees-with-ai-avatars-and-roleplays-e3a411b583ab">
                  {' '}
                  article
                </Link>{' '}
                by the founder{' '}
                <Link href="https://www.linkedin.com/in/henryobegi/">Henry Obegi</Link>.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectImage
              srcSet={`${sparWon} 800w`}
              width={800}
              height={436}
              placeholder={sparWonPlaceholder}
              alt="The startup won 3rd place in  AI Everything 2025."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
