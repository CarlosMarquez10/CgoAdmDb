let dataExcelArray = [];

export function CreateObject(data) {
  dataExcelArray = data.map(cliente => ({
    Cliente: cliente.ClienteId,
    Nombre: cliente.Nombre,
    EstadoCliente: cliente.DEstadoCliente,
    Direccion: cliente.Direccion,
    RutaLectura: cliente.RutaLectura,
    Ciclo: cliente.Ciclo,
    Ddata: cliente.FichaCatastral,
    Tranformador: cliente.CodigoUbicTransformador,
    Municipio: cliente.DMunicipio,
    DBarrio: cliente.DBarrio,
    Area: cliente.DCodigoArea,
    Telefono: cliente.Telefono,
    TelefonoCelular: cliente.TelefonoCelular,
    TelefonoContacto: cliente.TelefonoContacto,
    DMedidor: cliente.Medidor,
    Medidor: '',
    Facturacion: '',
    Latitud: '',
    Longitud: '',
    Posterior: '',
    Anterior: '',
  }));

  return dataExcelArray;
}
