import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="48"
      height="29"
      viewBox="0 0 48 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M10.1081 30.4128.0464 24.5099V6.7567L10.1081.8539h6.7205v23.6561h14.3901v5.9029H10.1081Zm21.87-20.6935V6.7567H19.4864V.8539H39.9516l8.8087 5.9029v2.9626H31.9782Zm1.8984 20.6935V19.8767h-8.1633V14.0184h23.047V30.4128H33.8766Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
