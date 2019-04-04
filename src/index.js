import React from 'react';
import { render } from 'react-dom';
import App from './app/App';
import styles from './index.scss';

render(<App className={styles.index} />, document.getElementById('root'));
