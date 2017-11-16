function solve(n){
	var arr = [];
	
	for(let i=0; i<=n; i++){
		arr.push(true);
	}

	var result = 0;
	for(let i=2; i<=n; i++){
		if(!arr[i])
			continue;
		
		result += i;
		
		for(let j=2*i; j<=n; j+=i){
			arr[j] = false;
		}
	}
	
	return result;
}