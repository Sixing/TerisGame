/**
 * 该类中提供一系列的函数，根基游戏规则判断各种情况
 */

import {Shape, Point, MoveDirection }from './Types'
import {SquareGroup} from './SquareGroup'
import GameConfig from './GameConfig'


function isPoint(obj: any): obj is Point{
  if(typeof obj.x === 'undefined') {
    return false
  }
  return true
}

export class TerisRule {
  /**
   * 判断某个形状的方块，是否能够移动到目标位置
   */
  static canIMove(shape: Shape, targetPoint: Point): boolean{
    //假设，中心店已经移动到了目标位置，算出每个小方块的坐标

      const targetSquarePoints: Point[] = shape.map(item => {
        return {
          x: item.x + targetPoint.x,
          y: item.y + targetPoint.y
        }
      })

    //边界判断

    const result = targetSquarePoints.some(p => {
      //是否超出边界
      if( p.x < 0 || p.x > GameConfig.panelSize.width -1 ||
          p.y < 0 || p.y > GameConfig.panelSize.height - 1
        ){
          return true
        }
        return false
    })

    if(result){
      return false
    }
    return true
  }

  static move(teris: SquareGroup, targetPoint:Point):boolean;
  static move(teris: SquareGroup, direction:MoveDirection):boolean;
  static move(teris: SquareGroup, targetPointOrDirection: Point| MoveDirection): boolean {
    if(isPoint(targetPointOrDirection)) {
      if(this.canIMove(teris.shape, targetPointOrDirection)) {
        teris.centerPoint = targetPointOrDirection;
        return true
      }
      return false
    }else {
      const direction = targetPointOrDirection;
      let targetPoint;
      if(direction === MoveDirection.down) {
        targetPoint = {
          x: teris.centerPoint.x,
          y: teris.centerPoint.y + 1
        }
      }else if(direction === MoveDirection.left) {
        targetPoint = {
          x: teris.centerPoint.x - 1,
          y: teris.centerPoint.y 
        }
      }else if(direction === MoveDirection.right) {
        targetPoint = {
          x: teris.centerPoint.x + 1,
          y: teris.centerPoint.y 
        }
      }else {
        targetPoint = {
          x: teris.centerPoint.x ,
          y: teris.centerPoint.y - 1
        }
      }
      return this.move(teris, targetPoint)
    }
  }

    /**
     * 将当前的方块，移动到目标方向的重点
     * @param teris 
     * @param direction 
     */
  static moveDirectly(teris: SquareGroup, direction:MoveDirection) {
    while(true) {
      if(!this.move(teris, direction)) {
        break
      }
    }
  }

  static rotate(teris: SquareGroup):boolean {
    const newShape = teris.afterRotateShape();
    if(this.canIMove(newShape, teris.centerPoint)) {
      teris.rotate()
      return true
    }else {
      return false
    }
  }
}