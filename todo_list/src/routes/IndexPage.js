import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Todo from '../components/Todo';
import Film from '../components/Film';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Todo></Todo>
      <Film></Film>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
