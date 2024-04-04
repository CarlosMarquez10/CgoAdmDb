import XLSX from "xlsx";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function leerExcelRegional() {
  // Ruta del archivo Excel
  const excelPath = path.join(__dirname, "../../data/2000.xlsx");

  // Leer el archivo
  const workbook = XLSX.readFile(excelPath);

  // Obtener el nombre de la primera hoja
  const sheetName = workbook.SheetNames[0];

  // Obtener los datos de la hoja
  const worksheet = workbook.Sheets[sheetName];

  // Convertir los datos de la hoja a JSON y guardarlos en dataExcel
  const dataRegional = XLSX.utils.sheet_to_json(worksheet);

  console.log("Carga de archivo terminada");
  return dataRegional;
}

export async function leerExcelGps() {
  // Ruta del archivo Excel
  const excelPath = path.join(__dirname, "../../data/Gps.xlsx");
  // Leer el archivo
  const workbook = XLSX.readFile(excelPath);

  // Obtener el nombre de la primera hoja
  const sheetName = workbook.SheetNames[0];

  // Obtener los datos de la hoja
  const worksheet = workbook.Sheets[sheetName];

  // Convertir los datos de la hoja a JSON y guardarlos en dataExcel
  const dataGps = XLSX.utils.sheet_to_json(worksheet);

  console.log("Carga de archivo terminada gps");
  return dataGps;
}

export async function leerExcelFactura() {
  // Ruta del archivo Excel
  const excelPath = path.join(
    __dirname,
    "../../data/DIGITAL.xlsx"
  );

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
