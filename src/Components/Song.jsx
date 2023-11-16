import { Link } from "react-router-dom";

export default function Song({ song }) {
  return (
    <tr className="song-card">
      <td>
        <div className="song-img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDzJiS20YXy-0oChw_WhBa0PE8xzLJSlDltw&usqp=CAU"
            alt={`An image of ${song.artist}'s song cover`}
          />
        </div>
      </td>
      <td>
      <Link to={`/songs/${song.id}`}>{song.name}</Link>
      </td>
      <td>
        <p>{song.album}</p>
      </td>
      <td>
        <h3>{song.artist}</h3>
      </td>
      <td>
        <h5>{song.time}</h5>
      </td>
      <td>
        <p>isFavorite</p>
      </td>
    </tr>
  );
}
