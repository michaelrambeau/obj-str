var index = function (obj) {
	let cls = '';
	for (const k in obj) {
		if (obj[k]) {
			cls && (cls += ' ');
			cls += k;
		}
	}
	return cls;
};

export default index;
