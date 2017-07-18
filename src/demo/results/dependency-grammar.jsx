import React from "react";


/**
 * 依存文法
 */

export default class DependencyGrammar extends React.Component {


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
