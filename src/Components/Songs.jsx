import {useState, useEffect} from "react";

const API = import.meta.env.VITE_API_URL;

export default function Songs() {

    const [songs, setSongs] = useState([]);

    const fetchData = async () =>{
        try {
            fetch(`${API}/songs`)
            .then((res) => res.json())
            .then((res) =>{
                setSongs(res);
            });
        } catch (error) {
            return error;
        }
    }
    console.log(songs)

  return <div className="songs"></div>;
}
