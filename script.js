const keys = Array.from(document.querySelectorAll(".key"));

document.addEventListener("keypress", function (e) {
  //get the letter that was pressed
  const letter = e.key.toUpperCase();

  //iterate through array of keys and find the element with the same text value as letter
  const [element] = keys.filter((el) => el.children[0].innerHTML === letter);
  //extract from the element its dataset, key
  const dataKey = element.dataset.key;

  //filter from array of audio elements the one whose dataset matches dataKey
  const [audio] = Array.from(document.getElementsByTagName("audio")).filter(
    (audio) => audio.dataset.key === dataKey
  );

  //create audio by extracting audio's src (.wav)
  const play = new Audio(audio.getAttribute("src"));

  //play sound
  play.play();
});
