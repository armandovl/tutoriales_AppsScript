function traerArchivosDeCarpetayEnviar() {
  var folder= DriveApp.getFolderById("1iMWByLqHG8QuY1qzZIO3kydyEkxhlAjX"); //traemos la carpeta por ID
  var contenido= folder.getFiles(); //traemos el contenido de la carpeta

  contador=0 // generamos un contador para hacer el ciclo

  nuevoArreglo=[]; //generamos un nuevo arreglo para guardar los adjuntos

  while(contenido.hasNext()){ //recorre los archivos de esa carpeta
    var archivo=contenido.next();
    contador++;

    datos=[ //trae nombre, id y url
      archivo.getName(),
      archivo.getId(),
      archivo.getUrl(),
    ]

    console.log(datos[1]); //Imprime los ID

    var adjunto=DriveApp.getFileById(datos[1]); //traer cada artchivo por su ID
    nuevoArreglo.push(adjunto); // los va añadiendo al arreglo de los adjuntos

  };

  GmailApp.sendEmail(  //al final envia todo por email
    "vala797@yahoo.com.mx",
    "Asunto",
    "cuerpo del mensaje",
    {attachments:nuevoArreglo});
};







