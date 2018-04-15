import React from "react";
import { connect } from "dva";
import { Input } from "antd";
import { List } from "antd";
import { Button, Icon } from "antd";

const Todo = props => {
  return (
    <div className="myTodolist" style={{ margin: "50px auto", width: 400 }}>
      <Input
        onKeyDown={e => {
          props.add(e);
        }}
        placeholder="Basic usage"
        style={{ width: 200 }}
      />
      <List
        style={{ margin: 50 }}
        size="small"
        header={<div>TodoList</div>}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <Button onClick={() => {props.remove(index)}} type="danger" shape="circle" icon="close" size="small" />
            ]}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    list: state.todolist.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add(e) {
      if (e.keyCode === 13) {
        let data = e.currentTarget.value;
        dispatch({
          type: "todolist/ADD",
          payload: data ? data : null
        });
        e.currentTarget.value = "";
      }
    },
    remove(index) {
      dispatch({
        type: "todolist/REMOVE",
        payload: index ? index : null
      });
    }
  };
};

Todo.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
