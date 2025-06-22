import React, {Component} from "react";
import { Navigate } from "react-router";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, InputBox, ButtonBox } from "./login_style"
import { LoginCreactors } from "./store";
class Login extends Component {
  render() {
    if(this.props.isLogin)
    {
        return (<Navigate to='/'></Navigate>);
    }
    return (
        <LoginWrapper>
            <LoginBox>
                <InputBox placeholder='账号' ref={(input) => {this.account = input;}}></InputBox>
                <InputBox placeholder='密码' type = 'password' ref={(input) => {this.passowrd = input;}}></InputBox>
                <ButtonBox onClick={() => this.props.doLogin(this.account, this.passowrd)}>登录</ButtonBox>
            </LoginBox>
        </LoginWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.getIn(["login", "isLogin"])
  }
}

const mapDispatchToProps = (dispatch) => ({
  doLogin(account, password){
    dispatch(LoginCreactors.doLogin(account.value, password.value));
  } 
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

