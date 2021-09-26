import React from "react";

const response = await fetch('https://my-json-server.typicode.com/brenobernardes/my-json-server/albums')
const json = await response.json();

export default Data;