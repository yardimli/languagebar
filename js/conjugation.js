/**
 * Created by ekim on 13/3/17.
 */

function getParameterByName(name, url) {
	if (!url) {
		url = window.location.href;
	}
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}


var en_conjugation =
		[
			{
				'Category': 'Indicative',
				'Data': [
					{
						'Category': 'Present',
						'Conjugation': [
							{'person': '1ps', 'structure': '  [infinitive]'},
							{'person': '2ps', 'structure': '  [infinitive]'},
							{'person': '3ps', 'structure': '  [inf_3rdperson]'},
							{'person': '1pp', 'structure': '  [infinitive]'},
							{'person': '2pp', 'structure': '  [infinitive]'},
							{'person': '3pp', 'structure': '  [infinitive]'}
						]
					},
					{
						'Category': 'Present Neg',
						'Conjugation': [
							{'person': '1ps', 'structure': ' do not [infinitive]'},
							{'person': '2ps', 'structure': ' do not [infinitive]'},
							{'person': '3ps', 'structure': ' does not [infinitive]'},
							{'person': '1pp', 'structure': ' do not [infinitive]'},
							{'person': '2pp', 'structure': ' do not [infinitive]'},
							{'person': '3pp', 'structure': ' do not [infinitive]'}
						]
					},
					{
						'Category': 'Present continuous',
						'Conjugation': [
							{'person': '1ps', 'structure': '  am [gerund]'},
							{'person': '2ps', 'structure': '  are [gerund]'},
							{'person': '3ps', 'structure': '  is [gerund]'},
							{'person': '1pp', 'structure': '  are [gerund]'},
							{'person': '2pp', 'structure': '  are [gerund]'},
							{'person': '3pp', 'structure': '  are [gerund]'}
						]
					},
					{
						'Category': 'Present continuous Neg',
						'Conjugation': [
							{'person': '1ps', 'structure': 'am not [gerund]'},
							{'person': '2ps', 'structure': 'are not [gerund]'},
							{'person': '3ps', 'structure': 'is not [gerund]'},
							{'person': '1pp', 'structure': 'are not [gerund]'},
							{'person': '2pp', 'structure': 'are not [gerund]'},
							{'person': '3pp', 'structure': 'are not [gerund]'}
						]
					},

					{
						'Category': 'Simple past',
						'Conjugation': [
							{'person': '1ps', 'structure': '  [simp_past]'},
							{'person': '2ps', 'structure': '  [simp_past]'},
							{'person': '3ps', 'structure': '  [simp_past]'},
							{'person': '1pp', 'structure': '  [simp_past]'},
							{'person': '2pp', 'structure': '  [simp_past]'},
							{'person': '3pp', 'structure': '  [simp_past]'}
						]
					},

					{
						'Category': 'Simple past Neg',
						'Conjugation': [
							{'person': '1ps', 'structure': ' did not [infinitive]'},
							{'person': '2ps', 'structure': ' did not [infinitive]'},
							{'person': '3ps', 'structure': ' did not [infinitive]'},
							{'person': '1pp', 'structure': ' did not [infinitive]'},
							{'person': '2pp', 'structure': ' did not [infinitive]'},
							{'person': '3pp', 'structure': ' did not [infinitive]'}
						]
					},

					{
						'Category': 'Past continuous',
						'Conjugation': [
							{'person': '1ps', 'structure': '  was [gerund]'},
							{'person': '2ps', 'structure': '  were [gerund]'},
							{'person': '3ps', 'structure': '  was [gerund]'},
							{'person': '1pp', 'structure': '  were [gerund]'},
							{'person': '2pp', 'structure': '  were [gerund]'},
							{'person': '3pp', 'structure': '  were [gerund]'}
						]
					},

					{
						'Category': 'Past continuous Neg',
						'Conjugation': [
							{'person': '1ps', 'structure': '  was not [gerund]'},
							{'person': '2ps', 'structure': '  were not [gerund]'},
							{'person': '3ps', 'structure': '  was not [gerund]'},
							{'person': '1pp', 'structure': '  were not [gerund]'},
							{'person': '2pp', 'structure': '  were not [gerund]'},
							{'person': '3pp', 'structure': '  were not [gerund]'}
						]
					},

					{
						'Category': 'Present perfect',
						'Conjugation': [
							{'person': '1ps', 'structure': '  have [past_part]'},
							{'person': '2ps', 'structure': '  have [past_part]'},
							{'person': '3ps', 'structure': '  has [past_part]'},
							{'person': '1pp', 'structure': '  have [past_part]'},
							{'person': '2pp', 'structure': '  have [past_part]'},
							{'person': '3pp', 'structure': '  have [past_part]'}]
					},

					{
						'Category': 'Present perfect Neg',
						'Conjugation': [
							{'person': '1ps', 'structure': '  have not [past_part]'},
							{'person': '2ps', 'structure': '  have not [past_part]'},
							{'person': '3ps', 'structure': '  has not [past_part]'},
							{'person': '1pp', 'structure': '  have not [past_part]'},
							{'person': '2pp', 'structure': '  have not [past_part]'},
							{'person': '3pp', 'structure': '  have not [past_part]'}]
					},

					{
						'Category': 'Present perfect continuous',
						'Conjugation': [
							{'person': '1ps', 'structure': '  have been [gerund]'},
							{'person': '2ps', 'structure': '  have been [gerund]'},
							{'person': '3ps', 'structure': '  has been [gerund]'},
							{'person': '1pp', 'structure': '  have been [gerund]'},
							{'person': '2pp', 'structure': '  have been [gerund]'},
							{'person': '3pp', 'structure': '  have been [gerund]'}]
					},

					{
						'Category': 'Present perfect continuous Neg',
						'Conjugation': [
							{'person': '1ps', 'structure': '  have not been [gerund]'},
							{'person': '2ps', 'structure': '  have not been [gerund]'},
							{'person': '3ps', 'structure': '  has not been [gerund]'},
							{'person': '1pp', 'structure': '  have not been [gerund]'},
							{'person': '2pp', 'structure': '  have not been [gerund]'},
							{'person': '3pp', 'structure': '  have not been [gerund]'}]
					},

					{
						'Category': 'Past perfect',
						'Conjugation': [
							{'person': '1ps', 'structure': '  had [past_part]'},
							{'person': '2ps', 'structure': '  had [past_part]'},
							{'person': '3ps', 'structure': '  had [past_part]'},
							{'person': '1pp', 'structure': '  had [past_part]'},
							{'person': '2pp', 'structure': '  had [past_part]'},
							{'person': '3pp', 'structure': '  had [past_part]'}]
					},

					{
						'Category': 'Past perfect Neg',
						'Conjugation': [
							{'person': '1ps', 'structure': '  had not [past_part]'},
							{'person': '2ps', 'structure': '  had not [past_part]'},
							{'person': '3ps', 'structure': '  had not [past_part]'},
							{'person': '1pp', 'structure': '  had not [past_part]'},
							{'person': '2pp', 'structure': '  had not [past_part]'},
							{'person': '3pp', 'structure': '  had not [past_part]'}]
					},

					{
						'Category': 'Past perfect continuous',
						'Conjugation': [
							{'person': '1ps', 'structure': '  had been [gerund]'},
							{'person': '2ps', 'structure': '  had been [gerund]'},
							{'person': '3ps', 'structure': '  had been [gerund]'},
							{'person': '1pp', 'structure': '  had been [gerund]'},
							{'person': '2pp', 'structure': '  had been [gerund]'},
							{'person': '3pp', 'structure': '  had been [gerund]'}]
					},

					{
						'Category': 'Past perfect continuous Neg',
						'Conjugation': [
							{'person': '1ps', 'structure': '  had not been [gerund]'},
							{'person': '2ps', 'structure': '  had not been [gerund]'},
							{'person': '3ps', 'structure': '  had not been [gerund]'},
							{'person': '1pp', 'structure': '  had not been [gerund]'},
							{'person': '2pp', 'structure': '  had not been [gerund]'},
							{'person': '3pp', 'structure': '  had not been [gerund]'}]
					},

					{
						'Category': 'Future',
						'Conjugation': [
							{'person': '1ps', 'structure': '  will [infinitive]'},
							{'person': '2ps', 'structure': '  will [infinitive]'},
							{'person': '3ps', 'structure': '  will [infinitive]'},
							{'person': '1pp', 'structure': '  will [infinitive]'},
							{'person': '2pp', 'structure': '  will [infinitive]'},
							{'person': '3pp', 'structure': '  will [infinitive]'}]
					},

					{
						'Category': 'Future Neg',
						'Conjugation': [
							{'person': '1ps', 'structure': '  will not [infinitive]'},
							{'person': '2ps', 'structure': '  will not [infinitive]'},
							{'person': '3ps', 'structure': '  will not [infinitive]'},
							{'person': '1pp', 'structure': '  will not [infinitive]'},
							{'person': '2pp', 'structure': '  will not [infinitive]'},
							{'person': '3pp', 'structure': '  will not [infinitive]'}]
					},

					{
						'Category': 'Future continuous',
						'Conjugation': [
							{'person': '1ps', 'structure': '  will be [gerund]'},
							{'person': '2ps', 'structure': '  will be [gerund]'},
							{'person': '3ps', 'structure': '  will be [gerund]'},
							{'person': '1pp', 'structure': '  will be [gerund]'},
							{'person': '2pp', 'structure': '  will be [gerund]'},
							{'person': '3pp', 'structure': '  will be [gerund]'}]
					},

					{
						'Category': 'Future continuous Neg',
						'Conjugation': [
							{'person': '1ps', 'structure': '  will not be [gerund]'},
							{'person': '2ps', 'structure': '  will not be [gerund]'},
							{'person': '3ps', 'structure': '  will not be [gerund]'},
							{'person': '1pp', 'structure': '  will not be [gerund]'},
							{'person': '2pp', 'structure': '  will not be [gerund]'},
							{'person': '3pp', 'structure': '  will not be [gerund]'}]
					},

					{
						'Category': 'Future perfect',
						'Conjugation': [
							{'person': '1ps', 'structure': '  will have [past_part]'},
							{'person': '2ps', 'structure': '  will have [past_part]'},
							{'person': '3ps', 'structure': '  will have [past_part]'},
							{'person': '1pp', 'structure': '  will have [past_part]'},
							{'person': '2pp', 'structure': '  will have [past_part]'},
							{'person': '3pp', 'structure': '  will have [past_part]'}]
					},

					{
						'Category': 'Future perfect Neg',
						'Conjugation': [
							{'person': '1ps', 'structure': '  will not have [past_part]'},
							{'person': '2ps', 'structure': '  will not have [past_part]'},
							{'person': '3ps', 'structure': '  will not have [past_part]'},
							{'person': '1pp', 'structure': '  will not have [past_part]'},
							{'person': '2pp', 'structure': '  will not have [past_part]'},
							{'person': '3pp', 'structure': '  will not have [past_part]'}]
					},

					{
						'Category': 'Future perfect continuous',
						'Conjugation': [
							{'person': '1ps', 'structure': '  will have been [gerund]'},
							{'person': '2ps', 'structure': '  will have been [gerund]'},
							{'person': '3ps', 'structure': '  will have been [gerund]'},
							{'person': '1pp', 'structure': '  will have been [gerund]'},
							{'person': '2pp', 'structure': '  will have been [gerund]'},
							{'person': '3pp', 'structure': '  will have been [gerund]'}]
					},

					{
						'Category': 'Future perfect continuous Neg',
						'Conjugation': [
							{'person': '1ps', 'structure': '  will not have been [gerund]'},
							{'person': '2ps', 'structure': '  will not have been [gerund]'},
							{'person': '3ps', 'structure': '  will not have been [gerund]'},
							{'person': '1pp', 'structure': '  will not have been [gerund]'},
							{'person': '2pp', 'structure': '  will not have been [gerund]'},
							{'person': '3pp', 'structure': '  will not have been [gerund]'}]
					}
				]
			}
			,

			{
				'Category': 'Conditional',
				'Data': [
					{
						'Category': 'Conditional present',
						'Conjugation': [
							{'person': '1ps', 'structure': '  would [infinitive]'},
							{'person': '2ps', 'structure': '  would [infinitive]'},
							{'person': '3ps', 'structure': '  would [infinitive]'},
							{'person': '1pp', 'structure': '  would [infinitive]'},
							{'person': '2pp', 'structure': '  would [infinitive]'},
							{'person': '3pp', 'structure': '  would [infinitive]'}]
					},

					{
						'Category': 'Conditional present Neg',
						'Conjugation': [
							{'person': '1ps', 'structure': '  would not [infinitive]'},
							{'person': '2ps', 'structure': '  would not [infinitive]'},
							{'person': '3ps', 'structure': '  would not [infinitive]'},
							{'person': '1pp', 'structure': '  would not [infinitive]'},
							{'person': '2pp', 'structure': '  would not [infinitive]'},
							{'person': '3pp', 'structure': '  would not [infinitive]'}]
					},

					{
						'Category': 'Conditional present progressive',
						'Conjugation': [
							{'person': '1ps', 'structure': '  would be [gerund]'},
							{'person': '2ps', 'structure': '  would be [gerund]'},
							{'person': '3ps', 'structure': '  would be [gerund]'},
							{'person': '1pp', 'structure': '  would be [gerund]'},
							{'person': '2pp', 'structure': '  would be [gerund]'},
							{'person': '3pp', 'structure': '  would be [gerund]'}]
					},

					{
						'Category': 'Conditional present progressive Neg',
						'Conjugation': [
							{'person': '1ps', 'structure': '  would not be [gerund]'},
							{'person': '2ps', 'structure': '  would not be [gerund]'},
							{'person': '3ps', 'structure': '  would not be [gerund]'},
							{'person': '1pp', 'structure': '  would not be [gerund]'},
							{'person': '2pp', 'structure': '  would not be [gerund]'},
							{'person': '3pp', 'structure': '  would not be [gerund]'}]
					},

					{
						'Category': 'Conditional perfect',
						'Conjugation': [
							{'person': '1ps', 'structure': '  would have [past_part]'},
							{'person': '2ps', 'structure': '  would have [past_part]'},
							{'person': '3ps', 'structure': '  would have [past_part]'},
							{'person': '1pp', 'structure': '  would have [past_part]'},
							{'person': '2pp', 'structure': '  would have [past_part]'},
							{'person': '3pp', 'structure': '  would have [past_part]'}]
					},

					{
						'Category': 'Conditional perfect Neg',
						'Conjugation': [
							{'person': '1ps', 'structure': '  would not have [past_part]'},
							{'person': '2ps', 'structure': '  would not have [past_part]'},
							{'person': '3ps', 'structure': '  would not have [past_part]'},
							{'person': '1pp', 'structure': '  would not have [past_part]'},
							{'person': '2pp', 'structure': '  would not have [past_part]'},
							{'person': '3pp', 'structure': '  would not have [past_part]'}]
					},

					{
						'Category': 'Conditional perfect progressive',
						'Conjugation': [
							{'person': '1ps', 'structure': '  would have been [gerund]'},
							{'person': '2ps', 'structure': '  would have been [gerund]'},
							{'person': '3ps', 'structure': '  would have been [gerund]'},
							{'person': '1pp', 'structure': '  would have been [gerund]'},
							{'person': '2pp', 'structure': '  would have been [gerund]'},
							{'person': '3pp', 'structure': '  would have been [gerund]'}]
					},

					{
						'Category': 'Conditional perfect progressive Neg',
						'Conjugation': [
							{'person': '1ps', 'structure': '  would not have been [gerund]'},
							{'person': '2ps', 'structure': '  would not have been [gerund]'},
							{'person': '3ps', 'structure': '  would not have been [gerund]'},
							{'person': '1pp', 'structure': '  would not have been [gerund]'},
							{'person': '2pp', 'structure': '  would not have been [gerund]'},
							{'person': '3pp', 'structure': '  would not have been [gerund]'}]
					}
				]
			},
			{
				'Category': 'Subjunctive',

				'Data': [{
					'Category': 'Present subjunctive',
					'Conjugation': [
						{'person': '1ps', 'structure': '  [infinitive]'},
						{'person': '2ps', 'structure': '  [infinitive]'},
						{'person': '3ps', 'structure': '  [infinitive]'},
						{'person': '1pp', 'structure': '  [infinitive]'},
						{'person': '2pp', 'structure': '  [infinitive]'},
						{'person': '3pp', 'structure': '  [infinitive]'}]
					},
					{
						'Category': 'Present subjunctive Neg',
						'Conjugation': [
							{'person': '1ps', 'structure': ' not [infinitive]'},
							{'person': '2ps', 'structure': ' not [infinitive]'},
							{'person': '3ps', 'structure': ' not [infinitive]'},
							{'person': '1pp', 'structure': ' not [infinitive]'},
							{'person': '2pp', 'structure': ' not [infinitive]'},
							{'person': '3pp', 'structure': ' not [infinitive]'}]
					},

					{
						'Category': 'Past subjunctive',
						'Conjugation': [
							{'person': '1ps', 'structure': '  [simp_past]'},
							{'person': '2ps', 'structure': '  [simp_past]'},
							{'person': '3ps', 'structure': '  [simp_past]'},
							{'person': '1pp', 'structure': '  [simp_past]'},
							{'person': '2pp', 'structure': '  [simp_past]'},
							{'person': '3pp', 'structure': '  [simp_past]'}]
					},

					{
						'Category': 'Past subjunctive Neg',
						'Conjugation': [
							{'person': '1ps', 'structure': ' not [infinitive]'},
							{'person': '2ps', 'structure': ' not [infinitive]'},
							{'person': '3ps', 'structure': ' not [infinitive]'},
							{'person': '1pp', 'structure': ' not [infinitive]'},
							{'person': '2pp', 'structure': ' not [infinitive]'},
							{'person': '3pp', 'structure': ' not [infinitive]'}]
					},

					{
						'Category': 'Past perfect subjunctive',
						'Conjugation': [
							{'person': '1ps', 'structure': '  had [past_part]'},
							{'person': '2ps', 'structure': '  had [past_part]'},
							{'person': '3ps', 'structure': '  had [past_part]'},
							{'person': '1pp', 'structure': '  had [past_part]'},
							{'person': '2pp', 'structure': '  had [past_part]'},
							{'person': '3pp', 'structure': '  had [past_part]'}]
					},

					{
						'Category': 'Past perfect subjunctive Neg',
						'Conjugation': [
							{'person': '1ps', 'structure': '  had not [past_part]'},
							{'person': '2ps', 'structure': '  had not [past_part]'},
							{'person': '3ps', 'structure': '  had not [past_part]'},
							{'person': '1pp', 'structure': '  had not [past_part]'},
							{'person': '2pp', 'structure': '  had not [past_part]'},
							{'person': '3pp', 'structure': '  had not [past_part]'}]
					}
				]
			}
			,

			{
				'Category': 'Imperative',

				'Data': [
					{
						'Category': 'Imperative',
						'Conjugation': [
							{'person': '2ps', 'structure': '  [infinitive]'},
							{'person': '1pp', 'structure': '  Let´s [infinitive]'},
							{'person': '2pp', 'structure': '  [infinitive]'}
						]
					},

					{
						'Category': 'Imperative Neg',
						'Conjugation': [
							{'person': '2ps', 'structure': ' do not [infinitive]'},
							{'person': '1pp', 'structure': '  Let´s not [infinitive]'},
							{'person': '2pp', 'structure': ' do not [infinitive]'}
						]
					}

				]
			}
			,

			{
				'Category': 'Participle',
				'Data': [
					{
						'Category': 'Present participle',
						'Conjugation': [
							{'person': '', 'structure': '[gerund]'}
						]
					},

					{
						'Category': 'Present participle Neg',
						'Conjugation': [
							{'person': '', 'structure': 'not [gerund]'}
						]
					},

					{
						'Category': 'Past participle',
						'Conjugation': [
							{'person': '', 'structure': '[past_part]'}
						]
					},

					{
						'Category': 'Past participle Neg',
						'Conjugation': [
							{'person': '', 'structure': 'not [past_part]'}
						]
					}
				]
			}
		]
	;


$(document).ready(function () {

	var verb = getParameterByName("verb");

	var datapost = {
		verb: verb
	};

	$.ajax({
		type: 'POST',
		url: "verbforms.php",
		data: datapost,
		dataType: "json",
		success: function (resultData) {
			console.log(resultData);

			for (var i = 0; i < en_conjugation.length; i++) {

				console.log(en_conjugation[i]);

				var newblock = '<div id="conjFull" name="conjugationsFull" class="content">\
								<div class="container">\
									<div class="conj-tense-wrapper">\
										<div class="conj-block container result-block"><h3>' + en_conjugation[i].Category + '</h3></div>';


				for (var j = 0; j < en_conjugation[i].Data.length; j++) {
					newblock += '<div class="conj-tense-block">\
								<h3 class="conj-tense-block-header">' + en_conjugation[i].Data[j].Category + '</h3>';

					var CArray = en_conjugation[i].Data[j].Conjugation;

					for (var k = 0; k < CArray.length; k++) {
						var person = "";
						if (CArray[k].person=="1ps") { person = "I"; }
						if (CArray[k].person=="2ps") { person = "You"; }
						if (CArray[k].person=="3ps") { person = "He/She/It"; }
						if (CArray[k].person=="1pp") { person = "We"; }
						if (CArray[k].person=="2pp") { person = "You"; }
						if (CArray[k].person=="3pp") { person = "They"; }

						var structure = CArray[k].structure;
						structure = structure.replace('[gerund]',resultData["gerund"]);

						structure = structure.replace('[inf_3rdperson]',resultData["inf_3rdperson"]);

						structure = structure.replace('[infinitive]',resultData["infinitive"]);
						structure = structure.replace('[inf_neg]',resultData["inf_neg"]);
						structure = structure.replace('[inf_plur_neg]',resultData["inf_plur_neg"]);

						structure = structure.replace('[past_part]',resultData["past_part"]);
						structure = structure.replace('[past_part_neg]',resultData["past_part_neg"]);

						structure = structure.replace('[simp_past]',resultData["simp_past"]);
						structure = structure.replace('[simp_past_sing]',resultData["simp_past_sing"]);
						structure = structure.replace('[simp_past_neg]',resultData["simp_past_neg"]);



						newblock += '<div class="conj-item">\
									<div class="conj-person">' + person + '</div>\
									<div class="conj-result">' + structure + '</div>\
								</div>';
					}
					newblock += '</div>';
				}
				newblock += '</div>';
				newblock += '</div>';
				newblock += '</div>';

				$("#maincontenet").append(newblock);


			}
		}
	});


});

