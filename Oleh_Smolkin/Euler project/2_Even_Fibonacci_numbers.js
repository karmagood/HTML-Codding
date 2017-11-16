function solve(n){
	sum = 0;
	arr = [1, 1];
	
	i = 0;
	while(arr[++i%2] <= n){
		if(arr[i%2]%2==0){
			sum += arr[i%2];
		}
		arr[i%2] = arr[0] + arr[1];
	}
	return sum;
}