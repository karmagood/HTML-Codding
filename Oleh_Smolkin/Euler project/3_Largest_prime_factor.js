function solve(x){
	var n = Math.floor(Math.sqrt(x));
	var arr = [];
	
	for(let i=0; i<=n; i++){
		arr.push(true);
	}
	var result = -1;
	for(let i=2; i<=n; i++){
		if(!arr[i])
			continue;
		if(x%i==0)
			result = i;
		for(let j=2*i; j<=n; j+=i){
			arr[j] = false;
		}
	}
	return result;
}