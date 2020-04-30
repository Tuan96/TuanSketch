let grid = document.getElementById('grid');
let container = document.getElementById('container');

let customize = document.querySelector('#customize');
customize.addEventListener('click', function() {
    customGrid();
});

let clear = document.querySelector('#clear');
clear.addEventListener('click', function() {
    clearGrid();
});

let random = document.querySelector('#random');
random.addEventListener('click', function() {
    randomColor();
});

let light = document.querySelector('#light');
light.addEventListener('click', function() {
    lightMode(); 
});

// let clickdraw = document.querySelector('#clickdraw');
// clickdraw.addEventListener('click', function() {
//     clickAndDraw(); 
// });

// Create a default grid
function defaultGrid(size) {
     for (let i = 0; i < size ** 2; i++) {
         let newDiv = document.createElement('div');
         newDiv.classList.add('divCreated');
         container.appendChild(newDiv);
     }
     // Updading its value to that of the 'size' variable from the root element
     document.documentElement.style.setProperty('--size', size);
}
defaultGrid(36);

// Default color
function defaultColor() {
    let divColor = document.querySelectorAll('.divCreated');
    divColor.forEach(divCreated => {
        divCreated.addEventListener('mouseover', function() {
            divCreated.style.backgroundColor = 'white';
        });
    });
};
defaultColor()

// Create a custom grid
function customGrid() {
    let size = prompt('Please enter a number from 2 to 100.');
    if (isNaN(size) || size < 2 || size > 100) {
        alert('Please try again')
    } else {
        let customDiv = document.querySelectorAll('.divCreated');
            customDiv.forEach(divCreated => {
                container.removeChild(divCreated);
            });
        defaultGrid(size);
        if (document.body.style.backgroundColor == 'white') {
            lightMode();
        } else {
            defaultColor();
        }
    }
}

// Clear grid
function clearGrid() {
    let text = document.getElementById('text');
    text.style.color = 'white';
    document.body.style.background = '#2f3437';
    let removeDiv = document.querySelectorAll('.divCreated');
    removeDiv.forEach(divCreated => {
            divCreated.style.backgroundColor = '#2f3437';
            divCreated.addEventListener('mouseover', function() {
                divCreated.style.backgroundColor = 'white';
            });
    });
}

// Random color
function randomColor() {
    let randomColor = document.querySelectorAll('.divCreated');
    randomColor.forEach(divCreated => {
        divCreated.addEventListener('mouseover', function() {
            let randomRGB = Math.floor(Math.random()*16777215).toString(16);
            divCreated.style.backgroundColor = '#' + randomRGB;
        });
    });
}

// Light mode
function lightMode() {
    let divColor = document.querySelectorAll('.divCreated');
    let text = document.getElementById('text');
    text.style.color = 'black';
    document.body.style.background = 'white';
    divColor.forEach(divCreated => {
        divCreated.style.backgroundColor = 'white';
        divCreated.addEventListener('mouseover', function() {
            divCreated.style.backgroundColor = 'black';
        });
    });
}

// Click and Draw: hold click to draw
// function clickAndDraw() {}
