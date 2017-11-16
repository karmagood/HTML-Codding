function divisors_num(x){
	var num = 0;
	
	var n = Math.sqrt(x);
	for(let i=1; i<n; i++){
		if(x%i == 0)
			num += 2
	}
	if(n*n == x)
		num++;
	
	return num;
}

function solve(n){
	var i = 1;
	var triangle = 1;
	while(divisors_num(triangle) <= n){
		i++;
		triangle += i;
	}
	return triangle;
}