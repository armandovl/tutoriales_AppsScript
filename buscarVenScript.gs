function buscarPorParametro(parametroNombre){
  var ss= SpreadsheetApp.openById("10Zdc5T0gcLAr2oXlUhONHC5jhJUVAvXWFY-CftN81R8"); //traer la SpreadSheet por su ID
  var sheet= ss.getSheetByName("Sheet1"); // traer la hoja por su nombre
  var values= sheet.getSheetValues(1,1,sheet.getLastRow(),sheet.getLastColumn()); //traer los valores (fila, columna, alto, ancho)

  //console.log(values);

 

  for(i=0;i<=values.length-1;i++){ // ciclo for que recorre los valores
    if (parametroNombre==values[i][0]){ //busca que coincida el nombre con la columna 1
      console.log("position");
      console.log(i);
      console.log("nombre");
      console.log(values[i][0]); //imprime el nombre
      console.log("edad");
      console.log(values[i][2]);  //imprime la edad
      console.log("ciudad");
      console.log(values[i][4]); //imprime la ciudad
      console.log("género");
      console.log(values[i][5]); //imprime género
      console.log("género");
    }
  }

}

function ejecutandoBusqueda(){
  buscarPorParametro("Agnes"); // ejecuta la función con el nombre como parámetro
}















