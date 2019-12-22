let dimension = prompt('Masukkan ukuran grid(ex .16) :', 16);

/* NOTE creating grid element */
let grid_container = document.querySelector('.grid-container');

let gridHeight = 502/dimension;
grid_container.setAttribute('style', `display: grid;grid-template-columns: repeat(${dimension}, 1fr);grid-template-rows: repeat(${dimension}, 1fr);border: #2196F3 solid 5px;`)

/* NOTE Creating canvas with dimention */
for (let i = 0; i < Math.pow(dimension, 2); i++) {
   let grid = document.createElement('div');
   grid.setAttribute('style', `display: block; height: ${gridHeight}px; opacity: 0;`)
   grid_container.appendChild(grid);
}

let color = '#000000';
let type = 'single';

document.querySelector('#black').addEventListener('click', (e) => {
   type = 'single';
   color = 'black';
})

document.querySelector('#rainbow').addEventListener('click', (e) => {
   type = 'rainbow';
})

/* NOTE Create canvas */
document.querySelector('#canvasSize').setAttribute('style', 'width: 512px; height: 512px;')

/* NOTE Function reset */
document.querySelector('#reset').addEventListener('click', function(e){
   return confirm('Sure reset?') ? location.reload() : '';
})

/* NOTE get all grids in html */
let grids = document.querySelectorAll('.grid-container > div');

/* NOTE adding event to all selected */
grids.forEach(function(grid) {         

   // let color = getRandomColor();
   
   /* NOTE Event when mouse click */
   grid.addEventListener('click', function (e) {
      paintGrid(grid, color, type);
   });

   /* NOTE Event mouseover like hover */
   grid.addEventListener('mouseover', function(e) {
      /* NOTE if button using left click */
      if (e.buttons === 1) {
         paintGrid(grid, color, type);
      }
   });
})

/* NOTE Create function for change grid color */
function changeGrid(grid, color = '#000000'){
   let style = getComputedStyle(grid);
   let opacity = parseFloat(style.opacity);
   // let display = style.
   opacity += parseFloat(0.1);
   grid.setAttribute('style', `background-color: ${color}; opacity: ` + opacity);
   // element.style.cssText = "background-color: black";
}

function getRandomColor(){
   let latters = '0123456789ABCDEF';
   let color = '#';
   for (let i = 0; i < 6; i++){
      color += latters[Math.floor(Math.random() * 16)]
   }
   return color;
}

function paintGrid(grid, color, type){

   if (type == 'rainbow') {
      let warna = getRandomColor();
      changeGrid(grid, warna);
   } else {
      changeGrid(grid, color);
   }

}