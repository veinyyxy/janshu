import styled from "styled-components";

const LoginWrapper = styled.div`
    z-index: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    top 200px;
    background: #eee;
    width:100%;
    height: 100%;
`;

const LoginBox = styled.div`
    width: 400px;
    height: 200px;
    padding-top: 20px;
    margin: 150px auto;
    background: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
`;

const InputBox = styled.input`
    display:block;
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    margin: 10px auto;
    color: #777;
`;

const ButtonBox = styled.div`
    width: 220px;
    height: 30px;
    line-height:30px;
    color:#fff;
    background: #3194d0;
    border-radius: 15px;
    margin: 10px auto;
    text-align: center;
`
export { LoginWrapper, LoginBox, InputBox, ButtonBox };