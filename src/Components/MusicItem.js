import React from "react";


const MusicItem = (props) => {
    return (
      <div>
          <li>
            <div className="lyricBoxTop" onClick={() => props.songClick()}>
              <h4>{props.artistName}</h4>
              <h4>{props.songTitle}</h4>
              <button
                className="removeButton"
                onClick={() => props.removeSong(props.songId)}
              >
                <i className="fas fa-times-circle"></i>
              </button>
            </div>
            <p>{props.lyrics}</p>
          </li>
      </div>
    );
}

export default MusicItem