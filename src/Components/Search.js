import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <div>
        <form action="">
          <input
            onChange={this.props.handleChange}
            type="text"
            name="artistName"
            id="artistName"
            value={this.props.artistName}
            placeholder="Enter Artist Name"
          />
          +
          <input
            onChange={this.props.handleChange}
            type="text"
            name="songTitle"
            id="songTitle"
            value={this.props.songTitle}
            placeholder="Enter Song Title"
          />
          <button
            className="submitButton"
            onClick={this.props.handleSubmit}
            // disabled={this.props.artistName.length || this.props.songTitle.length == 0 ? "disabled": null}
            type="submit"
          >
            Add Song
          </button>
        </form>
      </div>
    );
  }
}

export default Search