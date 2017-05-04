/**
 * Created by bigben on 2017/4/18.
 */

export default (type = 'GET', url, param = {}, async=true) => {
	return new Promise((resolve, reject) => {
		type = type.toUpperCase();
		
		let requestObj;
		if (window.XMLHttpRequest) {
			requestObj = new XMLHttpRequest();
		} else {
			requestObj = new ActiveXObject;
		}
		
		if(type === 'GET') {
			let dataStr = '' //数据拼接字符串
			Object.keys(param).forEach(key => {
				dataStr += key + '=' + param[key] + '&'
			})
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
			//url = `${API_TAX}${url}`
			if(dataStr) url += `?${dataStr}`
			requestObj.open(type, url, async)
			requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
			requestObj.send()
		}else if (type === 'POST') {
			requestObj.open(type, url, async);
			requestObj.setRequestHeader("Content-type", "application/json");
			requestObj.send(JSON.stringify(param));
		}else {
			reject('error type');
		}
		
		requestObj.onreadystatechange = () => {
			if (requestObj.readyState === 4) {
				if(requestObj.responseURL !== url){
					window.location.href = requestObj.responseURL
					reject(false)
				}
				
				if (requestObj.status === 200) {
					let obj = requestObj.response
					if (typeof obj !== 'object') {
						obj = JSON.parse(obj);
					}
					resolve(obj);
				}else {
					reject(requestObj)
				}
			}
		}
	})
}












