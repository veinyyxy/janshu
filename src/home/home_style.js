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

const TopicWrapper = styled.div`
    padding: 20px;
    overflow: hidden;
    border-radius: 4px;
    border-bottom: 1px solid #dcdcdc;
`;

const TopicItem = styled.div`
    background: #f7f7f7;
    margin-right: 15px;
    padding-right: 15px;
    line-height: 32px;
    height: 32px;
    color:rgb(20, 19, 19);
    float: left;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .item-img {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

const ListWrapper = styled.div`
    
`;

const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .item-img {
        display: block;
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`; 
const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        font-size: 13px;
        color: #999;
        margin-top: 10px;
    }
`;

const RecommendWrapper = styled.div`
    width: 280px;
    float: right;
    padding: 0px 0 20px;
`;

const RecommendItem = styled.div`
    margin-bottom: 15px;
    img {
        width: 100%;
        border-radius: 4px;
    }
`;

export { HomeWrapper, HomeLeft, HomeRight, BackTop, TopicWrapper, TopicItem, ListWrapper, ListItem, ListInfo, RecommendWrapper, RecommendItem };