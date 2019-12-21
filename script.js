let dimension = prompt('masukkan angka : ');

/* NOTE creating grid element */
let grid_container = document.querySelector('.grid-container');

let gridHeight = 502/dimension;
grid_container.setAttribute('style', `display: grid;grid-template-columns: repeat(${dimension}, 1fr);grid-template-rows: repeat(${dimension}, 1fr);`)

for (let index = 0; index < Math.pow(dimension, 2); index++) {
   let grid = document.createElement('div');
   grid.setAttribute('style', `display: block; height: ${gridHeight}px; opacity: 0;`)
   grid_container.appendChild(grid);
}

/* NOTE get all grids in html */
let grids = document.querySelectorAll('.grid-container > div');

/* NOTE adding event to all selected */
grids.forEach(function(grid) {         
   /* NOTE Event mouseover like hover */
   grid.addEventListener('mouseover', function(e) {
      /* NOTE if button using left click */
      if (e.buttons === 1) {
         let style = getComputedStyle(grid);
         let opacity = parseFloat(style.opacity);
         // let display = style.
         opacity += parseFloat(0.1);
         grid.setAttribute('style', 'background-color: black; opacity: ' + opacity);
         // element.style.cssText = "background-color: black";
      }
   });
})

