/**
 * Created by kevin on 6/27/17.
 */
import{
  StyleSheet
}from 'react-native';

export let tabBarStyle = StyleSheet.create({
  container: {
    flexDirection: 'column', height: 50,
  },

  tabs: {
    flexDirection: 'row',
  },

  tab: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },

  item: {
    flexDirection: 'column', alignItems: 'center',
  }

});