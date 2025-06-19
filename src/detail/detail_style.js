import styled from "styled-components";

const DetialWrapper = styled.div`
    overflow: hidden;
    width: 620px;
    margin: 0 auto;
    padding-bottom: 100;
    .article-style{
        font-weight: 400;
        line-height: 1.8;
        margin-bottom: 20px;
        word-break: break-word;
        position: relative;
        .thumbnail {
            width: 500px;
            cursor: zoom-in;
            transition: 0.3s;
        }

        .modal {
            display: none;
            position: fixed;
            z-index: 999;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.8);
            justify-content: center;
            align-items: center;
            cursor: zoom-out;
        }

        .modal img {
            max-width: 90%;
            max-height: 90%;
        }

        .modal.show {
            display: flex;
        }

    }
`;

const Header = styled.h1`
    margin: 50px 0 20px 0;
    line-height: 44px;
    font-size:34px;
    color: #333;
    font-weight: bold;
`;

const ArticleInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    font-size: 15px;
    .head-image{
        position: relative;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #eee;

    }
    .info{
        display:block;
        padding-left: 15px;
        
        .button-style{
            color: #ec7259;
            background-color: #fff;
            margin-left: 10px;
            margin-right: 10px;
            width: 50px;
            border-radius:20px;
            font-size: 13px;
            border: 1px solid #ec7259;
        }
        .position-style{
            font-size: 13px;
            color: #969696;
        }
    }
    .info2{
        font-size: 13px;
        padding-left: 15px;
        color: #969696;
    }
`;

const Content = styled.div`
    color: #2f2f2f;
`;
export {DetialWrapper, Header, Content, ArticleInfo};