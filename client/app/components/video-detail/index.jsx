import React, {Component} from 'react';

import style from './index.styl';

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
			<div className={style.videoDetail}>
				<div className="col-md-8">
					<div className="video embed-responsive embed-responsive-16by9">
						<iframe src={data.url} className="embed-responsive-item"></iframe>
					</div>
					<div className="details">
						<div class="title">{data.title}</div>
						<div class="description">{data.description}</div>
					</div>
				</div>
			</div>
			
		);
	}
}

export default VideoDetail;