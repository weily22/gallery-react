require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let imageDatas = require('../data/imageDatas.json');

// 利用自执行函数，将图片名信息转换成图片url路劲信息
imageDatas = (function getImgUrl(imgDataArr) {
  for (var i = 0, j = imgDataArr.length; i < j; i++) {
    var imgItem = imgDataArr[i];
    imgItem.imageUrl = require('../images/' + imgItem.filename);
    imgDataArr[i] = imgItem;
  }
  return imgDataArr;
})(imageDatas)

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
          内容
        </section>
        <nav className="con-nav">
          导航
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
