import getDistance from './utils/getDistance'
import debounce from './utils/debounce'
import loadJS from './utils/loadJS'

window.touchParams = {
    touchPoints: 1,
    startDistance: 0,
    endDistance: 0
};

document.addEventListener('touchstart', handleTouchStart.bind(this));

document.addEventListener('touchmove', debounce(handleTouchMove.bind(this), 100));

document.addEventListener('touchend', debounce(handleTouchEnd.bind(this), 100));

function handleTouchStart (e) {
    window.touchParams.touchPoints = e.touches.length;
    if(e.touches.length == 2){
        let point1 = e.touches[0];
        let point2 = e.touches[1];
        window.touchParams.startDistance = getDistance(point1, point2)
    }
}

function handleTouchMove(e) {
    window.touchParams.touchPoints = e.touches.length;
    if(e.touches.length == 2){
        let point1 = e.touches[0];
        let point2 = e.touches[1];
        window.touchParams.endDistance = getDistance(point1, point2);
    }
}

function handleTouchEnd() {
    if(window.touchParams.touchPoints == 2 && window.touchParams.startDistance - window.touchParams.endDistance > 0){

        if(window.VConsole){
            if(window.vConsole){
                window.vConsole.destroy();
                window.vConsole = null
            }  else {
                window.vConsole = new VConsole();
                window.vConsole.show();
            }
        }else {
            loadJS({
                url: 'https://j1.58cdn.com.cn/frs/libs/vConsole/vconsole.min.3.3.2.js',
                async: true,
                defer: true,
                callback: function () {
                    window.vConsole = new VConsole();
                    window.vConsole.show();
                }
            })
        }
    }
}