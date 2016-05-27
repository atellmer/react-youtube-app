import React, {Component} from 'react';

import VideoListItem from '../video-list-item';


class VideoList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const videos = this.props.videos;
		const VideoListTemplate = videos.map((el) => {
				return <VideoListItem key={el.etag} video={el}/>
			});

		return (
				<ul className="col-md-4 list-group">
					{ VideoListTemplate }
				</ul>
		);
	}
}

export default VideoList;