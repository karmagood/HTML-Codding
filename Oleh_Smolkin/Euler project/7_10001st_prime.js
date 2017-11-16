function solve(x){
	var n = x*x;
	var arr = [];
	for(let i=0; i<=n; i++){
		arr.push(true);
	}
	var result = [];
	for(let i=2; i<=n; i++){
		if(!arr[i])
			continue;
		result.push(i);
		if(result.length == x){
			return result[result.length-1];
		}
		for(let j=2*i; j<=n; j+=i){
			arr[j] = false;
		}
	}
	return -1;
}