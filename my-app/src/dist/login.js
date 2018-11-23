import React, { Component } from 'react';
// import logo from './logo.svg';/
import { Button, InputItem, List, WhiteSpace, WingBlank } from 'antd-mobile';

import '../App.css';
// 通过自定义 moneyKeyboardWrapProps 修复虚拟键盘滚动穿透问题
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}
class Login extends Component {
  jumpPage(){
    this.props.history.push("dist/index");
  }
  render() {
    return (
      <div className="App">
        <div style={{ marginTop: "10em" }}></div>
        <List>
          <WingBlank>
            <InputItem
              type="phone"
              defaultValue={100}
              placeholder="start from left"
              clear
              moneyKeyboardAlign="left"
              moneyKeyboardWrapProps={moneyKeyboardWrapProps}
            >用户名:</InputItem>
          </WingBlank>
          <WhiteSpace />
          <WingBlank>
            <InputItem
              type="phone"
              defaultValue={100}
              placeholder="start from left"
              clear
              moneyKeyboardAlign="left"
              moneyKeyboardWrapProps={moneyKeyboardWrapProps}
            >密码:</InputItem>
          </WingBlank>
        </List>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <Button  onClick={ this.jumpPage.bind(this)} type="primary"> 登陆</Button>
        <WhiteSpace />
        <WhiteSpace />
        <Button type="primary"> 注销</Button>
      </div>
    );
  }
}

export default Login;
