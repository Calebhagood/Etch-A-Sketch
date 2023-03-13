let color = "black";


function makeGrid(size){
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div')
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns =  `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i=0; i<amount; i++){
        let square = document.createElement('div');
        square.addEventListener("mouseover", colorSquare)
        square.style.backgroundColor = "white";
        grid.insertAdjacentElement('beforeend', square);
    }
}

makeGrid(16);

function changeSize(size){
    if(size >= 2 && size <= 100){
        makeGrid(size);
    }
    else {
        console.log("Grid too large or too small");
    }
}

function colorSquare(){
    if(color == 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else{
        this.style.backgroundColor = color;
    }
}

function changeColor(colorChoice){
    color = colorChoice;
}

function resetGrid(){
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div')
    squares.forEach((div) => div.style.backgroundColor = 'white');
}