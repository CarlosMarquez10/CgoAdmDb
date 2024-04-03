export async function PosteriorAnterior(clientes) {
  for (let i = 0; i < clientes.length - 1; i++) {
    let clienteActual = clientes[i];
    let clienteSiguiente = clientes[i + 1];

    if (
      clienteSiguiente.RutaLectura > clienteActual.RutaLectura &&
      clienteSiguiente.Ciclo === clienteActual.Ciclo
    ) {
      clienteActual.Posterior = clienteSiguiente.Cliente;
      clienteSiguiente.Anterior = clienteActual.Cliente;
    }

    if (
      clienteSiguiente.RutaLectura > clienteActual.RutaLectura &&
      clienteSiguiente.Ciclo !== clienteActual.Ciclo
    ) {
      clienteActual.Posterior = clienteActual.Cliente;
      clienteSiguiente.Posterior = clienteSiguiente.Cliente;
    }
  }
  return clientes;
}
