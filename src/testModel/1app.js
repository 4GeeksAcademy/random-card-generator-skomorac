document.addEventListener("DOMContentLoaded", function() {
    // Array of possible card values
    var cardValues = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "King",
      "Queen",
      "Jack",
      "Ace"
    ];
    // Array of possible card suits
    var cardSuits = ["&hearts;", "&diams;", "&spades;", "&clubs;"];
  
    // Function to generate a random card
    function generateRandomCard() {
      var randomValueIndex = Math.floor(Math.random() * cardValues.length);
      var randomSuitIndex = Math.floor(Math.random() * cardSuits.length);
      var randomValue = cardValues[randomValueIndex];
      var randomSuit = cardSuits[randomSuitIndex];
      var card = {
        value: randomValue,
        suit: randomSuit
      };
      return card;
    }
  
    // Function to update the card content on the page
    function updateCard() {
      var cardDiv = document.getElementById("card");
      var topLeftIcon = document.getElementById("top-left-icon");
      var cardValueDiv = document.getElementById("card-value");
      var bottomRightIcon = document.getElementById("bottom-right-icon");
  
      var card = generateRandomCard();
  
      topLeftIcon.innerHTML = card.suit;
      cardValueDiv.innerHTML = card.value;
      bottomRightIcon.innerHTML = card.suit;
    }
  
    // Call updateCard() when the page loads
    updateCard();
  });
  