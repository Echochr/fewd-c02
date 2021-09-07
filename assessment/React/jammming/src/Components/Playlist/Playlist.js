import "./Playlist.css";
import TrackList from '../TrackList/TrackList'

function Playlist(props) {
  const handleNameChange = (evt) => {
    props.onNameChange(evt.target.value)
  }

  return (
    <div className="Playlist">
      <input value={props.playlistName} onChange={handleNameChange} />
      <TrackList tracks={props.playlistTrack} onRemove={props.onRemove} isRemoval={true} />
      <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist