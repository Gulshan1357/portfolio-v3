import notFoundPoster from '~/assets/notfound.png';
import notFoundPosterPlaceholder from '~/assets/notfound-placeholder.png';
import flatlinePoster from '~/assets/flatline-640.png';
import flatlinePosterPlaceholder from '~/assets/flatline-placeholder.png';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import styles from './error.module.css';
import { Image } from '~/components/image';
import flatlineSkull from './error-flatline.svg';

export function Error({ error }) {
  const flatlined = !error.status;

  const getMessage = () => {
    switch (error.status) {
      case 404:
        return {
          summary: 'Error: redacted',
          message: 'This page could not be found.',
        };
      case 405:
        return {
          summary: 'Error: method denied',
          message: error.data,
        };
      default:
        return {
          summary: 'Error: anomaly',
          message: error.statusText || error.data || error.toString(),
        };
    }
  };

  const { summary, message } = getMessage();

  return (
    <section className={styles.page}>
      {flatlined && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
            [data-theme='dark'] {
              --primary: oklch(69.27% 0.242 25.41);
              --accent: oklch(69.27% 0.242 25.41);
            }
            [data-theme='light'] {
              --primary: oklch(56.29% 0.182 26.5);
              --accent: oklch(56.29% 0.182 26.5);
            }
          `,
          }}
        />
      )}
      <Transition in>
        {({ visible }) => (
          <>
            <div className={styles.details}>
              <div className={styles.text}>
                {!flatlined && (
                  <Heading
                    className={styles.title}
                    data-visible={visible}
                    level={0}
                    weight="bold"
                  >
                    {error.status}
                  </Heading>
                )}
                {flatlined && (
                  <Heading
                    className={styles.titleFlatline}
                    data-visible={visible}
                    level={2}
                    as="h1"
                  >
                    <svg width="60" height="80" viewBox="0 0 60 80">
                      <use href={`${flatlineSkull}#skull`} />
                    </svg>
                    <DecoderText text="Flatlined" start={visible} delay={300} />
                  </Heading>
                )}
                {!flatlined && (
                  <Heading
                    aria-hidden
                    className={styles.subheading}
                    data-visible={visible}
                    as="h2"
                    level={4}
                  >
                    <DecoderText text={summary} start={visible} delay={300} />
                  </Heading>
                )}
                <Text className={styles.description} data-visible={visible} as="p">
                  {message}
                </Text>
                {flatlined ? (
                  <Button
                    secondary
                    iconHoverShift
                    className={styles.button}
                    data-visible={visible}
                    href="mailto:g.sankhyan1357@gmail.com"
                    icon="chevron-right"
                  >
                    Email me
                  </Button>
                ) : (
                  <Button
                    secondary
                    iconHoverShift
                    className={styles.button}
                    data-visible={visible}
                    href="/"
                    icon="chevron-right"
                  >
                    Back to homepage
                  </Button>
                )}
              </div>
            </div>

            <div className={styles.videoContainer} data-visible={visible}>
              <Image
                reveal
                cover
                noPauseButton
                delay={600}
                className={styles.video}
                src={flatlined ? flatlinePoster : notFoundPoster}
                placeholder={
                  flatlined ? flatlinePosterPlaceholder : notFoundPosterPlaceholder
                }
              />
              <p className={styles.credit} data-visible={visible}>
                Created using AI
              </p>
            </div>
          </>
        )}
      </Transition>
    </section>
  );
}
