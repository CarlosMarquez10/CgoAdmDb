import { leerExcelFactura } from "./readfile.js";

let excelConFacturacion = [];

export async function tipoFacturacion(data) {
  let datosFacturacion = await leerExcelFactura();
  excelConFacturacion = data.map((cliente) => {
    datosFacturacion.forEach((facturacion) => {
      if (cliente.Cliente === facturacion.NIU) {
        cliente.Facturacion = facturacion.TIPO_RECIBO;
      }
    });

    return cliente;
  });
  return excelConFacturacion;
}
