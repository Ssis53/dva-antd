import React from 'react';
import style from './Navbar.css';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

const Menulist = props => {
    return(
        <List className={style.myList} style={{width: '265px'}}>
           <Item arrow="horizontal" multipleLine onClick={() => {}}>
               <a href="#">首页</a>
           </Item>
           <Item arrow="horizontal" multipleLine onClick={() => {}}>
               <a href="#">影片</a>
           </Item>
           <Item arrow="horizontal" multipleLine onClick={() => {}}>
               <a href="#">影院</a>
           </Item>
           <Item arrow="horizontal" multipleLine onClick={() => {}}>
               <a href="#">商城</a>
           </Item>
           <Item arrow="horizontal" multipleLine onClick={() => {}}>
               <a href="#">我的</a>
           </Item>
           <Item arrow="horizontal" multipleLine onClick={() => {}}>
               <a href="#">卖座卡</a>
           </Item>
        </List>
    )
}

class Navbar extends React.Component {
    state = {
        open: false
    }
    onOpenChange() {
        this.setState({ open: !this.state.open });
    }
    render() {
        return (
          <div className={style.navBar}>
              <NavBar
                  style={{ height: '50px', lineHeight: '50px', background: '#282828', color: '#999', fontSize: '14px' }}
                  mode="light"
                  leftContent={[
                      <div className={style.menu} onClick={() => {this.onOpenChange()}}>
                          <Icon size="xxs" className={style.menuIcon} key="0" type="ellipsis" />
                      </div>,
                      <div className={style.title}>
                          卖座电影
                      </div>
                  ]}
                  rightContent={[
                      <div className={style.position}>
                          <span>杭州</span>
                          <Icon size="xxs" className={style.menuIcon} key="1" type="down" />
                      </div>,
                      <Icon size="xxs" className={style.menuIcon} key="2" type="loading" />,
                  ]}
              ></NavBar>
              <Drawer
              style={{ minHeight: document.documentElement.clientHeight, top: '50px'}}
              enableDragHandle
              contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
              sidebar={Menulist()}
              open={this.state.open}
              touch={false}
              position="left"
            >
                {''}
            </Drawer>
          </div>
        );
    }
};


Navbar.propTypes = {
};

export default Navbar;
