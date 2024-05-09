function handleSubmit() {
  console.log("Submit button clicked");
  const playerOne = document.getElementById("name1").value;
  const playerTwo = document.getElementById("name2").value;
  sessionStorage.setItem("name1", playerOne);
  sessionStorage.setItem("name2", playerTwo);
  window.location.href = "tictactoe.html";
}
