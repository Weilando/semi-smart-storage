<html>
<head>
  <title>API help</title>
  <style>
    table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
    }
  </style>
</head>
<body>
  <h1>semi-smart-storage API</h1>
  <p>This API can be accessed via <a href="get.php">http://raspberrypi/get.php</a>.</p>

  <p>Each request starts with the above URI.
  Remember that the list of parameters starts with <i>?</i> and several parameters are separated by <i>&</i>.<br>
  A request's type must be specified by <i>type=[name]</i>.<br>
  Some requests may need an option, given by <i>option=[value]</i>.</p>

  <h2>Request types</h2>
  <table style="width: 90%">
    <th scope="col">Query</th>
    <th scope="col">Option</th>
    <th scope="col">Description</th>

    <tr>
      <td><i>ALL_STORAGES</i></td>
      <td>none</td>
      <td>Returns id and name of all existing storages.</td>
    </tr>
    <tr>
      <td><i>ALL_ITEMS</i></td>
      <td>none</td>
      <td>Returns id, name, unit and quantity of all existing items.</td>
    </tr>
    <tr>
      <td><i>ALL_ITEMS_IN_STORAGE</i></td>
      <td>storageID</td>
      <td>Returns name, unit and quantity of all existing items inside a storage specified by <i>storageID</i>.</td>
    </tr>
    <tr>
      <td><i>ALL_UNITS</i></td>
      <td>none</td>
      <td>Returns id and name of all existing units.</td>
    </tr>
  </table>

  <h2>Response format</h2>
  <p>The API delivers plain HTML by default. It is possible to receive JSON via parameter <i>content=json</i>.</p>

  <p>Requests can be tested easily via curl (command line client) and jq (jason formatter), e.g.: <i>curl 'http://raspberrypi/api/get.php/?content=json&type=ALL_STORAGES' | jq</i> fetches all known storages as JSON-list and renders it nicely.</p>
</body>
</html>
