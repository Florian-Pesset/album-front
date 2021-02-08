import { useState, useEffect } from "react";
import GetAlbumId from "../services/get/GetAlbumId";
import GetTracks from "../services/get/GetTracks";
import styles from "../css/albumInfos.module.css";
import Tracks from "../components/Tracks";
import ButtonDeleteAlbum from "../components/ButtonDeleteAlbum";
import PropTypes from "prop-types";

export default function AlbumInfos(props) {
  const [albumId, setAlbumId] = useState({});
  const [tracks, setTracks] = useState([]);
  const { id } = props.match.params;
  const { picture, title, artist, genre, date, description } = albumId;

  useEffect(() => {
    GetAlbumId({ setAlbumId, id });
    GetTracks({ setTracks, id });
  }, [id]);

  return (
    <div className={styles.main}>
      <h1>Infos Album</h1>
      <img src={picture} alt={title} className={styles.image} />
      <div className={styles.albuminfo}>
        <div className={styles.infosAlbum}>
          <h2>{title}</h2>
          <p>Artist: {artist}</p>
          <p>Genre: {genre} </p>
          <p>Date: {date}</p>
          <p>Description: {description}</p>
        </div>
        <div className={styles.infosTracks}>
          <h2>Tracks</h2>
          {tracks.map((track) => (
            <Tracks key={track.id} track={track} />
          ))}
        </div>
      </div>
      <ButtonDeleteAlbum id={id} />
    </div>
  );
}

AlbumInfos.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};
