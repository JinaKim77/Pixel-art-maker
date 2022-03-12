// global variables for accessing DOM elements.
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');
const colorPicker = document.getElementById('colorPicker');
// When size is submitted by the user, call makeGrid()
const sizePicker = document.getElementById('sizePicker');
sizePicker.addEventListener('submit', makeGrid);

/**
* @description Create a grid of squares
* @param (event) - An object containing information about the action that just happened.
*/
function makeGrid(event) {
    // To prevent the page from redirecting which is default behaviour of
    // submit button inside the form element.
    event.preventDefault();

    const tableBody = document.createElement('tbody');
    let height = inputHeight.value;
    let width = inputWidth.value;

    colorPicker.addEventListener('input', () => {
        let color = colorPicker.value;
        console.log("The color you picked : " + color);
    });

    // The user can reset the grid to a blank state.
    let element = document.getElementById('pixelCanvas');
    // To remove all children from an element
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }

    // Create a grid of squares
    for(let row = 0; row < height; row++) {
        let draw_row = document.createElement('tr');

        for(let col = 0; col < width; col++) {
            let draw_col = document.createElement('td');
            draw_row.appendChild(draw_col);
        }// inner for loop

        // add the row to the end of the table body
        tableBody.appendChild(draw_row);
    }// outer for loop

    // Each cell should have have an event listener
    // that sets the background color of the cell to the selected color.
    pixelCanvas.addEventListener('click', function(event) {
        // Check if the clicked element is a cell (TD).
        // This way you just assign it once, since the table is not removed from DOM:
        if(event.target.nodeName === 'TD') {
            let color = colorPicker.value;
            event.target.style.backgroundColor = color;
        }
    })

    // add the table body in the table
    pixelCanvas.appendChild(tableBody);
}
