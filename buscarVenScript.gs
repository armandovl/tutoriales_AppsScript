function buscarPorParametro(parametroNombre){
  var ss= SpreadsheetApp.openById("10Zdc5T0gcLAr2oXlUhONHC5jhJUVAvXWFY-CftN81R8");
  var sheet= ss.getSheetByName("Sheet1");
  var values= sheet.getSheetValues(1,1,sheet.getLastRow(),sheet.getLastColumn());

  //console.log(values);

 

  for(i=0;i<=values.length-1;i++){
    if (parametroNombre==values[i][0]){
      console.log("position");
      console.log(i);
      console.log("nombre");
      console.log(values[i][0]);
      console.log("edad");
      console.log(values[i][2]);
      console.log("ciudad");
      console.log(values[i][4]);
      console.log("género");
      console.log(values[i][5]);
    }
  }

}

function ejecutandoBusqueda(){
  buscarPorParametro("Agnes");
}















