const container = document.querySelectorAll(".items");
let firstClick = "X";

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
      } else {
        game_winner.innerHTML = `Game winner is    ${savedPlayerTwo}  `;
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
