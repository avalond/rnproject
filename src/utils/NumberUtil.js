/**
 * Created by kevin on 6/27/17.
 * 数值工具类
 */
let NumberUtils = {
  genRandom: (minNum, maxNum) => {
    let range = maxNum - minNum;
    let rand = Math.random();
    let result = minNum + Math.random(range * rand);
    return result;
  }

};
export default NumberUtils;
