import styled from "styled-components";

const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;
const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    .banner-image {
        width: 625px;
        height: 270px;
    }
`;
const HomeRight = styled.div`
    float: right;
    width: 280px;
    padding-top: 30px;
`;
const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
`;
export { HomeWrapper, HomeLeft, HomeRight, BackTop };