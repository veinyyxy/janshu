import React, {Component} from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, InputBox, ButtonBox } from "./login_style"

class Login extends Component {
  render() {
    return (
        <LoginWrapper>
            <LoginBox>
                <InputBox placeholder='账号'></InputBox>
                <InputBox placeholder='密码'></InputBox>
                <ButtonBox>登录</ButtonBox>
            </LoginBox>
        </LoginWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

