import React from "react";

const SongList = props => {
  const first20 = props.songDisplay.replace(/(.{20})..+/, "$1...");
  return (
    <div>
      <li className="w3-animate-left">
        <div className="lyricBoxTop">
          <h4>{props.artistDisplay}</h4>
          <h4>{props.songDisplay.length < 20 ? props.songDisplay : first20}</h4>
          <div className="topRight">
            <button
              className="openModalButton"
              onClick={() => props.openModal(props.lyrics)}
            >
              Lyrics
            </button>
            <button
              className="removeButton"
              onClick={() => props.removeSong(props.songId)}
            >
              <i className="fas fa-times-circle"></i>
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default SongList;
