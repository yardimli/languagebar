/**
 * Created by ekim on 13/3/17.
 */

$(document).ready(function () {


	var verbTarget = "find";

	var baseconjugation = [];

	var listlen = irregular_en_list.length;
	for (var i = 0; i < listlen; i++) {
		if (irregular_en_list[i][0] == verbTarget) {
			baseconjugation = irregular_en_list[i];
		}
	}

	if (baseconjugation == []) {
		baseconjugation[0] = verbTarget;
		if (verbTarget.substr(verbTarget.length-1) == 'e') { baseconjugation[1] = verbTarget+'d'; } else { baseconjugation[1] = verbTarget+'ed'; }
		if (verbTarget.substr(verbTarget.length-1) == 'e') { baseconjugation[2] = verbTarget+'d'; } else { baseconjugation[3] = verbTarget+'ed'; }
	}

	console.log(baseconjugation);


});

