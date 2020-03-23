<?php
  include 'tools.php';

  // Allow every kind of request, as curent scope is a local network.
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET');
  header('Access-Control-Allow-Headers: Host, Connection, Accept, Authorization, Content-Type, X-Requested-With, User-Agent, Referer, Methods');
  if($_SERVER["REQUEST_METHOD"]== "OPTIONS"){
    die("");
  }

  $content = $_GET['content'];  // return-format
  $type = $_GET['type'];        // delete-action-type parameter

  switch ($type) {
    case "ALL_ITEMS":
      $sql =<<<EOF
        SELECT * from Item;
      EOF;
      break;
    case "ALL_STORAGES":
      $sql =<<<EOF
        SELECT * from Storage;
      EOF;
      break;
    case "ALL_ITEMS_IN_STORAGE":
      $storageId = getIntParameter('storageId');
      
      $sql =<<<EOF
        SELECT Content.id, Item.name AS name, Unit.name AS unit, Content.quantity FROM Content JOIN Item JOIN Unit ON Item.id=Content.itemId AND Unit.id=Content.unitId WHERE Content.storageId=$storageId;
      EOF;
      break;
    case "ALL_UNITS":
      $sql =<<<EOF
        SELECT * from Unit;
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
  $ret = $db->query($sql);

  // pack fetched data
  if ($content == 'json') {
    $data = array();
    while($row = $ret->fetchArray(SQLITE3_ASSOC)) {
      array_push($data, $row);
    }

    header("Content-Type: application/json");
    $json = json_encode($data);
    if ($json === false) { // Avoid echo of empty string
      $json = json_encode(array("jsonError", json_last_error_msg()));
      if ($json === false) { // Should never happen
        $json = '{"jsonError": "unknown"}';
      }
      http_response_code(500); // 500 - Internal Server Error
    }
    echo $json;
  } else { // send HTML
    while($row = $ret->fetchArray(SQLITE3_ASSOC)) {
      foreach ($row as $key => $value) {
        echo "{$key}: {$value}, ";
      }
      echo "<br>\n";
    }
  }

  // close connection to database
  $db->close();
  http_response_code(200);
?>
