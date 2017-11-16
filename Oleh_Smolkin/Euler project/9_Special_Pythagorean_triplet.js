function solve(n){
	for(let i=1; i<n; i++){
		for(let j=i+1; j<n; j++){
			var c = n - i - j;
			if(c < j)
				break;
			
			if(i*i + j*j == c*c)
				return i*j*c;
		}
	}
	return -1;
}