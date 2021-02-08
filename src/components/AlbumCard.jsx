import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/albumCard.module.css";
import PropTypes from "prop-types";

export default function AlbumCard({ albumcard }) {
  const { id, picture, title, artist } = albumcard;

  return (
    <div className={styles.card}>
      <Link to={`/album/${id}`}>
        <img src={picture} alt={title} className={styles.image} />
      </Link>
      <p>
        {artist} / {title}
      </p>
    </div>
  );
}

AlbumCard.propTypes = {
  albumcard: PropTypes.shape({
    id: PropTypes.number,
    picture: PropTypes.string,
    title: PropTypes.string,
    artist: PropTypes.string,
  }),
};
