import "./TrackList.css";
import Track from '../Track/Track'

function TrackList(props) {
  return (
    <div className="TrackList">
        {props.tracks.map(track => 
            <Track name={track.name} artist={track.artist}
                album={track.album} key={track.id}
                onAdd={() => props.onAdd(track)}
                onRemove={() => props.onRemove(track)}
                isRemoval={props.isRemoval} />
        )}
    </div>
  )
}

export default TrackList