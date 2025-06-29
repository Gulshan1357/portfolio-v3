import predictiveHigh from '~/assets/predictive.png';
import predictiveLow from '~/assets/predictive-320.png';
import predictivePlaceholder from '~/assets/predictive-placeholder.png';

import { Footer } from '~/components/footer';
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
import { List, ListItem } from '~/components/list';
import { Button } from '~/components/button';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './predictive-tool.module.css';
import { Text } from '~/components/text';

const title = 'Predictive Modelling Tool';
const description = `I worked with St. Joseph's Healthcare Hamilton (SJHH) to enhance the discharge journey of patients to Alternate Level of Care (ALC) through a Predictive Modelling Tool.`;
const roles = [
  'User Experience (UX) Design',
  'Human Centered Design',
  'User Interface (UI) Design',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const PredictiveTool = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          src={predictiveHigh}
          srcSet={`${predictiveHigh} 1918w, ${predictiveLow} 320w`}
          width={1918}
          height={1074}
          placeholder={predictivePlaceholder}
          opacity={0.8}
        />
        <ProjectHeader title={title} description={description} roles={roles} />

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Introduction</ProjectSectionHeading>
            <ProjectSectionText>
              In the scenario where a patient requires care beyond the hospital setting,
              they often transition to an Alternate Level of Care (ALC) destination such
              as Long-Term Care. This transition, however, presents several challenges.
              Patient experience is marked by uncertainty in the discharge process,
              coupled with extended waiting times. Our objective was to{' '}
              <Text highlight>
                enhance this ALC discharge journey by introducing a Predictive Modeling
                Tool
              </Text>
              . This tool would foresee potential discharge destinations and estimate the
              anticipated length of stay for each patient, streamlining the process for
              all stakeholders involved.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectTextRow>
            <ProjectSectionHeading>Project Details</ProjectSectionHeading>
            <ProjectSectionText>
              The 8-month duration of our project journey can be effectively segmented
              into the subsequent stages:
            </ProjectSectionText>
            <List>
              <ListItem>
                <Text highlight>Understanding the ALC Process</Text>: We embarked on
                comprehensive interviews with medical professionals from SJHH (St.
                Joseph's Healthcare Hamilton), not solely to grasp the ALC process
                intricacies, but also to understand the distinct conditions guiding
                patients to specific ALC destinations. To ensure precision in our
                understanding and to ask pertinent questions, we translated the entire
                process into a MatLab Simulation Model incorporating logic gates.
              </ListItem>
              <ListItem>
                <Text highlight>Stakeholder and User Insights</Text>: While a multitude of
                stakeholders were involved, our primary focus lay on Patients and Hospital
                Administrations as target users.
              </ListItem>
              <ListItem>
                <Text highlight>Synthesizing Design Research</Text>: Our approach
                encompassed engaging with patients, medical professionals, and Hospital
                Management to uncover pain points and accumulate valuable insights.
              </ListItem>
              <ListItem>
                <Text highlight>Iterative Prototyping</Text>: Along with stakeholder
                interviews, we initiated the creation and continuous refinement of
                prototypes to parallelly inform them our design process and get their
                feedback.
              </ListItem>
              <ListItem>
                <Text highlight>Final Deliverables</Text>: We presented the culmination of
                findings to our professors and Stakeholders from SJHH. This included an
                enhanced ALC discharge journey map alongside a Low-Fidelity wireframe for
                a Mobile App. This app is envisioned to provide patients with data on
                possible waiting times and discharge destinations within the ALC
                framework.
              </ListItem>
            </List>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered>
            <div className={styles.columns}>
              <Button
                secondary
                iconHoverShift
                href="https://drive.google.com/file/d/1QjLhfHbOvA5nUHDhm5pwMunySbWONzAx/view?usp=sharing"
                iconEnd="link"
              >
                Project Poster
              </Button>
            </div>
            <div className={styles.columns}>
              <Button
                secondary
                iconHoverShift
                href="https://drive.google.com/file/d/1PHoGi_c5Xw1aC0u5m6jhFXPekuXgeiN6/view?usp=sharing"
                iconEnd="link"
              >
                Project Presentation
              </Button>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
