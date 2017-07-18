import React from "react";


/**
 * 情感分析
 */

export default class SentimentAnalysis extends React.Component {


	render() {

		let {item} = this.props;
		return (
			<div className="m-hk">
				<div className="jpt cf">
					<h3 className="fl"><i>{item.title}</i></h3>
				</div>
			</div>
		)
	}
}
