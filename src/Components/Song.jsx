export default function Song({ song }) {
  return (
    <div className="song-card">
      <div className="song-img">
        <img
          src="https://www."
          alt={`An image of ${song.artist}'s song cover`}
        />
      </div>
      <div className="song description">
        <h2>{song.name}</h2>
        <h3>{song.artist}</h3>
        <p>{song.album}</p>
        <h5>{song.time}</h5>
        <p>isFavorite</p>
      </div>
    </div>
  );
}
