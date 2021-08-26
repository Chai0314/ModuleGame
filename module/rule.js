import { correct } from './map.js'

// 判断是否能移动
export const isMove = (left, top) => {
    const eleArr = document.querySelectorAll('.item.wall,.item.box,.item.over_box')
    for (const ele of eleArr) {
        if (ele.offsetLeft === left && ele.offsetTop === top) {
            return ele
        }
    }
}
// 判断箱子是否在正确位置上
export const boxJudge = (row, col) => {
    for (const { row: r, col: c } of correct) {
        if (r === row && c === col) {
            return true
        }
    }
}

// 判断游戏是否结束
export const isGameOver = () => {
    if (document.querySelectorAll('.item.box').length === 0) {
        setTimeout(function () {
            window.alert('Game Over')
            location.reload()
        }, 0)
    }
}