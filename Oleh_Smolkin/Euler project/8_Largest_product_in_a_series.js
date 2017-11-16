function solve(s, n){
	if(s.length < n)
		return -1;
	
	var product = 1;
	var zeroes = 0;
	
	for(let i=0; i<n; i++){
		var digit = s[i] - '0'
		if(digit == 0)
			zeroes++;
		else
			product *= digit;
	}
	
	if(zeroes == 0)
		max = product;
	else
		max = 0;
	
	for(let i=n; i<s.length; i++){
		var new_digit = s[i] - '0';
		var prev_digit = s[i-n] - '0';
		
		if(new_digit == 0)
			zeroes++;
		else
			product *= new_digit;
		
		if(prev_digit == 0)
			zeroes--;
		else
			product /= prev_digit;
		
		if(zeroes == 0 && product > max)
			max = product;
	}
	
	return max;
}