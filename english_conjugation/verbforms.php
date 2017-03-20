<?php
/**
 * Created by PhpStorm.
 * User: ekim
 * Date: 20/3/17
 * Time: 5:59 PM
 */

set_time_limit(60000);

require '../vendor/autoload.php';

ini_set('error_reporting', E_ALL & ~E_DEPRECATED & ~E_NOTICE & ~E_WARNING);

$mongodb = (new MongoDB\Client)->selectDatabase('languagebar');

$words = $mongodb->english5000;

$cursor = $words->findOne(array('word' => $_POST['verb']));

echo json_encode($cursor['VerbList']);
