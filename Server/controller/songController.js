const res = require('express/lib/response')
const songs = require('../songs-db-max.json')
let globalSongID = 0

module.exports = {

    getSongs: (req, res) => {
        res.status(200).send(songs)
    },

    addSongToList: (req, res) => {
        let { title, artist, album, imageURL, rating} = req.body
        
        let newSong = {
            id: globalSongID,
            title, 
            artist, 
            album,
            imageURL,
            rating,
        }

        songs.push(newSong)
        res.status(200).send(songs)
        globalSongID ++
        
    },

    deleteSongFromList: (req, res) => {
        let index = songs.findIndex(song => song.id === +req.params.id)
        songs.splice(index, 1)
        res.status(200).send(songs)
    },

}

