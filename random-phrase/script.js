async function mostraFrase() {
  try {
    const response = await fetch('frasi.txt');
    const text = await response.text();
    const frasi = text.split('\n').filter(linea => linea.trim() !== '');
    const fraseCasuale = frasi[Math.floor(Math.random() * frasi.length)];
    document.getElementById('quote').textContent = fraseCasuale;
  } catch (err) {
    document.getElementById('quote').textContent = "Errore nel caricamento delle frasi 😅";
  }
}

mostraFrase();
