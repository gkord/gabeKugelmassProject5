import React, { Component } from "react";
import axios from "axios";
import MusicItem from './Components/MusicItem'
import Search from './Components/Search'
import Modal from './Components/Modal'
import firebase from "./firebase";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lyrics: "",
      artistName: "",
      songTitle: "",
      returnedLyrics: []
    };
  }

  //create a function where our API call lives
  getLyrics = () => {
    //Make API Call
    axios({
      method: "GET",
      url: `https://private-anon-51f99dfb17-lyricsovh.apiary-proxy.com/v1/${this.state.artistName}/${this.state.songTitle}`,
      dataResponse: "json",
      params: {
        format: "json"
      }
    })
      .then(results => {
        this.setState(
          {
            lyrics: results.data.lyrics
          },
          //pass an empty function, call our database and push items as an object
          () => {
            const dbRef = firebase.database().ref();
            dbRef.push({
              lyrics: this.state.lyrics,
              artistName: this.state.artistName,
              songTitle: this.state.songTitle
            });
          }
        );
      })
      .catch(error => {
        alert(
          "Hmm... no results. Lyrics either don't exist in our database or you spelled something wrong. Please try again!"
        );
      });
  };

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on("value", response => {
      const newState = [];
      const data = response.val();
      for (let key in data) {
        newState.push({
          key: key,
          artistName: data[key].artistName,
          songTitle: data[key].songTitle,
          lyrics: data[key].lyrics
        });
      }
      this.setState({
        returnedLyrics: newState
      });
    });
  }

  //when user types in input box we are changing state
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  //when user submits the form, we are calling the function that triggers our API call
  handleSubmit = event => {
    event.preventDefault();
    this.getLyrics();
  };
  //when user clicks remove button we remove that object from our page and firebase
  removeSong = songId => {
    const dbRef = firebase.database().ref();
    dbRef.child(songId).remove();
  };

  // when user clicks the song box, lyrics show up below in a new div
  songClick = () => {
    alert('clicked')
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Karaoke Companion</h1>
        </header>
        <Search
          handleChange={this.handleChange}
          artistName={this.state.artistName}
          songTitle={this.state.songTitle}
          handleSubmit={this.handleSubmit}
        />
        <div className="cardContainer">
          <ul>
            {this.state.returnedLyrics.map(songs => {
              return (
                <MusicItem
                  songClick={this.songClick}
                  artistName={songs.artistName}
                  songTitle={songs.songTitle}
                  lyrics={songs.lyrics}
                  removeSong={this.removeSong}
                  key={songs.key}
                  songId={songs.key}
                />
              );
            })}
          </ul>
        </div>
        <div>
          {this.state.isShowing ? (
            <div onClick={this.closeModalHandler} className="back-drop"></div>
          ) : null}

          <button className="open-modal-btn" onClick={this.openModalHandler}>
            Open Modal
          </button>

          <Modal
            className="modal"
            show={this.state.isShowing}
            close={this.closeModalHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
