//グリッド準備
function generate() {
    let cnt = 0;

    //生成１: グリッド作成
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            grid.push(0);
        }
    }

    //生成２: 迷路の基礎生成
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            let block = 0;

            if ((i === 1) || (i === size)) {
                block = 1;
            }
            if ((j === 1) || (j === size)) {
                block = 1;
            }
            if ((i > 2) && (j > 2) && (i < size - 1) && (j < size - 1)) {
                if (((i % 2) !== 0) && ((j % 2) !== 0)) {
                    block = 1
                }
            }

            grid[cnt] = block;

            cnt += 1;
        }
    }
    cnt = 0;

    //生成３: 迷路の生成
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            if ((i > 2) && (j > 2) && (i < size - 1) && (j < size - 1)) {
                if (((i % 2) !== 0) && ((j % 2) !== 0)) {
                    let dir = 0;
                    if (j === 1) {
                        dir = Math.round(Math.random() * 3);;
                    } else {
                        dir = 1 + Math.round(Math.random() * 2);
                    }

                    if ((dir === 0) && (grid[cnt - 1] === 0)) {
                        grid[cnt - 1] = 1;
                    }
                    if ((dir === 1) && (grid[cnt - size] === 0)) {
                        grid[cnt - size] = 1;
                    }
                    if ((dir === 2) && (grid[cnt + 1] === 0)) {
                        grid[cnt + 1] = 1;
                    }
                    if ((dir === 3) && (grid[cnt + size] === 0)) {
                        grid[cnt + size] = 1;
                    }
                }
            }

            cnt += 1;
        }
    }
    cnt = 0;

    //生成4: スタート＆ゴールの生成
    let px = 2;
    let py = 2;
    let startRange = Math.round(Math.random() * 3);
    let endRange = 0;
    while (true) {
        endRange = Math.round(Math.random() * 3);
        if (startRange !== endRange) {
            break;
        }
    }
    /*
    [0][1]
    [2][3]
    */
   let sdx = 0;
   let sdy = 0;
   if (startRange === 0) {
       sdx = 0;
       sdy = 0;
    } if (startRange === 1) {
        sdx = Math.floor(size / 2);
        sdy = 0;
    } if (startRange === 2) {
        sdx = 0;
        sdy = Math.floor(size / 2);
    } if (startRange === 3) {
        sdx = Math.floor(size / 2);
        sdy = Math.floor(size / 2);
    }
    let edx = 0;
    let edy = 0;
    if (endRange === 0) {
        edx = 0;
        edy = 0;
    } if (endRange === 1) {
        edx = Math.floor(size / 2);
        edy = 0;
    } if (endRange === 2) {
        edx = 0;
        edy = Math.floor(size / 2);
    } if (endRange === 3) {
        edx = Math.floor(size / 2);
        edy = Math.floor(size / 2);
    }
    
    while (true) {
        px = 2 + sdx + Math.round(Math.random() * (Math.floor(size / 2))); 
        py = 2 + sdy + Math.round(Math.random() * (Math.floor(size / 2))); 
        if (grid[(px - 1) * size + (py - 1)] === 0) {
            sx = px;
            sy = py;
            ox = px;
            oy = py;
            break;
        }
    }
    while (true) {
        px = 2 + edx + Math.round(Math.random() * (Math.floor(size / 2)));
        py = 2 + edy + Math.round(Math.random() * (Math.floor(size / 2)));
        if (grid[(px - 1) * size + (py - 1)] === 0) {
            ex = px;
            ey = py;
            break;
        }
    }
}