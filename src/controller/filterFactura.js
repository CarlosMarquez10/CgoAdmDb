import { leerExcelFactura } from "./readfile";

let excelConFacturacion = [];

export function tipoFacturacion(data) {
  let datosFacturacion = leerExcelFactura();
  excelConFacturacion = data.map((cliente) => {

    datosFacturacion.forEach((facturacion) => {
      if(cliente.Cliente === facturacion.NIU){
         cliente.Facturacion = facturacion.TIPO_RECIBO;
      }
    });

    return cliente;

  });
  return excelConFacturacion;
}
