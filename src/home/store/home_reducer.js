import { fromJS } from "immutable";

const initialState = fromJS({
  topiclist: [{
    id: 1,
    title: "社会热点",
    imgUrl: "/TopicItem1.jpg"
  }, {
    id: 2,
    title: "科技前沿",
    imgUrl: "/TopicItem2.jpg"
  }, {
    id: 3,
    title: "健康生活",
    imgUrl: "/TopicItem3.jpg"
  }],
  articleList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl: "/TopicItem1.jpg",
      discription: "已有1500多年历史的龙门石窟，是我国四大石窟之一，也是国务院公布的第一批国家重点文物保护单位。2000年11月，联合国教科文组织将龙门石窟列入《世界文化遗产名录》。"
    },
    {
      id: 2,
      title: "科技前沿",
      imgUrl: "/TopicItem2.jpg",
      discription: "随着科技的不断进步，人工智能、区块链等新兴技术正在改变我们的生活方式和工作模式。"
    },
    {
      id: 3,
      title: "健康生活",
      imgUrl: "/TopicItem3.jpg",
      discription: "健康生活方式包括均衡饮食、适量运动和良好的心理状态，这些都是保持身体健康的关键。"
    }
  ],
    recommendList: [
        {
        id: 1,
        imgUrl: "/recommendImage1.svg"
        },
        {
        id: 2,
        imgUrl: "/recommendImage2.svg"
        },
        {
        id: 3,
        imgUrl: "/recommendImage3.svg"
        },
        {
        id: 4,
        imgUrl: "/recommendImage4.svg"
        }
    ]
});

const home_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TOPIC_LIST":
      return state.set('topiclist', fromJS(action.payload));
    default:
      return state;
  }
};

export default home_reducer;