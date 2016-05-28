import React, {Component} from 'react';

import VideoListItem from '../video-list-item';


class VideoList extends Component {
	render() {
		const VideoListTemplate = this.props.videos.map((el) => {
				return <VideoListItem 
					onVideoSelect={this.props.onVideoSelect}
					key={el.etag} 
					video={el}
					/>
			});

		return (
				<ul className="col-md-4 list-group">
					{VideoListTemplate}
				</ul>
		);
	}
}

export default VideoList;