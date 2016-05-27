import React, {Component} from 'react';

class VideoListItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const props = this.props.video;
		const data = {
			title: props.snippet.title,
			imageUrl: props.snippet.thumbnails.default.url
		}
		return (
				<li className="list-group-item">
					<div className="video-list media">
						<div className="media-left">
							<img src={data.imageUrl} alt="" className="media-object"/>
						</div>		
						<div className="media-body">
							<div className="media-heading">{data.title}</div>
						</div>		
					</div>
				</li>
		);
	}
}

export default VideoListItem;