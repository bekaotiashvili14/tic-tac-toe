const container = document.querySelectorAll(".items");
let firstClick = "X";
let player1Winner = 0;
let player2Winner = 0;

container.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.textContent === "") {
      element.textContent = firstClick;
      firstClick = firstClick === "X" ? "O" : "X";

      if (checkForWin()) {
        resetBoard();
      }
    }
  });
});
const savedPlayerOne = sessionStorage.getItem("name1");
const savedPlayerTwo = sessionStorage.getItem("name2");
playerPoint1.innerHTML = `${savedPlayerOne}  point 0`;
playerPoint2.innerHTML = `${savedPlayerTwo}  point 0`;
function checkForWin() {
  const items = [
    document.getElementById("items1").textContent,
    document.getElementById("items2").textContent,
    document.getElementById("items3").textContent,
    document.getElementById("items4").textContent,
    document.getElementById("items5").textContent,
    document.getElementById("items6").textContent,
    document.getElementById("items7").textContent,
    document.getElementById("items8").textContent,
    document.getElementById("items9").textContent,
  ];
  const game_winner = document.getElementById("game_winner");
  const savedPlayerOne = sessionStorage.getItem("name1");
  const savedPlayerTwo = sessionStorage.getItem("name2");
  let playerPoint1 = document.getElementById("playerPoint1");
  let playerPoint2 = document.getElementById("playerPoint2");

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (items[a] && items[a] === items[b] && items[a] === items[c]) {
      if (items[a] === "X") {
        game_winner.innerHTML = `Game winner is ${savedPlayerOne} `;
        playerPoint1.innerHTML = `${savedPlayerOne} point  ${(player1Winner += 1)} `;
        resetBoard();
      } else {
        game_winner.innerHTML = `Game winner is   ${savedPlayerTwo}  `;
        playerPoint2.innerHTML = `${savedPlayerTwo} point  ${(player2Winner += 1)} `;
        resetBoard();
      }
      return true;
    }
  }

  if (items.every((item) => item)) {
    game_winner.innerHTML = `its a tie  `;
    resetBoard();
    return false;
  }

  return false;
}

function resetBoard() {
  document.querySelectorAll(".items").forEach((item) => {
    item.textContent = "";
  });
  firstClick = "X";
}
