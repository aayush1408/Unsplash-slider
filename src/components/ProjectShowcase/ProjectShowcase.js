import React, { Component } from 'react';
import axios from 'axios';
import classes from './ProjectShowcase.css';
//API key
import { CLIENT_SECRET } from '../../config/keys';

class ProjectShowcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrls: [],
      currentImgIndex: 0
    };
  }
  componentDidMount() {
    axios.get(`https://api.unsplash.com/search/photos?client_id=${CLIENT_SECRET}&query=${this.props.query}/orientation=potrait`)
      .then((imgs) => {
        this.setState({ imgUrls: [...imgs.data.results] });
        this.intervalId = setInterval(() => {
          if (this.state.currentImgIndex >= 9) {
            this.setState({ currentImgIndex: 0 })
          }
          this.setState({ currentImgIndex: this.state.currentImgIndex + 1 })
        }, 3000);
      }).catch((err) => {
        console.log(err);
      });
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    const { imgUrls, currentImgIndex } = this.state;
    return (
      <div className={classes.slider}>
        {imgUrls.length > 0 &&
          <img
            alt="Img1"
            src={imgUrls[currentImgIndex].urls.small}
            style={{ width: 460, height: 400 }}
          />
        }
      </div>
    );
  }
}

export default ProjectShowcase;
