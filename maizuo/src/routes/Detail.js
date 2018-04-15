import style from './Detail.css';
import React, { Component } from 'react';
import { connect } from 'dva';

const DetailUI = (props) => {
    return (
        <div className={style.Detail}>
            detail
        </div>
    )
}

const Detail = connect()(DetailUI);
export default Detail;
