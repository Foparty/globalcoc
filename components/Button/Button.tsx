import { Button } from '@/types/types';
import styles from './Button.module.css';

const Button = ({ children }: Button) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
