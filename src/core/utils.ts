
/**
 * 根据最小值和最大值得到该方位内的随机数(无法渠道最大值)
 * @param min 
 * @param max 
 */

export function getRandom(min:number, max:number) {
  const dec = max - min
  return Math.floor(Math.random() * dec + min);
}