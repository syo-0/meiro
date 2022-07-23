function control(e) {
    let key = e.key;
    let cnt = 0;
    let dx = 0;
    let dy = 0;
    let flag = false;

    //移動
    if (goalFlag === 0) {
        if (key === 'w') {dy = -1;} {
            if (key === 'a') {dx = -1;}
            if (key === 's') {dy = 1;}
            if (key === 'd') {dx = 1;}
            if (key === 'q') {scrollA((ox - 3) * 30, (oy - 3) * 30);}
            if (key === 'e') {scrollA((ex - 3) * 30, (ey - 3) * 30);}
            
            if ((grid[(ox + dx - 1) * size + (oy + dy - 1)] === 0)) {
                flag = true;
                
                ox += dx;
                oy += dy;
                
                grid[(ox - 1) * size + (oy - 1)] = 1;
                
                //現在地描画
                pointDisplay(ox, oy, dx, dy);
                
                //スクロール
                if ((dx !== 0) || (dy !== 0)) {
                    scrollR(dx * 30, dy * 30);
                }
                
                //ゴール
                if ((ox === ex) && (oy === ey) && (goalFlag === 0)) {
                    goalFlag = 1;
                    goal(ox, oy);
                }
                
                //ゲームオーバー
                if ((grid[(ox - 1) * size + (oy - 2)] === 1) && (grid[(ox - 2) * size + (oy - 1)] === 1) && (grid[(ox - 1) * size + oy] === 1) && (grid[ox * size + (oy - 1)] === 1) && (goalFlag === 0)) {
                    goalFlag = -1;
                    gameover(ox, oy);
                }
            }
        }
    }
}