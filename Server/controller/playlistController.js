const res = require('express/lib/response')
const playlistSongs = require('../songs-db.json')

module.exports = {

    filterSongs: (req, res) => {
        let {genre} = req.params
        let filteredPlaylist = playlistSongs.filter(item => item.tags.includes(`${genre}`))
        res.status(200).send(filteredPlaylist)
    } 
}
