import { Navigate, useParams } from "react-router";
import { LoginCreactors } from "./store";
import { connect } from "react-redux";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Logout = (props) => {
  const dispatch = useDispatch();
  const { account } = useParams();
  //props.doLogout(account);
  useEffect(() => {
    dispatch(LoginCreactors.doLogout(account));
    // 这里可以做跳转等
  }, [dispatch, account]);
  return (<Navigate to='/'></Navigate>);
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.getIn(["login", "isLogin"])
  }
}

const mapDispatchToProps = (dispatch) => ({
  doLogout(account){
    dispatch(LoginCreactors.doLogout(account));
  } 
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
