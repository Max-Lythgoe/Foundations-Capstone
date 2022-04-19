const express = require("express");
const cors = require("cors");

const { getSongs, addSongToList, deleteSongFromList } = require('./controller/songController')
const {filterSongs} = require('./controller/playlistController')

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/songs', getSongs)
app.post('/api/songs', addSongToList)
app.delete('/api/songs/:id', deleteSongFromList)

app.get('/api/playlist/:genre', filterSongs)



app.listen(5500, () => console.log("Server running on 5500"));