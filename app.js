document.addEventListener("DOMContentLoaded", () => {
  const gridDisplay = document.querySelector(".grid");
  const scoreDisplay = document.getElementById("score");
  const resultDisplay = document.getElementById("result");

  const width = 4;
  let squares = [];

  //Playing Board
  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      square = document.createElement("div");
      square.innerHTML = 0;
      gridDisplay.appendChild(square);
      squares.push(square);
    }
    generate();
    generate();
  }

  createBoard();

  //Randomly generated numbers
  function generate() {
    let randomNumber = Math.floor(Math.random() * squares.length);
    if (squares[randomNumber].innerHTML == 0) {
      squares[randomNumber].innerHTML = 2;
    } else generate();
  }

  //Swipe Right
  function moveRight() {
    for (let i = 0; i < 16; i++) {
      if (i % 4 == 0) {
          let totalOne = squares[i].innerHTML
          let totalTwo = squares[i+1].innerHTML
          let totalThree = squares[i+2].innerHTML
          let totalFour = squares[i+3].innerHTML

          let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

          console.log(row)

          //Filter 2
          let filteredRow = row.filter(num => num)
          console.log(filteredRow)

          //Filter 0
          let missing = 4 - filteredRow.length
          let zeros = Array(missing).fill(0)
          console.log(zeros)

          //Move To Right
          let newRow = zeros.concat(filteredRow) 
          console.log(newRow)

          squares[i].innerHTML = newRow[0]
          squares[i+1].innerHTML = newRow[1]
          squares[i+2].innerHTML = newRow[2]
          squares[i+3].innerHTML = newRow[3]
      }
    }
  }

  moveRight()


});
