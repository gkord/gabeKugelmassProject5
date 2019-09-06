import React, { Component } from "react";

class Search extends Component {
    render() {
        return (
          <div>
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
          </div>
        );
    }
}

export default Search;