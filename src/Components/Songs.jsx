import { useState, useEffect } from "react";

import Song from "./Song";

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
      <h1>Songs</h1>
      <div className="song-container">
        {songs.map((song) => {
          return <Song key={song.id} song={song} />;
        })}
      </div>
    </div>
  );
}
