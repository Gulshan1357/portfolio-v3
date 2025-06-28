import allProjectsData from '~/all-projects-data';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { formatDate } from '~/utils/date';
import { Image } from '~/components/image';
import { Text } from '~/components/text';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useLoaderData } from '@remix-run/react';
import styles from './all-projects.module.css';

const title = 'All Projects';
const description = `A list of all of my projects`;

export const meta = () => {
  return baseMeta({ title, description });
};

function isExternalLink(href) {
  return typeof href === 'string' && /^https?:\/\//.test(href);
}

function ProjectCard({
  title,
  dateTime,
  abstract,
  imageSrcSet,
  imagePlaceholder,
  imageAlt,
  linkTo,
  linkText = 'Read More',
  postTag = 'Featured',
  sideTag = '007', // default value
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div className={styles.project}>
      <Text className={styles.postLabel} size="s">
        {postTag}
      </Text>

      <div className={styles.postImage}>
        <Image
          srcSet={imageSrcSet}
          placeholder={imagePlaceholder}
          alt={imageAlt}
          sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
        />
      </div>

      <RouterLink
        unstable_viewTransition
        prefetch="intent"
        to={linkTo}
        className={styles.postLink}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        target={isExternalLink(linkTo) ? '_blank' : undefined}
      >
        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" lineWidth="128px" />
            <span className={styles.postDateText}>{dateTime}</span>
          </div>
          <Heading className={styles.postTitle} as="h2" level={2}>
            {title}
          </Heading>
          <Text size="l" as="p">
            {abstract}
          </Text>
          <div className={styles.postFooter}>
            <Button secondary iconHoverShift icon="chevron-right" as="div">
              {linkText}
            </Button>
          </div>
        </div>
        <Text aria-hidden className={styles.sideTag} size="s">
          {sideTag}
        </Text>
      </RouterLink>
    </div>
  );
}

const postsHeader = (
  <header className={styles.header}>
    <Heading className={styles.heading} level={5} as="h1">
      <DecoderText text="Projects" />
    </Heading>
    {/* <Barcode className={styles.barcode} /> */}
  </header>
);

export const AllProjects = () => {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <article className={styles.projects}>
        <section className={styles.content}>
          {postsHeader}
          <div className={styles.grid}>
            {allProjectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                dateTime={project.dateTime}
                abstract={project.abstract}
                // Pass the processed image URLs from your data
                imageSrcSet={project.imageSrcSet}
                imagePlaceholder={project.imagePlaceholder}
                imageAlt={project.imageAlt}
                linkTo={project.linkTo}
                linkText={project.linkText}
                postTag={project.postTag}
                sideTag={project.sideTag}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
};
