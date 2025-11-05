// Carica le frasi dal file di testo e le mostra casualmente
async function loadPhrases() {
  const response = await fetch('phrases.txt');
  const text = await response.text();
  return text.split('\n').filter(line => line.trim() !== '');
}

async function main() {
  const phrases = await loadPhrases();
  const phraseElement = document.getElementById('quote');
  const newQuoteButton = document.getElementById('new-quote');
  const screenshotButton = document.getElementById('screenshot');

  function showRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    phraseElement.textContent = phrases[randomIndex];
  }

  // Mostra una frase iniziale
  showRandomPhrase();

  // Quando premi il bottone, cambia frase
  newQuoteButton.addEventListener('click', showRandomPhrase);

  // Quando premi "screenshot", salva la pagina come immagine
  screenshotButton.addEventListener('click', () => {
    html2canvas(document.body).then(canvas => {
      const link = document.createElement('a');
      link.download = 'screenshot.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  });
}

main();


