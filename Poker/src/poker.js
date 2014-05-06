/*
  Greetings, algorithmics!

  Your task for today is to classify poker hands!  You have two functions to complete:

    - labelHand, which gives the name of a single hand.
    - findWinner, which determines which of several hands is best.

  Hands are 14-character strings that look like "8H TC KS 2C AD", where
    - there are exactly five cards
    - each card is separated by a space
    - each card is represented by a value followed by a suit
    - ace is "A" (remember, aces can be either low or high!)
    - king is "K"
    - queen is "Q"
    - jack is "J"
    - ten is "T"
    - all other cards are represented by their number.
    - the four suits are represented by "H", "C", "S", and "D"

  Hands will be legal, with no duplicate cards.

  Remember, the order of hands, from highest to lowest is
    - Royal flush:      like a straight flush from Ten to Ace
    - Straight flush:   5 cards in a row of the same suit
    - Four of a kind:   4 cards of the same value
    - Full house:       3 cards of the same value and one pair.
    - Flush:            5 cards of the same suit
    - Straight:         5 cards in a row
    - Three of a kind:  3 cards of the same value
    - Two pair:         you got this one.
    - Pair:             this one too.
    - High card:        basically, no hand.

  There are no helper functions provided this time.
  You're on your own, but feel free to write whatever helpers you need!
*/
  var compareCards = function(card1, card2) {                          //compare card numbers and return boolean
    var array = ['1','2','3','4','5','6','7','8','9','T','J','Q','K','A'];
    return array.indexOf(card1.number) > array.indexOf(card2.number);
  }

var poker = {

  // Returns the name of the input hand.
  // See the specs for the required formats.
  labelHand: function(hand) {
    var cards = hand.split(' ');
    console.log(cards);
    var result = {number: 2, suit: 'C'};                    //lowest card pair
    var hand = [];
    cards.forEach(function(card, index, cards) {            //create array of objects
      hand.push({number: card[0], suit: card[1] });         //each object has a number and suit property
    });

    hand.forEach(function(hand, index, hands) {             //compare all cards in a hand
      if  (compareCards(hand, result)) {
        result = hand;  
      }
    });

    var numbers = {};
    hand.forEach(function(hand, index, hands) {
      
      if ( !numbers[hand.number] ) {
        numbers[hand.number] = 1;
      } else {
        numbers[hand.number] ++;
      }

    });
    
    for (var key of numbers ) {

    }


    















    return result.number + " High";

  },

  // Takes an array of hands and returns the index of the winning hand.
  // If two or more hands tie for the win, instead return an array of the winning hands.
  findWinner: function(hands) {

  }
};