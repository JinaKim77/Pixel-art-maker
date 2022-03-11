function makeGrid(event) {
    // To prevent the page from redirecting which is default behaviour of
    // submit button inside the form element.
    event.preventDefault();
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    var new_canvas = document.getElementById('pixelCanvas');
    var tableBody = document.createElement("tbody");
    var new_color = document.getElementById('colorPicker');
    new_color.addEventListener('input', ()=>{
        var color = new_color.value;
        console.log("The color you picked : "+color);
    });

    // The user can reset the grid to a blank state.
    let element = document.getElementById('pixelCanvas');
    // To remove all children from an element
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }

    for(var row = 0; row < width; row++){
        var draw_row = document.createElement('tr');

        for(var col = 0; col < height; col++){
            var draw_col = document.createElement('td');
            draw_row.appendChild(draw_col);
        }// inner for loop

        // add the row to the end of the table body
        tableBody.appendChild(draw_row);
    }// outer for loop

    // Each cell should have have an event listener
    // that sets the background color of the cell to the selected color.
    new_canvas.addEventListener('click', function(event) {
        // Check if the clicked element is a cell (TD).
        // This way you just assign it once, since the table is not removed from DOM:
        if(event.target.nodeName === 'TD'){
            event.target.style.backgroundColor = new_color.value;
        }
    })

    // add the table body in the table
    new_canvas.appendChild(tableBody);
}

// When size is submitted by the user, call makeGrid()
var new_size = document.getElementById('sizePicker');
new_size.addEventListener('submit', makeGrid);
