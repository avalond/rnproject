/**
 * Created by kevin on 6/27/17.
 */
import  React, {Component}from 'react';
import {View, Text, TouchableOpacity} from  'react-native';

import Icon from  'react-native-vector-icons/Ionicons';
import {tabBarStyle} from './../style/tabBarStyle';
import {commonStyle} from  './../style/commonStyle';

export default class TabBar extends Component {
  //1.声明需要的属性
  static propTypes = {
    /**
     * 框架内帮我们回调
     */
    tabs: React.PropTypes.array,// 所有Tab的集合
    activityTab: React.PropTypes.number,  // 当前被选中的Tab下标
    goToPage: React.PropTypes.func, // 跳转到对应tab

    /**
     * 自己调用
     */
    tabName: React.PropTypes.array,// 所有Tab的名称
    tabIcons: React.PropTypes.array// 所有Tab的图标
  };

  /**
   * tab切换的时候有动画效果
   */
  setAnimationValue({value}) {

  }

  componentDidMount() {
    // Animated.Value监听范围 [0, tab数量-1]
    this.props.scrollValue.addListener(this.setAnimationValue);
  }

  /**
   * 生成tab, i 表示哪个tab
   */
  renderTab(tab, i) {
    let color = this.props.activityTab === i ? "#FE2D4A" : "#8E8E8E";
    return (
        <TouchableOpacity key={i} activeOpacity={0.6} onPress={() => this.props.goToPage(i)}
                          style={tabBarStyle.tab}>
          <View style={tabBarStyle.item}>
            <Icon name={this.props.tabIcons[i]}
                  size={27}
                  color={color}
            />
            <Text style={{color: color, fontScale: 12}}>
              {this.props.tabName[i]}
            </Text>
          </View>
        </TouchableOpacity>
    );
  }

  render() {
    return (
        <View style={tabBarStyle.container}>
          <View style={commonStyle.underLine}/>
          <View style={tabBarStyle.tabs}>
            {this.props.tabs.map((tab, i) => this.renderTab(tab, i))}
          </View>
        </View>
    );
  }
}
