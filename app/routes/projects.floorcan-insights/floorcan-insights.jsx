import floorcan1High from '~/assets/floorcan1-1920w.png';
import floorcan1Low from '~/assets/floorcan1-960w.png';
import floorcanPlaceholder from '~/assets/floorcan-placeholder.png';
import floorcan2High from '~/assets/floorcan2-1920w.png';
import floorcan2Low from '~/assets/floorcan2-960w.png';
import floorcan3High from '~/assets/floorcan3-1920w.png';
import floorcan3Low from '~/assets/floorcan3-960w.png';
import floorcan4High from '~/assets/floorcan4-1920w.png';
import floorcan4Low from '~/assets/floorcan4-960w.png';

import { Footer } from '~/components/footer';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment, Suspense, lazy } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './floorcan-insights.module.css';
import { Text } from '~/components/text';

const Carousel = lazy(() =>
  import('~/components/carousel').then(module => ({ default: module.Carousel }))
);

const title = 'Floorcan Insights';
const description = `I designed and developed a geographical data visualization tool using Figma and React for RBC`;
const roles = [
  'Front-End Developer',
  'Full-Stack Developer',
  'User Interface (UI) Design',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const FloorcanInsights = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          src={floorcan1High}
          srcSet={`${floorcan1Low} 960w, ${floorcan1High} 1920w`}
          width={1920}
          height={1137}
          placeholder={floorcanPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader title={title} description={description} roles={roles} />

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Introduction</ProjectSectionHeading>
            <ProjectSectionText>
              I was tasked with revitalizing the data visualization tools utilized by the
              insurance department at RBC. Their existing tools were outdated for
              analyzing client geographical data. To modernize this process, I utilized
              the DECK.GL framework in combination with <Text highlight>React</Text>,
              enabling a comprehensive redesign. My primary responsibility involved
              conceiving the User Interface in <Text highlight>Figma</Text> and then
              translating the finalized design into a fully functioning Web application.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectTextRow>
            <ProjectSectionHeading>Project Details</ProjectSectionHeading>
            <ProjectSectionText>
              Beginning with the design phase, I leveraged Figma to craft the UI,
              meticulously sculpting a visual identity with RBC's design guide. After the
              design was finalized, I transitioned to the development phase. Implementing
              the UI in React, I employed CSS to bring the design to life, ensuring a
              seamless and intuitive user experience.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Suspense>
              <Carousel
                placeholder={floorcanPlaceholder}
                images={[
                  {
                    srcSet: `${floorcan1Low} 960w, ${floorcan1High} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'A floorcan insights web application with different filters.',
                  },
                  {
                    srcSet: `${floorcan2Low} 960w, ${floorcan2High} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'A floorcan insights web application with different filters.',
                  },
                  {
                    srcSet: `${floorcan3Low} 960w, ${floorcan3High} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'A floorcan insights web application with different filters.',
                  },
                  {
                    srcSet: `${floorcan4Low} 960w, ${floorcan4High} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'A floorcan insights web application with different filters.',
                  },
                ]}
                width={1920}
                height={1080}
              />
            </Suspense>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
