import {observable, runInAction, computed, action, reaction, autorun} from "mobx";
import LynlpApi from "../common/lynlp-api"

class SimpleComplexStore {
	@observable isFetching= false;
	@observable jianti='';
	@observable fanti='';
	@observable pinyin='';

	@action
	fetchData(content){
		this.isFetching=true;
		Promise.all([
			LynlpApi.j2f(content),
			LynlpApi.f2j(content),
			LynlpApi.pinyin(content),
		]).then(([res1,res2,res3])=>{
			this.isFetching = false;
			this.jianti = res1;
			this.fanti = res2;
			this.pinyin = res3;
		})
	}
}
const simpleComplexStore = new SimpleComplexStore();
export default simpleComplexStore
