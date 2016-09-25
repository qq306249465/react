require('normalize.css/normalize.css');
require('../styles/App.scss');

import React from 'react';

var imageDatas = require('../data/imageDatas.json')

function getImageUrl(imageArr){
  for (var i = 0,j = imageArr.length;i <j; i++) {
  var singleImage = imageArr[i];
    singleImage.imageUrl = require("../images/" + singleImage.fileName);
    imageArr[i] = singleImage;
  }
  return imageArr;
}

imageDatas = getImageUrl(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	<section className="img-sec">

      	</section>
      	<nav className="controller-nav">
      	
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
