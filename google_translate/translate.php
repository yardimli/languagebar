<?php
set_time_limit(60000);

require 'vendor/autoload.php';

ini_set('error_reporting', E_ALL & ~E_DEPRECATED & ~E_NOTICE & ~E_WARNING);

$mongodb = (new MongoDB\Client)->selectDatabase('languagebar');

ob_implicit_flush();
ob_flush();

function translate($text)
{
	$apiKey = 'AIzaSyAHkDhPzB8KPzbw7N8Yed88U-ZnMsSGfj4';
	//$text = 'Hello world!';
	$url = 'https://www.googleapis.com/language/translate/v2?key=' . $apiKey . '&q=' . rawurlencode($text) . '&source=en&target=no'; //zh-TW';

	$handle = curl_init($url);
	curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($handle);                 
	$responseDecoded = json_decode($response, true);
	curl_close($handle);

//	var_dump($response);
	return $response;

	//echo 'Source: ' . $text . '<br>';
	//echo 'Translation: ' . $responseDecoded['data']['translations'][0]['translatedText'];
//	return $responseDecoded['data']['translations'][0]['translatedText'];
}

$TranslateArray = array();

function FindTranslation($Text) {
	global $TranslateArray;
	return "hello";

	$key = array_search($Text, array_column($TranslateArray, 'EnglishText'));
	if ($key===false) {
		$object = [];
		$object['EnglishText'] = $Text;
		$object['ChineseText'] = translate($Text);
		$TranslateArray[] = $object;

		return $object['ChineseText'];
//		$FoodDocument['FoodGroupNameC'] = $object['ChineseText'];
//		echo "new translation: " . $object['ChineseText'];
	} else
	{
		return $TranslateArray[$key]['ChineseText'];

//		$FoodDocument['FoodGroupNameC'] = $TranslateArray[$key]['ChineseText'];
//		echo "old translation: " . $TranslateArray[$key]['ChineseText'];
	}

}


$words = $mongodb->english5000;

$FindArray = array(); // array('OrgID' => (int)$_SESSION['LoginOrgID']);
$order = array('rank' => 1); //order by OrgID ASC
$cursor = $words->find($FindArray, ['sort' => $order, 'limit' => 15000]);

foreach ($cursor as $document) {

	if ($document["No"]==null)
	{
		if ($document['PoS']=="v") {
			$engword ="to ".$document['word'];

			$verbTrans = json_decode(translate("to ".$document['word']));
			$Trans =  json_decode(translate($document['word']));

			$words->updateOne(array('rank'=>(integer)$document['rank']),array('$set' => array('No'=>$verbTrans->data->translations,'NoVerbless'=>$Trans->data->translations )));

		} else
		{
			$engword =$document['word'];

			$Trans = json_decode(translate($document['word']));

			$words->updateOne(array('rank'=>(integer)$document['rank']),array('$set' => array('No'=>$Trans->data->translations)));
		}
		echo $engword ."   " . $document['PoS']. "<br>";
	}
}
//translate("fish");
//translate("to fish");


//translate
/*
$cursor = $allingredients->find($searchfor)->sort(array('displayValue'=>1))->limit(10000);
$i=0;
while($cursor->hasNext()){
  $ingredient = $cursor->getNext();
//	var_dump($ingredient);
	$i++;
	echo $i." ";
	
	if (!array_key_exists('CShorterValue',$ingredient) ) 
	{
		$translation = FindTranslation($ingredient["shorterValue"]);

		$allingredients->update( array("_id"=>$ingredient['_id']),array('$set' => array("CShorterValue" => $translation) )   );
		
	}
	else
	{
		echo ". ";
	}
}

exit(1);
*/

// --- unique ingredinets
/*
$searchfor = array("showrecipe" => 1 );

$cursor = $allrecipes->find($searchfor);//->limit(100);
$i=0;
while($cursor->hasNext()){
	$recipe = $cursor->getNext();
	$i++;
	echo $i." ";

	foreach ($recipe['ingredients'] as $ingredient) {
		$searchres = $allingredients->findOne(array('displayValue' => $ingredient['displayValue']));
		if ( $searchres === null ) {
			echo $ingredient['displayValue']." ";

			$ingredient['RecipeCount'] = 1;
			$ingredient['Recipes'] = array();

			array_push( $ingredient['Recipes'] , $recipe['recipeID']);
			$allingredients->insert($ingredient );

		} else
		{ echo ". ";
			$RecipeCount = $searchres['RecipeCount'];
			$RecipeCount++;
			$allingredients->update( array("_id"=>$searchres['_id']),array('$set' => array("RecipeCount" => $RecipeCount) ) );
			$allingredients->update( array("_id"=>$searchres['_id']),array('$addToSet' => array("Recipes" => $recipe['recipeID']) ) );
		}
	}

}
exit(1);
*/



?>