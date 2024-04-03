export async function separarString(cadena) {
  let datosconmedidores = cadena.map((medidor) => {
    if(medidor.DMedidor === ''){
      medidor.Medidor = '';
    }else{
      const partes = medidor.DMedidor.split("-");
      medidor.Medidor = partes[0];
    }
    return medidor; // Devuelve el objeto medidor modificado
  });
  return datosconmedidores;
}
