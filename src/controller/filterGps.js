
export async function datosConGps(data, datogps) {
  let excelConGps = data.map((cliente) => {
    datogps.forEach((Gps) => {
      if (cliente.Cliente === Gps.CLIENTE_ID) {
        cliente.Latitud = Gps.GPS_LATITUD;
        cliente.Longitud = Gps.GPS_LONGITUD;
      }
    });
    return cliente;
  });
  return excelConGps;
}
