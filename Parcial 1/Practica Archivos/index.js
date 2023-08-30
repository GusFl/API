const fsc = require('fs');
const path = require('path');

console.log(__dirname);
console.log(__filename);

const { jsPDF } = require("jspdf"); // will automatically load the node version

var xl = require('excel4node');
var wb = new xl.Workbook();
wb.write(path.join(__dirname,'ExcelFile.xlsx')); 

const doc = new jsPDF();
doc.text("Hello world!", 10, 10);
doc.save(path.join(__dirname,"a4.pdf")); // will save the file in the current working directory

fsc.writeFile(path.join(__dirname, 'archivoc.txt'),"archivo creado api callback",(err)=>{
    if(err){
        console.log(err)
    } else {
        console.log("archivo creado con el api fs callback")
    }
})