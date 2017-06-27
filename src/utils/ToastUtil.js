/**
 * Created by kevin on 6/27/17.
 */
import{Alert, ToastAndroid, Platform} from 'react-native';

const showShortToast = (content, isAlter) => {
  if (!isAlter) {
    return
  }
  if (isAlter || Platform.OS === 'ios') {
    Alert.alert("oops", content.toString());
  } else {
    ToastAndroid.show(content.toString(), ToastAndroid.SHORT);
  }
};

const showLongToast = (content, isAlter) => {
  if (isAlter || Platform.OS === 'ios') {
    Alert.alert("oops", content.toString());
  } else {
    ToastAndroid.show(content.toString(), ToastAndroid.LONG);
  }
};

export default {
  showShortToast,
  showLongToast
};