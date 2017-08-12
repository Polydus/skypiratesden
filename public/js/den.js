
var _ = undefined;

var denElements = [];

function buildDenElement(element, width, height, x, y, trophyIndex, frames, moveToTop){
    if(element === _ || element === null){
        return;
    }
    var result = {};
    result.element = element;
    result.width = width;
    result.height = height;
    result.frames = frames;
    result.x = x;
    result.y = y;

    if(moveToTop !== _){
        element.style.zIndex = moveToTop;
    }

    if(frames !== _){
        element.style.background = 'url(' + '/img/sprites/trophy' + trophyIndex + '.png' + ') left center';

        if(frames > 1){
            element.addEventListener('mouseover', function(){
                this.style.animationPlayState = 'running';
            });

            element.addEventListener('mouseleave', function(){
                this.style.animationPlayState = 'paused';
            });

            element.style.animation = 'anim-' + frames + 'frame ' + (0.8) + 's steps(' + frames + ') infinite';
            //element.style.animation = 'anim-frame 0.33s steps(3) infinite';
            element.style.animationPlayState = 'paused';
        }
    }

    result.resize = function(scale){
        this.element.style.width = (this.width * scale) + 'px';
        this.element.style.height = (this.height * scale) + 'px';
        if(this.frames !== _){
            this.element.style.backgroundSize = 
                ((this.width * this.frames) * scale) + 'px ' + 
                (this.height * scale) + 'px';
        }
        if(this.x !== _){
            this.element.style.marginLeft = (this.x * scale) + 'px';
        }
        if(this.y !== _){
            this.element.style.marginTop = (-(1016 - this.y) * scale) + 'px';
        }
    }

    denElements.push(result);

    return result;
}

var scale = 1;

window.addEventListener('resize', function(){
    onResize();
});

function onResize(){
    scale = container.getBoundingClientRect().width / 2020;

    for(var i = 0; i < denElements.length; i++){
        denElements[i].resize(scale);
    }
}

var container = document.getElementById('den-container');

var bg = buildDenElement(
    document.getElementById('den-bg'), 
    2020, 1016);

if(bg === _){
var bg = buildDenElement(
    document.getElementById('den-bg-strahl'), 
    2020, 1016);
}

//all this manually bc of different sizes/pos etc

buildDenElement(
    document.getElementById('sprite-trophy1'), 
    132, 240, 820, 580, 1, 3, '5');

buildDenElement(
    document.getElementById('sprite-trophy2'), 
    192, 296, 1250, 600, 2, 3, '3');

buildDenElement(
    document.getElementById('sprite-trophy3'), 
    96, 256, 960, 50, 3, 1);

buildDenElement(
    document.getElementById('sprite-trophy4'), 
    104, 241, 980, 210, 4, 3);

buildDenElement(
    document.getElementById('sprite-trophy5'), 
    189.33, 264, 1500, 240, 5, 3, '4');

buildDenElement(
    document.getElementById('sprite-trophy6'), 
    194.66, 224, 1500, 50, 6, 3);

buildDenElement(
    document.getElementById('sprite-trophy7'), 
    180, 204, 1070, 60, 7, 3);

buildDenElement(
    document.getElementById('sprite-trophy8'), 
    136, 180, 1100, 220, 8, 3);

buildDenElement(
    document.getElementById('sprite-trophy9'), 
    220, 156, 450, 180, 9, 4);

buildDenElement(
    document.getElementById('sprite-trophy10'), 
    160, 284, 1300, 50, 10, 3);

buildDenElement(
    document.getElementById('sprite-trophy11'), 
    284, 240, 1350, 470, 11, 3);

buildDenElement(
    document.getElementById('sprite-trophy12'), 
    144, 212, 700, 300, 12, 3);

buildDenElement(
    document.getElementById('sprite-trophy13'), 
    144, 256, 530, 250, 13, 3);

buildDenElement(
    document.getElementById('sprite-trophy14'), 
    308, 301, 1600, 530, 14, 3, '5');

buildDenElement(
    document.getElementById('sprite-trophy15'), 
    132, 135, 70, 500, 15, 3);

buildDenElement(
    document.getElementById('sprite-trophy16'), 
    184, 276, 1230, 250, 16, 4, '6');

buildDenElement(
    document.getElementById('sprite-trophy17'), 
    208, 148, 870, 400, 17, 5);

buildDenElement(
    document.getElementById('sprite-trophy18'), 
    274, 240, 1550, 380, 18, 3, '4');

buildDenElement(
    document.getElementById('sprite-trophy19'), 
    172, 148, 1080, 410, 19, 1);

buildDenElement(
    document.getElementById('sprite-trophy20'), 
    408, 316, 950, 530, 20, 1);

buildDenElement(
    document.getElementById('sprite-trophy21'), 
    384, 320, 38, 600, 21, 3);

buildDenElement(
    document.getElementById('sprite-trophy22'), 
    192, 224, 1320, 230, 22, 3, '5');

buildDenElement(
    document.getElementById('sprite-trophy23'), 
    420, 352, 1380, 640, 23, 4, '5');

buildDenElement(
    document.getElementById('sprite-trophy24'), 
    340, 448, 1650, 100, 24, 3, '3');

buildDenElement(
    document.getElementById('sprite-trophy25'), 
    180, 180, 260, 330, 25, 3, '3');

buildDenElement(
    document.getElementById('sprite-trophy26'), 
    230, 220, 260, 90, 26, 3, '3');

buildDenElement(
    document.getElementById('sprite-trophy27'), 
    288, 256, 32, 100, 27, 3, '3');

buildDenElement(
    document.getElementById('sprite-trophy28'), 
    236, 256, 350, 680, 28, 3, '5');

buildDenElement(
    document.getElementById('sprite-trophy29'), 
    296, 296, 450, 500, 29, 3, '4');

buildDenElement(
    document.getElementById('sprite-trophy30'), 
    440, 312, 450, 400, 30, 3, '3');















































onResize();

