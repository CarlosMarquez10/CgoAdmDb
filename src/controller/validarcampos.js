// validar los campos del tipo de facturacion para los que estan vacios

export async function CampVacioFacturacion(data) {
    let campovacioFact = [...data].map((cliente) => {
    if (cliente.Facturacion === "" && cliente.EstadoCliente === "Activo") {
      cliente.Facturacion = "E Estándar";
    }
    if (cliente.Facturacion === "" && cliente.EstadoCliente !== "Activo") {
      cliente.Facturacion = cliente.EstadoCliente;
    }
    return cliente;
  });

  return campovacioFact;
}


// validar campo del las coordenadas para los que estan vacios
