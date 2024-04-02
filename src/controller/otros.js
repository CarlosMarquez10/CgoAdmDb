// Supongamos que tus datos están en un array de objetos como este:
let datos = [
    {
      Cliente: cliente.Cliente,
      Nombre: cliente.Nombre,
      EstadoCliente: cliente.EstadoCliente,
      Direccion: cliente.Direccion,
      RutaLectura: cliente.RutaLectura,
      Ciclo: cliente.Ciclo,
      Ddata: cliente.Ddata,
      Tranformador: cliente.Tranformador,
      Municipio: cliente.Municipio,
      DBarrio: cliente.DBarrio,
      Area: cliente.Area,
      Telefono: cliente.Telefono,
      TelefonoCelular: cliente.TelefonoCelular,
      TelefonoContacto: cliente.TelefonoContacto,
      DMedidor: cliente.DMedidor,
      Medidor: cliente.Medidor,
      Facturacion: cliente.Facturacion,
      Latitud: cliente.Latitud,
      Longitud: cliente.Longitud,
      Posterior: cliente.Posterior,
      Anterior: cliente.Anterior,
    },
    // ... más registros
  ];
  
  // Función para determinar si una dirección es una calle o una avenida
  function esCalle(direccion) {
    return direccion.startsWith('CLL');
  }
  
  // Función para ordenar los datos
  datos.sort((a, b) => {
    // Primero ordenar por Ciclo
    if (a.Ciclo < b.Ciclo) return -1;
    if (a.Ciclo > b.Ciclo) return 1;
  
    // Luego ordenar por RutaLectura
    if (a.RutaLectura < b.RutaLectura) return -1;
    if (a.RutaLectura > b.RutaLectura) return 1;
  
    // Finalmente, ordenar por Direccion teniendo en cuenta si es calle o avenida
    const aEsCalle = esCalle(a.Direccion);
    const bEsCalle = esCalle(b.Direccion);
  
    if (aEsCalle && !bEsCalle) return -1; // Las calles van primero
    if (!aEsCalle && bEsCalle) return 1;  // Las avenidas van después
  
    // Si ambas son calles o ambas son avenidas, ordenar alfabéticamente
    return a.Direccion.localeCompare(b.Direccion);
  });
  