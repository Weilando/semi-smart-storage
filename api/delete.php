<?php
  include 'tools.php';

  // Allow every kind of request, as curent scope is a local network.
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: DELETE');
  header('Access-Control-Allow-Headers: Host, Connection, Accept, Authorization, Content-Type, X-Requested-With, User-Agent, Referer, Methods');
  if($_SERVER["REQUEST_METHOD"]== "OPTIONS"){
    die("");
  }

  // get and check parameters
  $type = getStringParameter('type');   // delete-action-type parameter

  if($type == "CONTENT") {
    $storageId = getIntParameter('storageId');
    $itemId = getIntParameter('itemId');
  } else {
    $id = getIntParameter('id');
  }

  // generate sql-query
  switch ($type) {
    case "ITEM":
      $sql =<<<EOF
        DELETE FROM Item WHERE id=$id;
      EOF;
      break;
    case "STORAGE":
      $sql =<<<EOF
        DELETE FROM Storage WHERE id=$id;
      EOF;
      break;
    case "CONTENT":
      $sql =<<<EOF
        DELETE FROM Content WHERE storageId=$storageId AND itemId=$itemId;
      EOF;
      break;
    case "UNIT":
      $sql =<<<EOF
        DELETE FROM Unit WHERE id=$id;
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
