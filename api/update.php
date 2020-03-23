<?php
  include 'tools.php';

  // Allow every kind of request, as curent scope is a local network.
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: PUT, POST');
  header('Access-Control-Allow-Headers: Host, Connection, Accept, Authorization, Content-Type, X-Requested-With, User-Agent, Referer, Methods');
  if($_SERVER["REQUEST_METHOD"]== "OPTIONS"){
    die("");
  }

  // get and check parameters
  $type = getStringParameter('type');    // update-action-type parameter

  if($type == "CONTENT") {
    $itemId = getIntParameter('itemId');
    $storageId = getIntParameter('storageId');
    $quantity = getFloatParameter('quantity');
  } else {
    $id = getIntParameter('id');
    $newName = getStringParameter('name');
  }

  // generate sql-query
  switch ($type) {
    case "ITEM":
      $sql =<<<EOF
        UPDATE Item SET name=$newName WHERE id=$id;
      EOF;
      break;
    case "STORAGE":
      $sql =<<<EOF
        UPDATE Storage SET name=$newName WHERE id=$id;
      EOF;
      break;
    case "CONTENT":
      $sql =<<<EOF
        UPDATE Content SET quantity=$quantity WHERE (id=$itemId AND storageId=$storageId);
      EOF;
      break;
    case "UNIT":
      $sql =<<<EOF
        UPDATE Unit SET name=$newName WHERE id=$id;
      EOF;
      break;
    default:
      dieBecause(400, 'Invalid request-type.');
  }

  // connect to database
  $db = new SQLite3('../databases/db_3S.db');
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
