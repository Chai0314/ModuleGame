import * as MAP from "./map.js"
import { boxJudge } from './rule.js'
/* 
0.空白
1.玩家
2.墙
3.箱子
*/
export const rendceStyle = (className, dom) => {
    dom.className = className
}
const initELement = (data, row, col) => {
    let className = ''
    const div = document.createElement('div');
    div.style.width = MAP.ELEMENT_WIDTH + 'px'
    div.style.height = MAP.ELEMENT_HEIGHT + 'px'
    div.style.left = col * MAP.ELEMENT_WIDTH + 'px';
    div.style.top = row * MAP.ELEMENT_HEIGHT + 'px';
    if (data === 1) {
        className = 'item player'
    }
    else if (data === 2) {
        className = 'item wall'
    }
    else if (data === 3) {
        className = boxJudge(row, col) ? 'item over_box' : 'item box'
    } else {
        className = 'item target_box'
    }
    rendceStyle(className, div)
    return div
}
const initMap = () => {
    const oGame = document.getElementById('game')
    oGame.style.width = MAP.ELEMENT_WIDTH * MAP.MAP_COL + 'px' //根据地图元素初始化界面的宽度
    oGame.style.height = MAP.ELEMENT_HEIGHT * MAP.MAP_ROW + 'px' //根据地图元素初始化界面的高度
    // 初始化界面元素
    for (const { row, col } of MAP.correct) {
        oGame.appendChild(initELement(null, row, col))
    }
    MAP.map.forEach((row, i) => {
        row.forEach((data, j) => {
            if (data !== 0) oGame.appendChild(initELement(data, i, j));
        })
    })
}

initMap()