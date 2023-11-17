const yaml = require('yaml');
const fs = require('fs');
const path = require('path');

const archivoObj = fs.readFileSync(path.join(__dirname,'/archivosyaml/objeto.yml'),'utf8')
const valorObj = yaml.parse(archivoObj);
console.table(valorObj);

const archivoArr = fs.readFileSync(path.join(__dirname,'/archivosyaml/arreglo.yml'),)
const valorArr = yaml.parse(archivoArr);
console.table(valorArr);

const archivoObar = fs.readFileSync(path.join(__dirname,'/archivosyaml/objetoArre'))
