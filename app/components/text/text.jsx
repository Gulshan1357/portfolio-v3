import { classes } from '~/utils/style';
import styles from './text.module.css';

export const Text = ({
  children,
  size = 'm',
  as: Component = 'span',
  align = 'auto',
  weight = 'auto',
  secondary,
  className,
  highlight,
  ...rest
}) => {
  return (
    <Component
      className={classes(styles.text, className)}
      data-align={align}
      data-size={size}
      data-weight={weight}
      data-secondary={secondary}
      data-highlight={highlight}
      {...rest}
    >
      {children}
    </Component>
  );
};
