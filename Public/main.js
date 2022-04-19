const playlistContainer = document.querySelector('#playlist-container')
const songForm = document.querySelector('#song-form')
const playlistSelector = document.getElementById("select-playlist")
const baseURL = 'http://localhost:5500/api/songs'

const songsCallback = ({data: songs}) => displaySongs(songs)
const errCallback = err => console.log(err)

const getAllSongs = () => axios.get(baseURL).then(songsCallback).catch(errCallback)
const addSong = body => axios.post(baseURL, body).then(songsCallback).catch(errCallback)
const deleteSong = id => axios.delete(`${baseURL}/${id}`).then(songsCallback).catch(errCallback)

// scroll button ======================================
mybutton = document.getElementById("topButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
//======================================================

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

function submitHandler(e) {
    e.preventDefault()

    let songTitle = document.querySelector('#songTitle')
    let artist = document.querySelector('#artistTitle')
    let albumTitle = document.querySelector('#albumTitle')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: songTitle.value,
        artist: artist.value,
        album: albumTitle.value,
        imageURL: imageURL.value
    }

    addSong(bodyObj)

    songTitle.value = ''
    artist.value = ''
    albumTitle.value = ''
    imageURL.value = ''
}

function createSongCard(song) {
    const songCard = document.createElement('div')
    songCard.classList.add('card')

    songCard.style.width = `13rem`  

    songCard.innerHTML = `
    <img alt='album art image' src=${song.imageURL} class="card-img-top" />
    <div class="card-body bg-dark">
    <p class="card-title" ><strong>${song.title}</strong></p>
    <hr>
    <p class="card-title"><i>${song.album}</i></p>
    <br>
    <p class="card-subtitle" ><strong>${song.artist}</strong></p>
    <br>
    <button class="btn btn-danger" id="delete-song" onclick="deleteSong(${song.id})">REMOVE</button>
    `

    songsContainer.appendChild(songCard)
}

function displaySongs(arr) {
    songsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createSongCard(arr[i])
    }
}
//=================================================================================


songForm.addEventListener('submit', submitHandler)
window.addEventListener('DOMContentLoaded', getAllSongs)
