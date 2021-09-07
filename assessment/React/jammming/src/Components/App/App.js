import { useState } from 'react'
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify'

function App() {
  const [ searchResults, setSearchResults ] = useState([])
  const [ playlistName, setPlaylistName ] = useState('New Playlist')
  const [ playlistTrack, setPlaylistTrack ] = useState([])

  const addTrack = (track) => {
    if (playlistTrack.find(savedTrack => savedTrack.id === track.id)) return
    else setPlaylistTrack(savedTrack => savedTrack.concat([track]))
  }

  const removeTrack = (track) => {
    setPlaylistTrack(savedTrack => savedTrack.filter(item => item.id !== track.id))
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name)
  }

  const savePlaylist = async () => {
    const trackURIs = playlistTrack.map(track => track.uri)
    await Spotify.savePlayList(playlistName, trackURIs)
    setPlaylistName('New Playlist')
    setPlaylistTrack([])
  }

  const search = async (term) => {
    const tracks = await Spotify.search(term)
    setSearchResults(tracks)
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist playlistName={playlistName} playlistTrack={playlistTrack}
            onRemove={removeTrack} onNameChange={updatePlaylistName} 
            onSave={savePlaylist} />
        </div>
      </div>
    </div>
  );
}

export default App;