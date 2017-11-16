function isPalindrome(s){
	var n = s.length;
	for(let i=0; i<n; i++){
		if(s[i] != s[n-i-1])
			return false;
	}
	return true;
}

function solve(){
	var result = 1;
	for(let i=999; i>99; i--){
		if(i*999 <= result)
			break;
		for(let j=999; j>99; j--){
			var product = i*j;
			if(product <= result)
				break;
			if(isPalindrome(String(product)))
				result = product;
		}
	}
	return result;
}