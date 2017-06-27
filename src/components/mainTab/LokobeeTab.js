/**
 * Created by kevin on 6/27/17.
 */
import  React, {Component}from 'react';
import {
  Text, View
}from 'react-native';

import {mainStyle} from '../../style/MainStyle';
import  ScrollableTabView from  'react-native-scrollable-tab-view';
import TabBar from './../../widget/TabBar';

import MainPage from  '../Restaurant/RestaurantPage';
import MyOrderPage from './../../components/order/MyOrder';
import MePage from  './../../components/me/Me';

let tabIcons = ["", "", ""];
let tabNames = ["Restaurant", "my Order", "Me"];

export default class lokobeeTab extends Component {
  render() {
    return (
        <View style={mainStyle.container}>
          <ScrollableTabView
              locked={true}
              scrollWithoutAnimation={true}
              tabBarPosition="bottom"
              renderTabBar={() => <TabBar tabIcons={tabIcons} tabNames={tabNames}/>}>
              <MainPage tabLabel="Restaurant" navigator={this.props.navigator}/>
              <MyOrderPage tabLabel='myOrder' navigator={this.props.navigator}/>
              <MePage tabLabel='Me' navigator={this.props.navigator}/>

          </ScrollableTabView>

        </View>

    )
  }
}
