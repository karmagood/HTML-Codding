function solve(s){
	var sum = 0;
	for(let i=0; i<s.length; i++){
		sum += s[i] - '0';
	}
	return sum;
}