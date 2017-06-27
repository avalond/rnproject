/**
 * Created by kevin on 6/27/17.
 * splash
 */

import React, {Component}  from 'react';
import {
  View,
  Image,
  Dimensions,
  StatusBar
} from  'react-native';

import NumberUtils from './../../utils/NumberUtil';
import lokobeeTab from  '../mainTab/lokobeeTab';

let splashImgs = [
    require('./../../images/ic_splash_1.jpg'),
    require('./../../images/ic_splash_1.jpg'),
    require('./../../images/ic_splash_1.jpg'),
    require('./../../images/ic_splash_1.jpg')
];


export  default class  Splash extends Component{

  //倒计时2秒进入界面
  componentDidMount() {
    setTimeout(() => {
      this.props.navigator.replace({
        name: "lokobeeTab",
        component: lokobeeTab
      });
    }, 2000);
  }

  render(){
    let {width, height} = Dimensions.get("window");
    let randomNum = NumberUtils.getRandom(0, splashImgs.length - 1);
    return (
        <View style={{ flex: 1 }}>
          <StatusBar hidden={true} />
          <Image source={splashImgs[randomNum]} resizeMode={'cover'} style={{ width: width, height: height }} />
        </View>
    )
  }
}


