/**
 * Created by ekim on 13/3/17.
 */



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
						'Category': 'Present continuous',
						'Conjugation': [
							{'person': '1ps', 'structure': '  am [gerund]'},
							{'person': '2ps', 'structure': '  are [gerund]'},
							{'person': '3ps', 'structure': '  is [gerund]'},
							{'person': '1pp', 'structure': '  are [gerund]'},
							{'person': '2pp', 'structure': '  are [gerund]'},
							{'person': '3pp', 'structure': '  are [gerund]'}
						]
					}
					,

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
					}
					,

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
					}
					,

					{
						'Category': 'Present perfect',
						'Conjugation': [
							{'person': '1ps', 'structure': '  have [past_part]'},
							{'person': '2ps', 'structure': '  have [past_part]'},
							{'person': '3ps', 'structure': '  has [past_part]'},
							{'person': '1pp', 'structure': '  have [past_part]'},
							{'person': '2pp', 'structure': '  have [past_part]'},
							{'person': '3pp', 'structure': '  have [past_part]'}]
					}
					,

					{
						'Category': 'Present perfect continuous',
						'Conjugation': [
							{'person': '1ps', 'structure': '  have been [gerund]'},
							{'person': '2ps', 'structure': '  have been [gerund]'},
							{'person': '3ps', 'structure': '  has been [gerund]'},
							{'person': '1pp', 'structure': '  have been [gerund]'},
							{'person': '2pp', 'structure': '  have been [gerund]'},
							{'person': '3pp', 'structure': '  have been [gerund]'}]
					}
					,

					{
						'Category': 'Past perfect',
						'Conjugation': [
							{'person': '1ps', 'structure': '  had [past_part]'},
							{'person': '2ps', 'structure': '  had [past_part]'},
							{'person': '3ps', 'structure': '  had [past_part]'},
							{'person': '1pp', 'structure': '  had [past_part]'},
							{'person': '2pp', 'structure': '  had [past_part]'},
							{'person': '3pp', 'structure': '  had [past_part]'}]
					}
					,

					{
						'Category': 'Past perfect continuous',
						'Conjugation': [
							{'person': '1ps', 'structure': '  had been [gerund]'},
							{'person': '2ps', 'structure': '  had been [gerund]'},
							{'person': '3ps', 'structure': '  had been [gerund]'},
							{'person': '1pp', 'structure': '  had been [gerund]'},
							{'person': '2pp', 'structure': '  had been [gerund]'},
							{'person': '3pp', 'structure': '  had been [gerund]'}]
					}
					,

					{
						'Category': 'Future',
						'Conjugation': [
							{'person': '1ps', 'structure': '  will [infinitive]'},
							{'person': '2ps', 'structure': '  will [infinitive]'},
							{'person': '3ps', 'structure': '  will [infinitive]'},
							{'person': '1pp', 'structure': '  will [infinitive]'},
							{'person': '2pp', 'structure': '  will [infinitive]'},
							{'person': '3pp', 'structure': '  will [infinitive]'}]
					}
					,

					{
						'Category': 'Future continuous',
						'Conjugation': [
							{'person': '1ps', 'structure': '  will be [gerund]'},
							{'person': '2ps', 'structure': '  will be [gerund]'},
							{'person': '3ps', 'structure': '  will be [gerund]'},
							{'person': '1pp', 'structure': '  will be [gerund]'},
							{'person': '2pp', 'structure': '  will be [gerund]'},
							{'person': '3pp', 'structure': '  will be [gerund]'}]
					}
					,

					{
						'Category': 'Future perfect',
						'Conjugation': [
							{'person': '1ps', 'structure': '  will have [past_part]'},
							{'person': '2ps', 'structure': '  will have [past_part]'},
							{'person': '3ps', 'structure': '  will have [past_part]'},
							{'person': '1pp', 'structure': '  will have [past_part]'},
							{'person': '2pp', 'structure': '  will have [past_part]'},
							{'person': '3pp', 'structure': '  will have [past_part]'}]
					}
					,

					{
						'Category': 'Future perfect continuous',
						'Conjugation': [
							{'person': '1ps', 'structure': '  will have been [gerund]'},
							{'person': '2ps', 'structure': '  will have been [gerund]'},
							{'person': '3ps', 'structure': '  will have been [gerund]'},
							{'person': '1pp', 'structure': '  will have been [gerund]'},
							{'person': '2pp', 'structure': '  will have been [gerund]'},
							{'person': '3pp', 'structure': '  will have been [gerund]'}]
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
					}
					,

					{
						'Category': 'Conditional present progressive',
						'Conjugation': [
							{'person': '1ps', 'structure': '  would be [gerund]'},
							{'person': '2ps', 'structure': '  would be [gerund]'},
							{'person': '3ps', 'structure': '  would be [gerund]'},
							{'person': '1pp', 'structure': '  would be [gerund]'},
							{'person': '2pp', 'structure': '  would be [gerund]'},
							{'person': '3pp', 'structure': '  would be [gerund]'}]
					}
					,

					{
						'Category': 'Conditional perfect',
						'Conjugation': [
							{'person': '1ps', 'structure': '  would have [past_part]'},
							{'person': '2ps', 'structure': '  would have [past_part]'},
							{'person': '3ps', 'structure': '  would have [past_part]'},
							{'person': '1pp', 'structure': '  would have [past_part]'},
							{'person': '2pp', 'structure': '  would have [past_part]'},
							{'person': '3pp', 'structure': '  would have [past_part]'}]
					}
					,

					{
						'Category': 'Conditional perfect progressive',
						'Conjugation': [
							{'person': '1ps', 'structure': '  would have been [gerund]'},
							{'person': '2ps', 'structure': '  would have been [gerund]'},
							{'person': '3ps', 'structure': '  would have been [gerund]'},
							{'person': '1pp', 'structure': '  would have been [gerund]'},
							{'person': '2pp', 'structure': '  would have been [gerund]'},
							{'person': '3pp', 'structure': '  would have been [gerund]'}]
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
				}
					,

					{
						'Category': 'Past subjunctive',
						'Conjugation': [
							{'person': '1ps', 'structure': '  [simp_past]'},
							{'person': '2ps', 'structure': '  [simp_past]'},
							{'person': '3ps', 'structure': '  [simp_past]'},
							{'person': '1pp', 'structure': '  [simp_past]'},
							{'person': '2pp', 'structure': '  [simp_past]'},
							{'person': '3pp', 'structure': '  [simp_past]'}]
					}
					,

					{
						'Category': 'Past perfect subjunctive',
						'Conjugation': [
							{'person': '1ps', 'structure': '  had [past_part]'},
							{'person': '2ps', 'structure': '  had [past_part]'},
							{'person': '3ps', 'structure': '  had [past_part]'},
							{'person': '1pp', 'structure': '  had [past_part]'},
							{'person': '2pp', 'structure': '  had [past_part]'},
							{'person': '3pp', 'structure': '  had [past_part]'}]
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
					}
					,

					{
						'Category': 'Past participle',
						'Conjugation': [
							{'person': '', 'structure': '[past_part]'}
						]
					}
				]
			}
		]
	;


$(document).ready(function () {


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

				newblock += '<div class="conj-item">\
								<div class="conj-person">' + CArray[k].person + '</div>\
								<div class="conj-result">' + CArray[k].structure + '</div>\
							</div>';
			}
			newblock += '</div>';
		}
		newblock += '</div>';
		newblock += '</div>';
		newblock += '</div>';

		$("#maincontenet").append(newblock);


	}

	var verbTarget = "find";


});

