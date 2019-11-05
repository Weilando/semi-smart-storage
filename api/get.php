<?php
  $db = new SQLite3('../databases/db_3S.db');
  if(!$db) {
    echo $db->lastErrorMsg();
  }

  $content = $_GET['content'];
  $option = $_GET['option'];
  $type = $_GET['type'];

  switch ($type) {
    case "ALL_STORAGES":
      $sql =<<<EOF
        SELECT * from Storage;
      EOF;
      break;
    case "ALL_ITEMS":
      $sql =<<<EOF
        SELECT * from Item;
      EOF;
      break;
    case "ALL_ITEMS_IN_STORAGE":
      $sql =<<<EOF
        SELECT Item.name, Unit.name as unit, Item.quantity from Item, isIn, Storage, Unit WHERE Item.id==isIn.itemId AND isIn.storageId==Storage.id AND Item.unitId==Unit.id AND isIn.storageID==$option;
      EOF;
      break;
    case "ALL_UNITS":
    default:
      $sql =<<<EOF
        SELECT * from Unit;
      EOF;
  }

  $ret = $db->query($sql);

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

  $db->close();
?>
