import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from '../components/search-bar';
import VideoList from '../components/video-list';
import VideoDetail from '../components/video-detail';

import style from './app.styl';
import { API_KEY } from '../constants';


class App extends Component {
  
  constructor() {
    super();

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.youTubeSearch(null);
  }

  youTubeSearch(term) {
    YTSearch({
      key: API_KEY,
      term: term,
      maxResults: 10
    },
      (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      });
  }
  
   onChangeTermHandler(term) {
     _.debounce(() => this.youTubeSearch(term), 300)();
  }

  onVideoSelectHandler(selectedVideo) {
    this.setState({
      selectedVideo: selectedVideo
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className={ style.logo }></div>
        <SearchBar onChangeTerm={ this.onChangeTermHandler.bind(this) }/>
        <VideoDetail video={ this.state.selectedVideo }/>
        <VideoList
          onVideoSelect={ this.onVideoSelectHandler.bind(this) }
          videos={ this.state.videos }/>
      </div>
    );
  }
}

export default App;