import { boxJudge,isGameOver } from './rule.js'
import { ELEMENT_WIDTH as boxWidth, ELEMENT_HEIGHT as boxHeight } from './map.js'
import { rendceStyle } from './ui.js'
export const changeBox = (box, left, top) => {
    const col = left / boxWidth;
    const row = top / boxHeight;
    if (boxJudge(row, col)) {
        rendceStyle('item over_box', box)
    }else{
        rendceStyle('item box', box)
    }
}

export const boxMove = (box, left, top) => {
    box.style.left = left + 'px'
    box.style.top = top + 'px'
    changeBox(box, left, top)
    isGameOver()
}