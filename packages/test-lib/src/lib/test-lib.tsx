import styles from './test-lib.module.css';
import classnames from 'classnames';

/* eslint-disable-next-line */
export interface TestLibProps {}

export function TestLib(props: TestLibProps) {
  return (
    <div className={classnames(styles['container'])}>
      <h1>Welcome to TestLib!</h1>
    </div>
  );
}

export default TestLib;
