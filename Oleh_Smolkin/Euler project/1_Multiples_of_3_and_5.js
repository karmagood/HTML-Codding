function gcd(x, y){
	if(y == 0)
		return x;
	return gcd(y, x%y);
}

function sum(a, n, d){
	return n*(2*a+(n-1)*d)/2;
}

function solve(x, y, n){
	lcm = x*y/gcd(x, y);
	x_sum = sum(x, Math.floor((n-1)/x), x);
	y_sum = sum(y, Math.floor((n-1)/y), y);
	lcm_sum = sum(lcm, Math.floor((n-1)/lcm), lcm);
	return x_sum + y_sum -  lcm_sum;
}