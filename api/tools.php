<?php
  function getDatabaseRelativePath() {
    return "../database/db_3S.db";
  }

  function dieBecause(int $code, string $message) {
    http_response_code($code);
    die($message);
  }

  function getIntParameter(string $name) {
    if(!preg_match('/^[0-9]+$/', $_REQUEST[$name])) {
      dieBecause(400, "$name is required and needs to be int.");
    }
    return (int) $_REQUEST[$name];
  }

  function getFloatParameter(string $name) {
    if(!preg_match('/^[0-9]*(\.)?[0-9]+$/', $_REQUEST[$name])) {
      dieBecause(400, "$name is required and needs to be float.");
    }
    return (float) $_REQUEST[$name];
  }

  function getStringParameter(string $name) {
    if(strlen($_REQUEST[$name]) <= 0) {
      dieBecause(400, "$name is required.");
    }
    return $_REQUEST[$name];
  }
?>
