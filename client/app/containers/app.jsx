import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from '../components/search-bar';
import VideoList from '../components/video-list';
import VideoDetail from '../components/video-detail';

import style from './app.styl';
import { API_KEY } from '../constants';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({ key: API_KEY, term: 'angular 2' }, (videos) => {
      this.setState({ videos });
    });
  }
 

  render() {
    console.log(this.state.videos);
    
    
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;