export async function PosteriorAnterior(clientes) {
  for (let i = 0; i < clientes.length - 1; i++) {
    let clienteActual = clientes[i];
    let clienteAnterior = clientes[i-1]
    let clienteSiguiente = clientes[i + 1];

    if ( clienteAnterior === ''){
      clienteActual.Anterior = clienteActual.Cliente;
    }

    if ( clienteSiguiente === ''){
      clienteActual.Posterior = clienteActual.Cliente;
    }

    if(clienteActual.Ciclo === clienteAnterior.Ciclo && clienteActual.RutaLectura > clienteAnterior.RutaLectura){
      clienteActual.Anterior = clienteAnterior.Cliente;
    }

    if(clienteActual.Ciclo === clienteSiguiente.Ciclo && clienteActual.RutaLectura < clienteAnterior.RutaLectura){
      clienteActual.Posterior = clienteSiguiente.Cliente;
    }
  }
  return clientes;
}
