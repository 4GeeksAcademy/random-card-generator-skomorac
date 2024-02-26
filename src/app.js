/* eslint-disable */
import "bootstrap";
import "./style.css";

document.addEventListener("DOMContentLoaded", function() {
  const signs = ["♥", "♦", "♣", "♠"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const card = document.querySelector(".card");
  const topLeft = document.querySelector(".top-left");
  const bottomRight = document.querySelector(".bottom-right");
  const cardValue = document.querySelector(".card-value");
  const buttons = document.querySelectorAll(".btn");
  const inputs = document.querySelectorAll("input");
  const newCardButton = document.getElementById("newCardBtn");
  const autoGenerateButton = document.getElementById("autoGenerateBtn");

  // Event listeners
  newCardButton.addEventListener("click", assignRandomCard);

  autoGenerateButton.addEventListener("click", function() {
    if (autoGenerateInterval) {
      stopAutoGenerate();
      autoGenerateButton.textContent = "Auto Generate Card Every 1 Second";
    } else {
      startAutoGenerate();
      autoGenerateButton.textContent = "Stop Auto Generation";
    }
  });

  // event listener for input fields
  inputs.forEach(input => {
    input.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        updateDimensions();
      }
    });
  });

  // Functions
  ////////////////////////////////////////////////////////////////////////////////

  // Function to get a random item from an array
  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // Function to assign a random sign and update colors
  function assignRandomCard() {
    // Get random sign
    const randomSign = getRandomItem(signs);

    // Set sign
    topLeft.textContent = randomSign;
    bottomRight.textContent = randomSign;

    // Set color for sign
    if (randomSign === "♥" || randomSign === "♦") {
      // Red color for heart and diamond
      topLeft.style.color = "red";
      bottomRight.style.color = "red";
    } else {
      // Black color for club and spade
      topLeft.style.color = "black";
      bottomRight.style.color = "black";
    }

    // Get random value
    const randomValue = getRandomItem(values);

    // Set color for value
    cardValue.textContent = randomValue;
    cardValue.style.color =
      randomSign === "♥" || randomSign === "♦" ? "red" : "black";
  }

  // Call the function on page load
  assignRandomCard();

  // Function to auto-generate a random card every 1 second
  function autoGenerateCard() {
    // Call the assignRandomCard function to generate a new card
    assignRandomCard();
  }

  // Set up a variable to store the interval ID
  let autoGenerateInterval;

  // Function to start auto-generating cards
  function startAutoGenerate() {
    autoGenerateCard();

    // Set up an interval to call autoGenerateCard every 1 second
    autoGenerateInterval = setInterval(autoGenerateCard, 1000);
  }

  // Function to stop auto-generating cards
  function stopAutoGenerate() {
    // Clear the interval to stop auto-generating cards
    clearInterval(autoGenerateInterval);
    // Reset the interval variable to null
    autoGenerateInterval = null;
  }

  // Function to update dimensions
  function updateDimensions() {
    const cardHeight = document.getElementById("cardHeightInput").value + "px";
    const cardWidth = document.getElementById("cardWidthInput").value + "px";

    // Update card dimensions
    card.style.height = cardHeight;
    card.style.width = cardWidth;

    // Update button dimensions
    buttons.forEach(button => {
      button.style.width = cardWidth;
    });

    // Update input dimensions
    inputs.forEach(input => {
      input.style.width = cardWidth;
    });
  }
});
