import React from "react";
import '../../styles/submit-text.scss';

export default class SubitText extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			url:'',
			get:false,
		}
	}
	render(){
		return(
			<div className="wb-t">
				<textarea className="txtr_1" value={'aaaa'}/>
				<div className="wbt-b cf">
					<a href="javascript:void(0)" className="tj-a fr" >提交文本</a>
					<a href="javascript:void(0)" className="zq-a fr">抓取</a>
					<input type="url" className="txt-1 fr" placeholder="网页URL....."/>
				</div>
			</div>
		)
	}
}
