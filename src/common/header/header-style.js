import styled from "styled-components";
import logoPic from "../../statics/logo1.png";

const HeaderWrapper = styled.div`
    background:rgb(255, 255, 255);
    height: 60px;
    color: rgb(3, 3, 3);
    border-bottom: 1px solid #ccc;
    position: relative;
`;

const SearchWrapper = styled.div`
    float: left;
    background: #eee;
`;

const Logo = styled.a`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100px;
    height: 60px;
    background: url(${logoPic});
    background-size: contain;
`;

const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    pedding-right: 70px;
    box-sizing: border-box;
`;

const NavItem = styled.div`
    line-height: 60px;
    padding: 0 15px;
    font-size: 17px;
    clor: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

const NavSearch = styled.input.attrs({
    placeholder: 'Search'
})`
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    margin-top: 9px;
    pedding: 0 20px;
    box-sizing: border-box;
    margin-left: 20px;
    &::placeholder {
        color: #999;
    }
`;

const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 60px;
`;

const Button = styled.div`
    float: left;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 15px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`;

export { HeaderWrapper, SearchWrapper,Logo, Nav, NavItem, NavSearch, Addition, Button };
