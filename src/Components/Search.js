import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="artistName" className="visuallyHidden">Enter Artist Name</label>
          <input
            onChange={this.props.handleChange}
            type="text"
            name="artistName"
            id="artistName"
            value={this.props.artistName}
            placeholder="Enter Artist Name"
          />
          +
          <label htmlFor="songTitle" className="visuallyHidden">Enter Song Title</label>
          <input
            onChange={this.props.handleChange}
            type="text"
            name="songTitle"
            id="songTitle"
            value={this.props.songTitle}
            placeholder="Enter Song Title"
          />
          <label htmlFor="submitButton" className="visuallyHidden">Click to Add Song</label>
          <button
            className="submitButton"
            id="submitButton"
            onClick={this.props.handleSubmit}
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