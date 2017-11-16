function gcd(x, y){
	if(y == 0)
		return x;
	return gcd(y, x%y);
}

function solve(n){
	var result = 1;
	for(let i=2; i<=n; i++){
		result *= i/gcd(result, i);
	}
	return result;
}