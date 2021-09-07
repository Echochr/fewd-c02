import "./Track.css"

function Track(props) {
    const renderAction = () => {
      const isRemoval = props.isRemoval
      return <button className="Track-action" onClick={isRemoval? removeTrack:addTrack}>{isRemoval? '-':'+'}</button>
    }

    const addTrack = () => props.onAdd()
    const removeTrack = () => props.onRemove()

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.name}</h3>
        <p>{props.artist} | {props.album}</p>
      </div>
      {renderAction()}
    </div>
  )
}

export default Track