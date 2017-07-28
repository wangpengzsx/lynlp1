import {observable, runInAction, computed, action, reaction, autorun} from "mobx";
import LynlpApi from "../common/lynlp-api"

class SemanticAssociationStore{
	@observable fetching = true;
	@observable fetchingTu = true;
	@observable changeCurrent = 0;
	@observable recommend = {};
	@observable current = 0;
	@observable keyItem = '';

	@action
	fetchData(content){
		this.current = 0;
		this.fetching = true;
		this.recommend = {};
		LynlpApi.semanticRecommend(content).then(res => {
			let Key = _.keys(res);
			this.keyItem = ""+Key[0];
			this.changeCurrent++;
			for(var i in res){
				this.recommend[i] = res[i];
			}
			this.fetching = false;
			this.fetchingTu = true;
			LynlpApi.semanticRecommendGraph(Key[0]).then(res =>{
				this.graph = res;
				this.fetchingTu = false;
			})
		})
	}

	@action
	fetchDataGraph(keyword){
		this.fetchingTu = true;
		this.graph = {};
		LynlpApi.semanticRecommendGraph(keyword).then(res =>{
			this.graph = res;
			this.fetchingTu = false;
		})
	}

}

const semanticAssociationStore = new SemanticAssociationStore();
export default semanticAssociationStore
