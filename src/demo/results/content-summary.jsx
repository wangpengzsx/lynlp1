import React from "react";
import {observer} from "mobx-react";
import contentSummaryStore from '../../mobx/content-summary-store'
import Loading from "../loading";


/**
 * 内容摘要
 */
@observer
export default class ContentSummary extends React.Component {


	render() {
		let {item} = this.props;
		let {isFetching} = contentSummaryStore;
		return (
			<div className="m-hk">
				<div className="jpt cf">
					<h3 className="fl"><i>{item.title}</i></h3>
				</div>
				{
					isFetching ? <Loading/>:<div className="jfp" style={{display:'bloack'}}
																			 dangerouslySetInnerHTML={{__html:contentSummaryStore.summary}}></div>
				}
			</div>
		)
	}
}
