import React from 'react';
import { connect } from 'dva';
import styles from './Container.css';
import Mytable from '../components/Table/Mytable';

function Container() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
      <Mytable />
    </div>
  );
}

Container.propTypes = {
};

export default connect()(Container);
