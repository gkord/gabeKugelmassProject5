import React from "react";

const SongList = props => {
  return (
    <div>
      <li className="w3-animate-left">
        <div className="lyricBoxTop">
          <h4>{props.artistName}</h4>
          <h4>{props.songTitle}</h4>
          <div className="topRight">
            <button
              className="openModalButton"
              onClick={() => props.openModal(props.lyrics)}
            >
              View
            </button>
            <button
              className="removeButton"
              onClick={() => props.removeSong(props.songId)}
            >
              <i className="fas fa-times-circle"></i>
            </button>
          </div>
        </div>
        {/* <p>{props.lyrics}</p> */}
      </li>
    </div>
  );
};

export default SongList;
