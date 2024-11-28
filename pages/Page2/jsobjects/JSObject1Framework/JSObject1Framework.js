export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		setInterval(() => {
			showAlert('hi')
		}, 5000, 'interval1')
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 () {
  		clearInterval('interval1')
		//	await storeValue('varName', 'hello world')
	}
}