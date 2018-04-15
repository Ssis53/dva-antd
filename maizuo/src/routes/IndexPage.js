import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Carousel, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { getSwiperPic } from '../services/getSwiper';
import { getFilmsInfo } from '../services/getFilms';
import { Link } from 'dva/router'

class IndexPage extends React.Component {
    componentDidMount() {
        this.props.getSwiper();
        this.props.getFilms();
    }
    render() {
        var that = this;
        return (
            <div className={styles.home}>
                <Carousel
                  autoplay={true}
                  infinite
                  selectedIndex={0}
                  style={{minHeight: '50px'}}
                  dots={false}
                >
                    {
                        this.props.pic.map(function(items, index) {
                            return (
                                <div key={index} className={styles.item}>
                                    <img src={items.imageUrl} alt=""/>
                                </div>
                            )
                        })
                    }
                </Carousel>
                {
                    this.props.films.map(function(items, index) {
                        return (
                            <div key={items.id}>
                                <WingBlank>
                                    <WhiteSpace size="lg" />
                                        <Link to="/detail">
                                            <Content {...that.props}>
                                                {items}
                                            </Content>
                                        </Link>
                                </WingBlank>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const Content = (props) => {
    return(
        <div className={styles.content}>
            <img src={props.children.cover.origin} alt=""/>
            <div className={styles.info}>
                <div className={styles.left}>
                    <h6>{props.children.name}</h6>
                    <Button type="primary" size="small">Primary</Button>
                    <div className={styles.sub}>
                        {props.children.intro}
                    </div>
                </div>
                <span className={styles.scoll}>
                    {props.children.grade}
                </span>
            </div>
        </div>
    )
}

IndexPage.propTypes = {
};

const mapStateToProps = (state) => {
    return {
        pic: state.swiper.pic,
        films: state.nowplay.films
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSwiper() {
            getSwiperPic().then(function(res) {
                dispatch({
                    type: "swiper/GET_SWIPER",
                    payload: res.data.data.billboards
                })
            })
        },
        getFilms() {
            getFilmsInfo().then(function(res) {
                dispatch({
                    type: "nowplay/GET_FLIMS",
                    payload: res.data.data.films
                })
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
