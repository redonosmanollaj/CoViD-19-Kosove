import React from "react";
import './styles/video.css'

class VideoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.vidRef = React.createRef();
    this.state = {
      isPlaying: false,
    };
  }
  render() {
    return (
      <div>
        <video
          className="video1"
          ref={this.vidRef}
          src={covidVideo}
          onClick={!this.state.isPlaying ? this.playVideo : this.stopVideo}
        />
        <button
          onClick={!this.state.isPlaying ? this.playVideo : this.stopVideo}
          className="btnPlay"
          id="p2"
        >
          <i className="fas fa-play fa-2x" />
        </button>
      </div>
    );
  }
}
