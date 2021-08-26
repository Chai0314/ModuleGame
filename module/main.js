import './ui.js'
import * as Player from './player.js'


window.onkeydown = function(e){
    Player.move(e.keyCode)
}