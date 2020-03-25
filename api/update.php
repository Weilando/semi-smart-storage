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
    $contentId = getIntParameter('contentId');
    $itemId = getIntParameter('itemId');
    $quantity = getFloatParameter('quantity');
    $storageId = getIntParameter('storageId');
    $unitId = getIntParameter('unitId');
  } else {
    $id = getIntParameter('id');

    if($type == "QUANTITY_FOR_CONTENT") {
      $quantity = getFloatParameter('quantity');
    } elseif(($type == "NAME_FOR_ITEM") || ($type == "NAME_FOR_STORAGE") || ($type == "NAME_FOR_UNIT")) {
      $newName = getStringParameter('name');
    }
  }

  // generate sql-query
  switch ($type) {
    case "CONTENT":
      $sql =<<<EOF
        PRAGMA foreign_keys=ON;
        UPDATE Content SET itemId=$itemId, quantity=$quantity, storageId=$storageId, unitId=$unitId WHERE id=$contentId;
      EOF;
      break;
    case "DECREMENT_QUANTITY_FOR_CONTENT":
      $sql =<<<EOF
        UPDATE Content SET quantity=quantity-1 WHERE id=$id;
      EOF;
      break;
    case "INCREMENT_QUANTITY_FOR_CONTENT":
      $sql =<<<EOF
        UPDATE Content SET quantity=quantity+1 WHERE id=$id;
      EOF;
      break;
    case "NAME_FOR_ITEM":
      $sql =<<<EOF
        UPDATE Item SET name="$newName" WHERE id=$id;
      EOF;
      break;
    case "NAME_FOR_STORAGE":
      $sql =<<<EOF
        UPDATE Storage SET name="$newName" WHERE id=$id;
      EOF;
      break;
    case "NAME_FOR_UNIT":
      $sql =<<<EOF
        UPDATE Unit SET name="$newName" WHERE id=$id;
      EOF;
      break;
    case "QUANTITY_FOR_CONTENT":
      $sql =<<<EOF
        UPDATE Content SET quantity=$quantity WHERE id=$id;
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
