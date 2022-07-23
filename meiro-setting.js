const map = document.getElementById('map');
const context = map.getContext('2d');
let grid = [];
let size = 333 //+ Math.round(Math.random() * 10) * 2;
let ox = 2;
let oy = 2;
let sx = 2;
let sy = 2;
let ex = size - 1;
let ey = size - 1;
let goalFlag = 0;

map.width = (size + 2) * 30;
map.height = (size + 2) * 30;

/*メモ
(px - 1) * size + (py - 1)
*/