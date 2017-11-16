function solve(n){
	var matrix = []; 
	for(let i=0; i<=n; i++){
        matrix.push(new Array(n+1).fill(0))
		matrix[i][0] = 1;
		matrix[0][i] = 1;
	}
	
	for(let i=1; i<=n; i++){
		for(let j=1; j<=n; j++){
			matrix[i][j] = matrix[i][j-1] + matrix[i-1][j];
		}
	}
	
	return matrix[n][n];
}