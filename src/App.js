import React, { Component } from "react";
import axios from "axios";
import firebase from "./firebase";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lyrics: "",
      artistName: "",
      songTitle: "",
      returnedLyrics:""
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
    }).then(results => {
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
    });
  };

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on("value", response => {
      console.log(response.val());
      const newState = [];
      const data = response.val();
      for (let key in data) {
        newState.push(data[key]);
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

  render() {
    return (
      <div className="App">
        <h1>Lyrics App</h1>
        <form action="">
          <input
            onChange={this.handleChange}
            type="text"
            name="artistName"
            id="artistName"
            value={this.state.artistName}
            placeholder="Enter Artist Name"
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="songTitle"
            id="songTitle"
            value={this.state.songTitle}
            placeholder="Enter Song Title"
          />
          <button onClick={this.handleSubmit} type="submit">
            Get Lyrics
          </button>
        </form>
        <div className="displayLyrics">
          <h2>{this.state.artistName}</h2>
          <h2>{this.state.songTitle}</h2>
          <p>{this.state.lyrics}</p>
        </div>
        {/* map through returned array and display the keys */}
        <ul>
          {this.state.returnedLyrics.map(songs => {
            console.log(songs);
          })}
        </ul>
      </div>
    );
  }
}

export default App;
