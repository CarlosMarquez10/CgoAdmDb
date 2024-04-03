export async function  ordenarArray(array, propiedad1, propiedad2) {
    return array.sort((a, b) => {
      if (a[propiedad1] < b[propiedad1]) {
        return -1;
      }
      if (a[propiedad1] > b[propiedad1]) {
        return 1;
      }
      if (a[propiedad2] < b[propiedad2]) {
        return -1;
      }
      if (a[propiedad2] > b[propiedad2]) {
        return 1;
      }
      return 0;
    });
  }
  