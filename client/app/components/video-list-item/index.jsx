import React, {Component} from 'react';

import style from './index.styl';

class VideoListItem extends Component {

	onClickHandler() {
		this.props.onVideoSelect(this.props.video);
	}
	
	render() {
		const props = this.props;
		const data = {
			title: props.video.snippet.title,
			imageUrl: props.video.snippet.thumbnails.default.url,
		};
		
		return (
			<li onClick={this.onClickHandler.bind(this)} className={'list-group-item ' + style.item}>
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