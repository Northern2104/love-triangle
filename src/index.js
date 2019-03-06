/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
	for(i=0;i<=preferences.length;i++){
		let a = preferences[i];
		let b = preferences[a-1];
		let c = preferences[b-1];

		if (i==c-1&&a!=b&&b!=c){
			count++;
		}
	}
	return count/3;
};
