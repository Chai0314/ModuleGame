import { isMove } from './rule.js'
import { boxMove } from './box.js'
export const driveBox = () => { }
export const move = (keyCode) => {
    const dom = document.querySelector('.item.player')
    const boxDom = [...document.querySelectorAll('.item.box,.item.over_box')]
    let domLeft = dom.offsetLeft
    let domTop = dom.offsetTop
    let result
    switch (keyCode) {
        case 37:
            domLeft = domLeft - 45
            result = isMove(domLeft, domTop)
            if (!result || (boxDom.includes(result) && !isMove(domLeft - 45, domTop))) {
                dom.style.left = domLeft + 'px'
                if (boxDom.includes(result)) boxMove(result, domLeft - 45, domTop)
            }
            break
        case 38:
            domTop = domTop - 45
            result = isMove(domLeft, domTop)
            if (!result || (boxDom.includes(result) && !isMove(domLeft, domTop - 45))) {
                dom.style.top = domTop + 'px'
                if (boxDom.includes(result)) boxMove(result, domLeft, domTop - 45)
            }
            break
        case 39:
            domLeft = domLeft + 45
            result = isMove(domLeft, domTop)
            if (!result || (boxDom.includes(result) && !isMove(domLeft + 45, domTop))) {
                dom.style.left = domLeft + 'px'
                if (boxDom.includes(result)) boxMove(result, domLeft + 45, domTop)
            }
            break
        case 40:
            domTop = domTop + 45
            result = isMove(domLeft, domTop)
            if (!result || (boxDom.includes(result) && !isMove(domLeft, domTop + 45))) {
                dom.style.top = domTop + 'px'
                if (boxDom.includes(result)) boxMove(result, domLeft, domTop + 45)
            }
            break
    }
}