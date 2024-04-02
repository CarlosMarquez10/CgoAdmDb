import { leerExcelGps } from "./readfile";

let excelConGps = [];

export function datosConGps(data) {
  let datosCoordenadas = leerExcelGps();

  excelConGps = data.map((cliente) => {
    datosCoordenadas.forEach((Gps) => {
      if (cliente.Cliente === Gps.CLIENTE_ID) {
        cliente.Latitud = Gps.GPS_LATITUD;
        cliente.Longitud = Gps.GPS_LONGITUD;
      }
    });

    return cliente;
  });
  return excelConGps;
}
