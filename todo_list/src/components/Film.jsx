import React, { Component } from "react";
import { connect } from "dva";
import style from "./Film.css";
import { query } from "../services/example";

class FilmUI extends Component {
  constructor() {
    super();
    console.log("constructor");
  }
  componentWillMount() {
    console.log("willMount");
  }
  componentDidMount() {
    console.log("didMount");
  }
  componentWillReceivePorps() {
    console.log("willReceiveProps");
  }
  render() {
    console.log("render");
    return (
      <div className={style.films}>
        <button
          onClick={() => {
            this.props.add();
          }}
        >
          获取电影
        </button>
        <h2>{this.props.films}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps");
  return {
    films: state.film.films
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add() {
      dispatch({
        type: "film/ADD",
        payload: "寻梦环游记"
      });
      query(
        "/api/static/v2.1/index/banner.json",
        {
          method: "get"
        }
    ).then(function(res) {
        console.log(res);
    })

    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmUI);
