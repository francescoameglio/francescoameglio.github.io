(function() {
  var sentences = [
    "this is crazy",
    "welcome to my website",
    "hello there!",
    "thanks for visiting",
    "have a great day"
  ];

  function setRandomSentence() {
    var randomIndex = Math.floor(Math.random() * sentences.length);
    var element = document.getElementById("random-sentence");
    if (element) {
      element.textContent = sentences[randomIndex];
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setRandomSentence);
  } else {
    setRandomSentence();
  }
})();
