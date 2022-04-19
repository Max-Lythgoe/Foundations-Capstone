const playlistContainer = document.querySelector('#playlistContainer')
const baseURL = 'http://localhost:5500/api/playlist'


const getAllPlaylist = event => axios.get(`${baseURL}/${event.target.id}`).then(res => res.data.forEach(song => createPlaylistCard(song)))

// Scroll to top button ======================================================================
mybutton = document.getElementById("topButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

// =========================================================================================

function createPlaylistCard(playlistSong) {
    const songCard = document.createElement('div')
    songCard.classList.add('card')

    songCard.style.width = `13rem`  

    songCard.innerHTML = `
    <img alt='album art image' src=${playlistSong.imageURL} class="card-img-top" />
    <div class="card-body bg-dark">
    <p class="card-title" ><strong>${playlistSong.title}</strong></p>
    <hr>
    <p class="card-title"><i>${playlistSong.album}</i></p>
    <br>
    <p class="card-subtitle" ><strong>${playlistSong.artist}</strong></p>
    `

    playlistContainer.appendChild(songCard)
}

(playlistContainer.innerHTML = '')

document.getElementById('pop').addEventListener('click', getAllPlaylist)
document.getElementById('rock').addEventListener('click', getAllPlaylist)
document.getElementById('alt').addEventListener('click', getAllPlaylist)
document.getElementById('rap').addEventListener('click', getAllPlaylist)
document.getElementById('hip-hop').addEventListener('click', getAllPlaylist)
document.getElementById('country').addEventListener('click', getAllPlaylist)
document.getElementById('classical').addEventListener('click', getAllPlaylist)
document.getElementById('edm').addEventListener('click', getAllPlaylist)
document.getElementById('jazz').addEventListener('click', getAllPlaylist)
document.getElementById('ambient').addEventListener('click', getAllPlaylist)
document.getElementById('dubstep').addEventListener('click', getAllPlaylist)
document.getElementById('chill').addEventListener('click', getAllPlaylist)