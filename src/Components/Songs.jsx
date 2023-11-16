import { useState, useEffect } from "react";

import Song from "./Song";
import "./Styles/Songs.css";

const API = import.meta.env.VITE_API_URL;

export default function Songs() {
  const [songs, setSongs] = useState([]);

  const fetchData = async () => {
    try {
      fetch(`${API}/songs`)
        .then((res) => res.json())
        .then((res) => {
          setSongs(res);
        });
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(songs);
  return (
    <div className="songs">
      <div>
        <h1>My Songs</h1>
      </div>
      <table className="song-table">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Time</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody className="song-container">
          {songs.map((song) => {
            return <Song key={song.id} song={song} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
