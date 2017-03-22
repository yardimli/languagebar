<?php
/**
 * Created by PhpStorm.
 * User: ekim
 * Date: 12/3/17
 * Time: 9:09 PM
 */

/**
 * Created by ekim on 12/3/17.
 */


set_time_limit(3000);

require '../vendor/autoload.php';

ini_set('error_reporting', E_ALL & ~E_DEPRECATED & ~E_NOTICE & ~E_WARNING);

$mongodb = (new MongoDB\Client)->selectDatabase('languagebar');

require_once('voicerss_tts.php');

$tts = new VoiceRSS;
?>

<!DOCTYPE html>
<html lang="en">
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>Language Bar - Download MP3</title>

	<!--SEO Meta Tags-->
	<meta name="description" content="M-Store - Modern E-Commerce Template"/>
	<meta name="keywords"
	      content="shop, e-commerce, modern, minimalist style, responsive, online store, business, mobile, blog, bootstrap, html5, css3, jquery, js, gallery, slider, touch, creative, clean"/>
	<meta name="author" content="Rokaux"/>

	<!--Mobile Specific Meta Tag-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

	<meta name="referrer" content="never">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">


	<!-- Bootstrap -->
	<link href="../css/bootstrap.css" rel="stylesheet" media="screen">
	<link href="../css/custom.css" rel="stylesheet" media="screen">


	<!-- JavaScript (jQuery) libraries, plugins and custom scripts -->
	<script src="../js/jquery-2.1.4.min.js"></script>
	<script src="../js/bootstrap.min.js"></script>

	<script src="call-pos-server.js"></script>


</head>
<body>


<br>

<div class="page">

	<div class="column-wrapper">
		<div class="content-column" id="maincontenet">

			<div class="content">
				<div class="quick-results container">
					<br><br>
			<?php

			$words = $mongodb->english5000;

			$FindArray = array(); // array('OrgID' => (int)$_SESSION['LoginOrgID']);
			$order = array('rank' => 1); //order by OrgID ASC
			$cursor = $words->find($FindArray, ['sort' => $order, 'limit' => 100]);

			foreach ($cursor as $document) {

//	$en_word = iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $document['word']);
//	$fr_word = iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $document['Fr'][0]['translatedText']);

				$en_word = transliterator_transliterate('Any-Latin; Latin-ASCII; [\u0080-\u7fff] remove', $document['word']);
				$fr_word = transliterator_transliterate('Any-Latin; Latin-ASCII; [\u0080-\u7fff] remove', $document['Fr'][0]['translatedText']);
				$tw_word = transliterator_transliterate('Any-Latin; Latin-ASCII; [\u0080-\u7fff] remove', $document['Tw'][0]['translatedText']);
				$es_word = transliterator_transliterate('Any-Latin; Latin-ASCII; [\u0080-\u7fff] remove', $document['Es'][0]['translatedText']);
				$tr_word = transliterator_transliterate('Any-Latin; Latin-ASCII; [\u0080-\u7fff] remove', $document['Tr'][0]['translatedText']);
				$de_word = transliterator_transliterate('Any-Latin; Latin-ASCII; [\u0080-\u7fff] remove', $document['De'][0]['translatedText']);
				$no_word = transliterator_transliterate('Any-Latin; Latin-ASCII; [\u0080-\u7fff] remove', $document['No'][0]['translatedText']);

				$en_word = str_replace(" ", "_", $en_word);
				$fr_word = str_replace(" ", "_", $fr_word);
				$tw_word = str_replace(" ", "_", $tw_word);
				$es_word = str_replace(" ", "_", $es_word);
				$tr_word = str_replace(" ", "_", $tr_word);
				$de_word = str_replace(" ", "_", $de_word);
				$no_word = str_replace(" ", "_", $no_word);

				if (!file_exists('en/' . $en_word . '.mp3')) {

					echo "downloading english word... ";
					echo $document['word'] . "<br>";

					$voice = $tts->speech([
						'key' => '75f72bea738b44cbadd8d040d663504d',
						'hl' => 'en-us',
						'src' => $document['word'],
						'r' => '0',
						'c' => 'mp3',
						'f' => '44khz_16bit_mono',
						'ssml' => 'false',
						'b64' => 'false'
					]);


					$fp = fopen('en/' . $en_word . '.mp3', 'w');
					fwrite($fp, $voice['response']);
					fclose($fp);
				}

				if (!file_exists('fr/' . $en_word . '-' . $fr_word . '.mp3')) {

					echo "downloading french word...";
					echo $document['Fr'][0]['translatedText'] . "<br>";

					$voice = $tts->speech([
						'key' => '75f72bea738b44cbadd8d040d663504d',
						'hl' => 'fr-fr',
						'src' => $document['Fr'][0]['translatedText'],
						'r' => '0',
						'c' => 'mp3',
						'f' => '44khz_16bit_mono',
						'ssml' => 'false',
						'b64' => 'false'
					]);

					$fp = fopen('fr/' . $en_word . '-' . $fr_word . '.mp3', 'w');
					fwrite($fp, $voice['response']);
					fclose($fp);
				}

				if (!file_exists('tw/' . $en_word . '-' . $tw_word . '.mp3')) {

					echo "downloading chinese word...";
					echo $document['Tw'][0]['translatedText'] . "<br>";

					$voice = $tts->speech([
						'key' => '75f72bea738b44cbadd8d040d663504d',
						'hl' => 'zh-tw',
						'src' => $document['Tw'][0]['translatedText'],
						'r' => '0',
						'c' => 'mp3',
						'f' => '44khz_16bit_mono',
						'ssml' => 'false',
						'b64' => 'false'
					]);

					$fp = fopen('tw/' . $en_word . '-' . $tw_word . '.mp3', 'w');
					fwrite($fp, $voice['response']);
					fclose($fp);
				}

				if (!file_exists('es/' . $en_word . '-' . $es_word . '.mp3')) {

					echo "downloading Spanish word...";
					echo $document['Es'][0]['translatedText'] . "<br>";

					$voice = $tts->speech([
						'key' => '75f72bea738b44cbadd8d040d663504d',
						'hl' => 'es-es',
						'src' => $document['Es'][0]['translatedText'],
						'r' => '0',
						'c' => 'mp3',
						'f' => '44khz_16bit_mono',
						'ssml' => 'false',
						'b64' => 'false'
					]);

					$fp = fopen('es/' . $en_word . '-' . $es_word . '.mp3', 'w');
					fwrite($fp, $voice['response']);
					fclose($fp);
				}

				/*
		  if (!file_exists('tr/' . $en_word .'-'. $tr_word . '.mp3')) {

			  echo "downloading turkish word...";
			  echo $document['Tr'][0]['translatedText'] . "<br>";

			  $voice = $tts->speech([
				  'key' => '75f72bea738b44cbadd8d040d663504d',
				  'hl' => 'tr-tr',
				  'src' => $document['Tr'][0]['translatedText'],
				  'r' => '0',
				  'c' => 'mp3',
				  'f' => '44khz_16bit_mono',
				  'ssml' => 'false',
				  'b64' => 'false'
			  ]);

			  $fp = fopen('tr/'  . $en_word .'-'. $tr_word . '.mp3', 'w');
			  fwrite($fp, $voice['response']);
			  fclose($fp);
		  }
		  */

				if (!file_exists('de/' . $en_word . '-' . $de_word . '.mp3')) {

					echo "downloading German word...";
					echo $document['De'][0]['translatedText'] . "<br>";

					$voice = $tts->speech([
						'key' => '75f72bea738b44cbadd8d040d663504d',
						'hl' => 'de-de',
						'src' => $document['De'][0]['translatedText'],
						'r' => '0',
						'c' => 'mp3',
						'f' => '44khz_16bit_mono',
						'ssml' => 'false',
						'b64' => 'false'
					]);

					$fp = fopen('de/' . $en_word . '-' . $de_word . '.mp3', 'w');
					fwrite($fp, $voice['response']);
					fclose($fp);
				}

				if (!file_exists('no/' . $en_word . '-' . $no_word . '.mp3')) {

					echo "downloading Norwegian word...";
					echo $document['No'][0]['translatedText'] . "<br>";

					$voice = $tts->speech([
						'key' => '75f72bea738b44cbadd8d040d663504d',
						'hl' => 'nb-no',
						'src' => $document['No'][0]['translatedText'],
						'r' => '0',
						'c' => 'mp3',
						'f' => '44khz_16bit_mono',
						'ssml' => 'false',
						'b64' => 'false'
					]);

					$fp = fopen('no/' . $en_word . '-' . $no_word . '.mp3', 'w');
					fwrite($fp, $voice['response']);
					fclose($fp);
				}


			}
			?>

				</div>
			</div>


		</div>
	</div>
</div>


</body>
</html>
