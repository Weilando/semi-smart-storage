<?php
  include 'tools.php';

  // Allow every kind of request, as curent scope is a local network.
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Host, Connection, Accept, Authorization, Content-Type, X-Requested-With, User-Agent, Referer, Methods');
  if($_SERVER["REQUEST_METHOD"]== "OPTIONS"){
    die("");
  }

  // get and check parameters
  $type = getStringParameter('type');   // add-action-type parameter

  if($type == "CONTENT") {
    $itemId = getIntParameter('itemId');
    $unitId = getIntParameter('unitId');
    $quantity = getFloatParameter('quantity');
    $storageId = getIntParameter('storageId');
  } else {
    $newName = getStringParameter('name');
  }

  // generate sql-query
  switch ($type) {
    case "CONTENT":
      $sql =<<<EOF
        PRAGMA foreign_keys=ON;
        INSERT INTO Content(itemId, unitId, quantity, storageId) VALUES ($itemId, $unitId, $quantity, $storageId);
      EOF;
      break;
    case "ITEM":
      $sql =<<<EOF
        INSERT INTO Item (name) VALUES ("$newName");
      EOF;
      break;
    case "STORAGE":
      $sql =<<<EOF
        INSERT INTO Storage (name) VALUES ("$newName");
      EOF;
      break;
    case "UNIT":
      $sql =<<<EOF
        INSERT INTO Unit (name) VALUES ("$newName");
      EOF;
      break;
    default:
      dieBecause(400, 'Invalid request-type.');
  }

  // connect to database
  $db = new SQLite3(getDatabaseRelativePath());
  if(!$db) {
    dieBecause(500, $db->lastErrorMsg());
  }

  // execute query
  $ret = $db->exec($sql);
  if(!$ret) {
    dieBecause(500, $db->lastErrorMsg());
  }

  $db->close();
  http_response_code(200);
?>
