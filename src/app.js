//  Cargar los datos
import {
  leerExcelRegional,
  leerExcelGps,
  leerExcelFactura,
} from "./controller/readfile.js";
import { CreateObject } from "./controller/crearObjeto.js";
import { exportarArrayAExcel } from "./controller/crearExcel.js";
import { ordenarArray } from "./controller/ordenar.js";
import { PosteriorAnterior } from "./controller/ant_post.js";
import { datosConGps } from "./controller/filterGps.js";
import { separarString } from "./controller/medidor.js";
import { CampVacioFacturacion } from "./controller/validarcampos.js";
import {tipoFacturacion} from './controller/filterFactura.js'

// crear el excel

export async function main() {
  const creardata = await leerExcelRegional();
  let datosCoordenadas = await leerExcelGps();
  const datosordenados = await CreateObject(creardata);
  const ordenados = await ordenarArray(datosordenados, "Ciclo", "RutaLectura");
  const antPost = await PosteriorAnterior(ordenados);
  const dataconMedidor = await separarString(antPost);
  const tipofacturacion = await tipoFacturacion(dataconMedidor)
  const validarcampos = await CampVacioFacturacion(tipofacturacion);
  const dataGps = await datosConGps(validarcampos, datosCoordenadas); // VALIDAR POR QUE NO ESTA GUARDANDO EL ARRAY

  await exportarArrayAExcel(dataGps, "datosPreparados.xlsx");
}

main();

// crear el objeto con las propiedades necesarias

// ordenar el objeto

// agregar medidor

// agregar el anterior y posterior
// ==> corregir los clientes para cuando es posterior y anterior al finalizar o iniciar con un nuevo ciclo

// agregar el dato de las coordenadas

//  agregar el tipo de facturacion

// validar campos vacios

// validar typo de datos de campos

// Crear excel con los datos preparados  ---  ok
