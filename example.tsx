import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, NavLink, Route} from 'react-router-dom';
import ButtonExample from './lib/button.example';
import {Aside, Content, Footer, Header, Layout} from './lib/layout/layout';
import './example.scss';
import IconDemo from './lib/icon/icon.demo';
import LayoutDemo from './lib/layout/layout.demo';
import DialogDemo from './lib/dialog/dialog.demo';


const logo = require('./logo2.png');

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src={logo} width="164" alt=""/>
          {/*<span> FUI </span>*/}
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2><strong>组件</strong></h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">对话框</NavLink>
            </li>
            <li>
              <NavLink to="/layout">布局</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogDemo}/>
          <Route path="/layout" component={LayoutDemo}/>
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy; 商伟
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));