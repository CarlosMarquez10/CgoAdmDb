import XLSX from 'xlsx'

export async function exportarArrayAExcel(array, nombreArchivo) {
    // Crear un nuevo libro de trabajo
    let wb = XLSX.utils.book_new();

    // Convertir el array a una hoja de trabajo
    let ws = XLSX.utils.json_to_sheet(array);

    // Añadir la hoja de trabajo al libro de trabajo
    XLSX.utils.book_append_sheet(wb, ws, "Hoja1");

    // Escribir el libro de trabajo en un archivo
    XLSX.writeFile(wb, nombreArchivo);

    console.log('Excel creado');
}


// exportarArrayAExcel(array, "datos.xlsx");
