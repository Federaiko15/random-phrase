let frasi = [];

async function caricaFrasi() {
  try {
    const response = await fetch('frasi.txt');
    const text = await response.text();
    frasi = text.split('\n').filter(linea => linea.trim() !== '');
  } catch (err) {
    document.getElementById('quote').textContent = "Errore nel caricamento delle frasi 😅";
  }
}

function mostraFrase() {
  if (frasi.length === 0) return;
  const fraseCasuale = frasi[Math.floor(Math.random() * frasi.length)];
  const quoteEl = document.getElementById('quote');
  quoteEl.style.opacity = 0;
  setTimeout(() => {
    quoteEl.textContent = fraseCasuale;
    quoteEl.style.opacity = 1;
  }, 200);
}

document.getElementById('new-quote').addEventListener('click', mostraFrase);

// Carica le frasi all’avvio
caricaFrasi();

