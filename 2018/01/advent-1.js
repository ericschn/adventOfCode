
var sums = [];
var x = 0;
for (i = 0; i <= nums.length; i++) {
	var timesRun = 1016 * x;
	if (i == 0) {
		sums.push(nums[i]);
	} else if (nums.length === i) {
		sums.push(sums[sums.length - 1] + nums[0]);
		i = 0;
		x += 1;
	} else {
		var nextIndex = i + timesRun - 1;
		var nextSum = nums[i] + sums[nextIndex];

		//console.log(sums[sums.length - 1]);

		if (sums.find((s) => s === nextSum) !== undefined) {
			console.log(nextSum);
		}

		sums.push(nextSum);
	}
}
