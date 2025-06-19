import { fromJS } from "immutable";

const initialState = fromJS({
  title: '让童心在水墨丹青中绽放',
  headimage:'/WriterImage1.jpg',
  articleInfo: {
    writer:'天下第一等',
    position: '加拿大',
    time:'2025.06.11 01:38:34',
    wordnumber:486,
    readnumber:35
  },
  content: '<img src="\\articleimage1.png" alt="缩略图" onClick={this.showImage} />' +
          '<div id="modal" onClick={this.hideImage}><img src="\\articleimage1.png" alt="原图" /></div>'+
          '<p>清晨的画室里，墨香与晨光交织。她经过多年的实践教学并研究开发的“五感教学法”，即施燕的“五感教学”主要包括以下五个方面：视觉、听觉、嗅觉、味觉、触觉，五感教学的核心思想是通过全方位的感官体验来丰富和深化学生对世界的认知。这种方法不仅帮助学生拓宽写作素材，增强语言表现力，还引导他们在日常生活中养成细心观察、深入思考的习惯，培养创新思维能力和人文素养。</p>'+
          '<p>这种教学方法让传统艺术教学焕发新生，例如触觉启蒙：通过触摸奇石、枯荷等实物理解笔墨质感；视觉游戏：用AR技术将学生画作投射成动态水墨动画；味觉联想：品尝清茶时体会“墨分五色”的层次变化，其学生们经常参与全国青少年书画赛事并获得各类奖项，更有学生通过绘画、书法找到表达窗口，不在沉迷于电子游戏。</p>'+
          '<p>2024年施燕在她的工作室启动建立“流动艺术馆”，常年举办公益展览，累计授课超600课时，并与特殊教育学校合作开发艺术疗愈课程。</p>'+
          '<p>“艺术教育不是培养画家，而是培育懂得美的心灵”，施燕用这句话诠释着她双轨并行的艺术人生。</p>'+
          '<p>（文/林语）</p>'
});

const detail_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_ARTICLE":
      return state.merge({
        title: fromJS(action.payload.title),
        headimage: fromJS(action.payload.headimage),
        articleInfo: fromJS(action.payload.articleInfo),
        content: fromJS(action.payload.content)
      });
    default:
      return state;
  }
};

export default detail_reducer;