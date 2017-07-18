import React from 'react';


/**
 * 简、繁体与拼音
 */


export default class SimpleComplex extends React.Component {



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
