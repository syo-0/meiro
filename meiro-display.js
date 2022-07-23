//四角形表示
function square(x1, y1, w, h, r, g, b, a) {
    context.fillStyle = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
    context.fillRect(x1, y1, w, h);
}

function char(char, x1, y1, charSize, strokeSize, r1, g1, b1, a1, r2, g2, b2, a2) {
    context.fillStyle = 'rgba(' + r1 + ', ' + g1 + ', ' + b1 + ', ' + a1 + ')';
    context.font = `${charSize}` + "px 'ＭＳ ゴシック'";

    //位置微調整
    x1 -= char.length * charSize / 2;
    y1 += charSize / 2;
    if (x1 - strokeSize < 0) {
        x1 = strokeSize;
    }
    if (x1 + char.length * charSize + strokeSize > map.width) {
        x1 = map.width - char.length * charSize - strokeSize;
    }
    if (y1 - strokeSize < 0) {
        y1 = strokeSize;
    }
    if (y1 + charSize / 2 + strokeSize> map.height) {
        y1 = map.height - charSize / 2 - strokeSize;
    }

    //外側
    for (let i = -strokeSize; i <= strokeSize; i++) {
        for (let j = -strokeSize; j <= strokeSize; j++) {
            context.fillStyle = 'rgba(' + r2 + ', ' + g2 + ', ' + b2 + ', ' + a2 + ')';
            context.fillText(char, x1 + i, y1 + j);
        }
    }

    //内側
    context.fillStyle = 'rgba(' + r1 + ', ' + g1 + ', ' + b1 + ', ' + a1 + ')';
    context.fillText(char, x1, y1);
}

//迷路表示
function display() {
    let cnt = 0;

    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            //壁設置
            if (grid[cnt] === 1) {
                square(i * 30, j * 30, 30, 30, 0, 0, 0, 255);
            }
            //スタート設置
            if ((i === sx) && (j === sy)) {
                square(i * 30 + 5, j * 30 + 5, 20, 20, 255, 0, 0, 255);
            }
            //ゴール設置
            if ((i === ex) && (j === ey)) {
                square(i * 30 + 5, j * 30 + 5, 20, 20, 0, 0, 255, 255);
            }

            cnt += 1;
        }
    }
}

//スクロール
function scrollA(px, py) {
    scrollTo(px, py);
}
function scrollR(px, py) {
    scrollBy(px, py);
}

//歩く
function pointDisplay(ox, oy, dx, dy) {
    let cnt = 0;

    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            if ((i === ox) && (j === oy)) {
                if ((dx > 0) || (dy > 0)) {
                    square((ox - dx) * 30 + 5, (oy - dy) * 30 + 5, 20 + 30 * dx, 20 + 30 * dy, 255, 0, 0, 255);
                }
                if ((dx < 0) || (dy < 0)) {
                    square(ox * 30 + 5, oy * 30 + 5, 20 + 30 * -dx, 20 + 30 * -dy, 255, 0, 0, 255);
                }
            }
        }
    } 
}

//ゴール
function goal(ox, oy) {
    char('ゴール', ox * 30 + 15, oy * 30 + 15, 100, 10, 255, 255, 255, 255, 0, 0, 0, 255);
}

//ゲームオーバー
function gameover(ox, oy) {
    char('お前は詰み', ox * 30 + 15, oy * 30 + 15, 100, 10, 255, 255, 255, 255, 0, 0, 0, 255);
}