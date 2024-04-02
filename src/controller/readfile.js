const XLSX = require('xlsx');
const path = require('path');

export function leerExcelRegional() {
  // Ruta del archivo Excel
  const excelPath = path.join(__dirname, '../data/miarchivo.xlsx');

  // Leer el archivo
  const workbook = XLSX.readFile(excelPath);

  // Obtener el nombre de la primera hoja
  const sheetName = workbook.SheetNames[0];

  // Obtener los datos de la hoja
  const worksheet = workbook.Sheets[sheetName];

  // Convertir los datos de la hoja a JSON y guardarlos en dataExcel
  const dataRegional = XLSX.utils.sheet_to_json(worksheet);

  return dataRegional;
}


export function leerExcelGps() {
    // Ruta del archivo Excel
    const excelPath = path.join(__dirname, '../data/miarchivo.xlsx');
  
    // Leer el archivo
    const workbook = XLSX.readFile(excelPath);
  
    // Obtener el nombre de la primera hoja
    const sheetName = workbook.SheetNames[0];
  
    // Obtener los datos de la hoja
    const worksheet = workbook.Sheets[sheetName];
  
    // Convertir los datos de la hoja a JSON y guardarlos en dataExcel
    const dataGps = XLSX.utils.sheet_to_json(worksheet);
  
    return dataGps;
}


export function leerExcelFactura() {
    // Ruta del archivo Excel
    const excelPath = path.join(__dirname, '../data/miarchivo.xlsx');
  
    // Leer el archivo
    const workbook = XLSX.readFile(excelPath);
  
    // Obtener el nombre de la primera hoja
    const sheetName = workbook.SheetNames[0];
  
    // Obtener los datos de la hoja
    const worksheet = workbook.Sheets[sheetName];
  
    // Convertir los datos de la hoja a JSON y guardarlos en dataExcel
    const dataFactura = XLSX.utils.sheet_to_json(worksheet);
  
    return dataFactura;
}
