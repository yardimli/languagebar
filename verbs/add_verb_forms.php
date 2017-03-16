<?php
/**
 * Created by PhpStorm.
 * User: ekim
 * Date: 16/3/17
 * Time: 4:53 PM
 */

set_time_limit(60000);

require '../vendor/autoload.php';

ini_set('error_reporting', E_ALL & ~E_DEPRECATED & ~E_NOTICE & ~E_WARNING);

$mongodb = (new MongoDB\Client)->selectDatabase('languagebar');

$verbslist = [];
$file = fopen("verbslist.txt","r");
while(! feof($file))
{
	$verbslist[] = fgetcsv($file);
}
fclose($file);


$words = $mongodb->english5000;

$FindArray = array(); // array('OrgID' => (int)$_SESSION['LoginOrgID']);
$order = array('rank' => 1); //order by OrgID ASC
$cursor = $words->find($FindArray, ['sort' => $order, 'limit' => 15000]);

foreach ($cursor as $document) {

	if ($document['PoS']=="v") {

		echo $document['word']."<br>";
		$arrlen = count($verbslist);
		$i = 0;
		$found=false;
		while ( ($i < $arrlen) && (!$found) )
		{
			if ($document['word']==$verbslist[$i][0])
			{
				$wordtype = array(
					'infinitive' => $verbslist[$i][0],
					'inf_3rdperson' => $verbslist[$i][3],
					'gerund' => $verbslist[$i][5],
					'simp_past_sing' => $verbslist[$i][8],
					'simp_past' => $verbslist[$i][10],
					'past_part' => $verbslist[$i][11],
					'inf_neg' => $verbslist[$i][12],
					'inf_plur_neg' => $verbslist[$i][15],
					'simp_past_neg' => $verbslist[$i][22],
					'past_part_neg' => $verbslist[$i][23],
				);
				/*
				var_dump($verbslist[$i]);
				var_dump($wordtype);
				*/

				$words->updateOne(array('rank'=>(integer)$document['rank']),array('$set' => array('VerbList'=>$wordtype )));

				$found=true;




			} else
			{
				$i++;
			}
		}
	}
}
