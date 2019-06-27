import React from 'react'

class Videoplayer extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = { isPaused: true, isMuted: true };
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const viewHeight = this.videoRef.current.offsetTop - window.innerHeight;
    if (window.scrollY > viewHeight) {
      this.playVideo();
    }
    else {
      this.pauseVideo();
    }
  }

  pauseVideo() {
    this.videoRef.current.pause();
  }

  playVideo() {
    this.videoRef.current.play();
  }

  handleClick() {
    this.setState(prevState => ({
      isPaused: !prevState.isPaused
    }), () => {
      if (this.state.isPaused) {
        this.playVideo();
      } else {
        this.pauseVideo();
      }
    });
  }

  handleHover() {
    this.setState(prevState => ({
      isMuted: !prevState.isMuted
    }))
  }

  render() {
    return(
      <div>
        <video
          ref={this.videoRef}
          onClick={this.handleClick}
          onMouseOver={this.handleHover}
          onMouseOut={this.handleHover}
          muted={this.state.isMuted}
          loop>
          <source src={this.props.src}></source>
        </video>
      </div>
    );
  }
}

export default Videoplayer;
