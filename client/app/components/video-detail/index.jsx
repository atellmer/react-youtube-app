import React, {Component} from 'react';

class VideoDetail extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const props = this.props.video;
		
		if (!props) {
			return <div>Loading...</div>
		}
		
		const data = {
			title: props.snippet.title,
			description: props.snippet.description,
			url: `https://www.youtube.com/embed/${props.id.videoId}`
		}
		
		console.log(data.url);
	
		return (
			<div className="video-detail col-md-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe src={data.url} className="embed-responsive-item"></iframe>
				</div>
				<div className="details">
					<div>{data.title}</div>
					<div>{data.description}</div>
				</div>
			</div>
		);
	}
}

export default VideoDetail;