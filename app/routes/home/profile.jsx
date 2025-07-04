import profileImgLow from '~/assets/profile-320.jpeg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpeg';
import profileImg from '~/assets/profile-1024.jpeg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import weapons from './weapons.svg';
import styles from './profile.module.css';

import config from '~/config.json';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Gulshan, currently I live in Canada working as a freelance software developer at{' '}
      <Link href="https://www.upwork.com/freelancers/~010303e0c1e280341c?__cf_chl_tk=AKYvPmIogR2asNNwc_vtO6uREqdkLUpNGKqTN76TO7c-1749065681-1.0.1.1-lXKxS8w2LdXXfcg.SFDdhnRpnlrSPIFkp.j9DhEdL98">
        Upwork
      </Link>
      . I have developed Unreal Engine and Unity projects along with Full-Stack Web
      projects in React. Being comfortable with UI/UX allows me to rapidly prototype and
      validate experiences.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my spare time I like to listen to audiobooks and play video games. I’m always
      down for hearing about new projects, so feel free to drop me a line.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href={`mailto:${config.email}`}
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImgLow} 320w, ${profileImg} 1024w`}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Enhanced by AI."
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${weapons}#vertical`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
