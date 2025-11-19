// Fungsi carian majalah/buku
const searchInput = document.getElementById('searchInput');
const magazineContainer = document.getElementById('magazineContainer');
const cards = magazineContainer.getElementsByClassName('card');

searchInput.addEventListener('keyup', function() {
  const filter = searchInput.value.toLowerCase();
  for (let i = 0; i < cards.length; i++) {
    const title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
    if (title.indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
});
