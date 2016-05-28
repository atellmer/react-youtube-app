import React, {Component} from 'react';

import style from './index.styl';

class VideoDetail extends Component {
	
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