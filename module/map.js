// 地图上面的元素：箱子，人，墙，空白
/* 
0.空白
1.玩家
2.墙
3.箱子
*/
const SPACE = 0
const PLAYER = 1
const WALL = 2
const BOX = 3
export { SPACE, PLAYER, WALL, BOX } //导出地图元素信息
export const ELEMENT_WIDTH = 45 //元素的宽度
export const ELEMENT_HEIGHT = 45 //元素的高度
/** 
 * 初始化位置 
 */ 
export const map = [
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 0, 1, 0, 2, 0, 0],
    [0, 0, 2, 0, 3, 0, 2, 0, 0],
    [2, 2, 2, 0, 0, 0, 2, 2, 2],
    [2, 0, 0, 0, 3, 0, 0, 0, 2],
    [2, 0, 3, 3, 3, 3, 3, 0, 2],
    [2, 0, 0, 0, 3, 0, 0, 0, 2],
    [2, 2, 2, 3, 3, 3, 2, 2, 2],
    [0, 2, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 0, 0, 3, 0, 0, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0]
];
/**
 * 箱子正确位置
 */
export const correct = [
    { row: 3, col: 4 },
    { row: 4, col: 4 },
    { row: 5, col: 2 },
    { row: 5, col: 3 },
    { row: 5, col: 4 },
    { row: 5, col: 5 },
    { row: 5, col: 6 },
    { row: 6, col: 4 },
    { row: 7, col: 4 },
    { row: 8, col: 4 },
    { row: 9, col: 4 },
    { row: 10, col: 4 }
];

export const MAP_ROW = 12 //地图分为12行
export const MAP_COL = 9  //地图分为9列