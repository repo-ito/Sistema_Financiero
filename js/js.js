$(document).ready(function(){
  
  $("#calculaRazones").click(function(e){
    llenaCampos();
  });
  
  $("#btnRanking").click(function(e){
    $("#modal-bodyRank").html('<canvas id="graficaRanking"></canvas>');

    const labels = [
      'Rápida',
      'Prueba del ácido',
      'Deuda total',
      'Rotación del interés ganado',
      'Rotacion del inventario',
      'Periodo de Cobranzas' ,
      'Rotacion del activo total' ,
      'Margen de Utilidad',
      'Rotación de los activos',
      'Rendimiento sobre el capital'];

    const dataset1 = {
      label: $("#nEmp1").val().toUpperCase(),
      data: [
        $("#RRE1In").val(),
        $("#PA1In").val(),
        $("#RDT1In").val(),
        $("#RIG1In").val(),
        $("#RI1In").val(),
        $("#PPC1In").val(),
        $("#RAT1In").val(),
        $("#MU1In").val(),
        $("#RSA1In").val(),
        $("#RSC1In").val() ],
      borderColor: 'rgba(248, 37, 37, 0.8)',
      fill: false,
      tension: 0.1
    };

    const dataset2 = {
      label: $("#nEmp2").val().toUpperCase(),
      data: [
        $("#RRE2In").val(),
        $("#PA2In").val(),
        $("#RDT2In").val(),
        $("#RIG2In").val(),
        $("#RI2In").val(),
        $("#PPC2In").val(),
        $("#RAT2In").val(),
        $("#MU2In").val(),
        $("#RSA2In").val(),
        $("#RSC2In").val() ],
      borderColor: 'rgba(69, 248, 84, 0.8)',
      fill: false,
      tension: 0.1
    };

    const dataset3 = {
      label: $("#nEmp3").val().toUpperCase(),
      data: [
        $("#RRE3In").val(),
        $("#PA3In").val(),
        $("#RDT3In").val(),
        $("#RIG3In").val(),
        $("#RI3In").val(),
        $("#PPC3In").val(),
        $("#RAT3In").val(),
        $("#MU3In").val(),
        $("#RSA3In").val(),
        $("#RSC3In").val() ],
      borderColor: 'rgba(69, 140, 248, 0.8)',
      fill: false,
      tension: 0.1
    };

    const dataset4 = {
      label: $("#nEmp4").val().toUpperCase(),
      data: [
        $("#RRE4In").val(),
        $("#PA4In").val(),
        $("#RDT4In").val(),
        $("#RIG4In").val(),
        $("#RI4In").val(),
        $("#PPC4In").val(),
        $("#RAT4In").val(),
        $("#MU4In").val(),
        $("#RSA4In").val(),
        $("#RSC4In").val() ],
      borderColor: 'rgba(245, 40, 145, 0.8)',
      fill: false,
      tension: 0.1
    };

    const dataset5 = {
      label: $("#nEmp5").val().toUpperCase(),
      data: [
        $("#RRE5In").val(),
        $("#PA5In").val(),
        $("#RDT5In").val(),
        $("#RIG5In").val(),
        $("#RI5In").val(),
        $("#PPC5In").val(),
        $("#RAT5In").val(),
        $("#MU5In").val(),
        $("#RSA5In").val(),
        $("#RSC5In").val() ],
      borderColor: 'rgba(245, 245, 12, 0.8)',
      fill: false,
      tension: 0.1
    };
    
    //mayor es mejor
    var razonesRapidas       = [{empresa: $("#nEmp1").val(), valor: $("#RRE1In").val() ,  puntos: 0}, 
                                {empresa: $("#nEmp2").val(), valor: $("#RRE2In").val() ,  puntos: 0} , 
                                {empresa: $("#nEmp3").val(), valor: $("#RRE3In").val() ,  puntos: 0} , 
                                {empresa: $("#nEmp4").val(), valor: $("#RRE4In").val() ,  puntos: 0} ,
                                {empresa: $("#nEmp5").val(), valor: $("#RRE5In").val() ,  puntos: 0} ];
    // mayor es mejor
    var pruebasAcidos        = [{empresa: $("#nEmp1").val(), valor: $("#PA1In").val()  ,  puntos: 0}, 
                                {empresa: $("#nEmp2").val(), valor: $("#PA2In").val()  ,  puntos: 0} , 
                                {empresa: $("#nEmp3").val(), valor: $("#PA3In").val()  ,  puntos: 0} , 
                                {empresa: $("#nEmp4").val(), valor: $("#PA4In").val()  ,  puntos: 0} ,
                                {empresa: $("#nEmp5").val(), valor: $("#PA5In").val()  ,  puntos: 0} ];
    // mayor es mejor 
    var rDeudaTotal          = [{empresa: $("#nEmp1").val(), valor: $("#RDT1In").val() ,  puntos: 0}, 
                                {empresa: $("#nEmp2").val(), valor: $("#RDT2In").val() ,  puntos: 0} , 
                                {empresa: $("#nEmp3").val(), valor: $("#RDT3In").val() ,  puntos: 0} , 
                                {empresa: $("#nEmp4").val(), valor: $("#RDT4In").val() ,  puntos: 0} ,
                                {empresa: $("#nEmp5").val(), valor: $("#RDT5In").val() ,  puntos: 0} ];
    // mayor es mejor
    var rotInteresGanado     = [{empresa: $("#nEmp1").val(), valor: $("#RIG1In").val() ,  puntos: 0}, 
                                {empresa: $("#nEmp2").val(), valor: $("#RIG2In").val() ,  puntos: 0} , 
                                {empresa: $("#nEmp3").val(), valor: $("#RIG3In").val() ,  puntos: 0} , 
                                {empresa: $("#nEmp4").val(), valor: $("#RIG4In").val() ,  puntos: 0} ,
                                {empresa: $("#nEmp5").val(), valor: $("#RIG5In").val() ,  puntos: 0} ];
    // mayor es mejor
    var rotInventario        = [{empresa: $("#nEmp1").val(), valor: $("#RI1In").val()  ,  puntos: 0}, 
                                {empresa: $("#nEmp2").val(), valor: $("#RI2In").val()  ,  puntos: 0} , 
                                {empresa: $("#nEmp3").val(), valor: $("#RI3In").val()  ,  puntos: 0} , 
                                {empresa: $("#nEmp4").val(), valor: $("#RI4In").val()  ,  puntos: 0} ,
                                {empresa: $("#nEmp5").val(), valor: $("#RI5In").val()  ,  puntos: 0} ];
    // menor es mejor
    var periodoPromCobranzas = [{empresa: $("#nEmp1").val(), valor: $("#PPC1In").val() ,  puntos: 0}, 
                                {empresa: $("#nEmp2").val(), valor: $("#PPC2In").val() ,  puntos: 0} , 
                                {empresa: $("#nEmp3").val(), valor: $("#PPC3In").val() ,  puntos: 0} , 
                                {empresa: $("#nEmp4").val(), valor: $("#PPC4In").val() ,  puntos: 0} ,
                                {empresa: $("#nEmp5").val(), valor: $("#PPC5In").val() ,  puntos: 0} ];
    //mayor es mejor
    var rotActivoTotal       = [{empresa: $("#nEmp1").val(), valor: $("#RAT1In").val() ,  puntos: 0}, 
                                {empresa: $("#nEmp2").val(), valor: $("#RAT2In").val() ,  puntos: 0} , 
                                {empresa: $("#nEmp3").val(), valor: $("#RAT3In").val() ,  puntos: 0} , 
                                {empresa: $("#nEmp4").val(), valor: $("#RAT4In").val() ,  puntos: 0} ,
                                {empresa: $("#nEmp5").val(), valor: $("#RAT5In").val() ,  puntos: 0} ];
    //mayor es mejor
    var margenUtilidad       = [{empresa: $("#nEmp1").val(), valor: $("#MU1In").val()  ,  puntos: 0}, 
                                {empresa: $("#nEmp2").val(), valor: $("#MU2In").val()  ,  puntos: 0} , 
                                {empresa: $("#nEmp3").val(), valor: $("#MU3In").val()  ,  puntos: 0} , 
                                {empresa: $("#nEmp4").val(), valor: $("#MU4In").val()  ,  puntos: 0} ,
                                {empresa: $("#nEmp5").val(), valor: $("#MU5In").val()  ,  puntos: 0} ];
    //mayor es mejor
    var rendSobreActivos     = [{empresa: $("#nEmp1").val(), valor: $("#RSA1In").val() ,  puntos: 0}, 
                                {empresa: $("#nEmp2").val(), valor: $("#RSA2In").val() ,  puntos: 0} , 
                                {empresa: $("#nEmp3").val(), valor: $("#RSA3In").val() ,  puntos: 0} , 
                                {empresa: $("#nEmp4").val(), valor: $("#RSA4In").val() ,  puntos: 0} ,
                                {empresa: $("#nEmp5").val(), valor: $("#RSA5In").val() ,  puntos: 0} ];
    //mayor es mejor
    var rendSobreCapital     = [{empresa: $("#nEmp1").val(), valor: $("#RSC1In").val() ,  puntos: 0}, 
                                {empresa: $("#nEmp2").val(), valor: $("#RSC2In").val() ,  puntos: 0} , 
                                {empresa: $("#nEmp3").val(), valor: $("#RSC3In").val() ,  puntos: 0} , 
                                {empresa: $("#nEmp4").val(), valor: $("#RSC4In").val() ,  puntos: 0} ,
                                {empresa: $("#nEmp5").val(), valor: $("#RSC5In").val() ,  puntos: 0} ];



    var razonesRapidasTop = razonesRapidas.sort(function (a, b) {  return a.valor - b.valor;   });

    $("#RRETop1").html(razonesRapidasTop[4]["empresa"].toUpperCase());
    if(razonesRapidasTop[4]["valor"]) razonesRapidasTop[4]["puntos"] += 4;
    $("#RRETop2").html(razonesRapidasTop[3]["empresa"].toUpperCase());
    if(razonesRapidasTop[3]["valor"]) razonesRapidasTop[3]["puntos"] += 3;
    $("#RRETop3").html(razonesRapidasTop[2]["empresa"].toUpperCase());
    if(razonesRapidasTop[2]["valor"]) razonesRapidasTop[2]["puntos"] += 2;
    $("#RRETop4").html(razonesRapidasTop[1]["empresa"].toUpperCase());
    if(razonesRapidasTop[1]["valor"]) razonesRapidasTop[1]["puntos"] += 1;
    $("#RRETop5").html(razonesRapidasTop[0]["empresa"].toUpperCase());
    if(razonesRapidasTop[0]["valor"]) razonesRapidasTop[0]["puntos"] += 0;

    var razonesRapidasABC = razonesRapidasTop.sort(function(a, b) {
  
      var nameA = a.empresa.toUpperCase();
      var nameB = b.empresa.toUpperCase();
      
      if (nameA < nameB) {     return -1;   }      if (nameA > nameB) {
        return 1;
      }
    
      return 0;
    
    });
    
    //console.log(razonesRapidasABC);


    var pruebasAcidosTop = pruebasAcidos.sort(function (a, b) {  return a.valor - b.valor;   });
    $("#PATop1").html(pruebasAcidosTop[4]["empresa"].toUpperCase());
    if(pruebasAcidosTop[4]["valor"]) pruebasAcidosTop[4]["puntos"] += 4;
    $("#PATop2").html(pruebasAcidosTop[3]["empresa"].toUpperCase());
    if(pruebasAcidosTop[3]["valor"]) pruebasAcidosTop[3]["puntos"] += 3;
    $("#PATop3").html(pruebasAcidosTop[2]["empresa"].toUpperCase());
    if(pruebasAcidosTop[2]["valor"]) pruebasAcidosTop[2]["puntos"] += 2;
    $("#PATop4").html(pruebasAcidosTop[1]["empresa"].toUpperCase());
    if(pruebasAcidosTop[1]["valor"]) pruebasAcidosTop[1]["puntos"] += 1;
    $("#PATop5").html(pruebasAcidosTop[0]["empresa"].toUpperCase());
    if(pruebasAcidosTop[0]["valor"]) pruebasAcidosTop[0]["puntos"] += 0;

    var pruebasAcidosABC = pruebasAcidosTop.sort(function(a, b) {
  
      var nameA = a.empresa.toUpperCase();
      var nameB = b.empresa.toUpperCase();
      
      if (nameA < nameB) {     return -1;   }      if (nameA > nameB) {
        return 1;
      }
    
      return 0;
    
    });
    //console.log(pruebasAcidosTop);

    var rDeudaTotalTop = rDeudaTotal.sort(function (a, b) {  return a.valor - b.valor;   });
    $("#RDTTop1").html(rDeudaTotalTop[4]["empresa"].toUpperCase());
    if(rDeudaTotalTop[4]["valor"]) rDeudaTotalTop[4]["puntos"] += 4;
    $("#RDTTop2").html(rDeudaTotalTop[3]["empresa"].toUpperCase());
    if(rDeudaTotalTop[3]["valor"]) rDeudaTotalTop[3]["puntos"] += 3;
    $("#RDTTop3").html(rDeudaTotalTop[2]["empresa"].toUpperCase());
    if(rDeudaTotalTop[2]["valor"]) rDeudaTotalTop[2]["puntos"] += 2;
    $("#RDTTop4").html(rDeudaTotalTop[1]["empresa"].toUpperCase());
    if(rDeudaTotalTop[1]["valor"]) rDeudaTotalTop[1]["puntos"] += 1;
    $("#RDTTop5").html(rDeudaTotalTop[0]["empresa"].toUpperCase());
    if(rDeudaTotalTop[0]["valor"]) rDeudaTotalTop[0]["puntos"] += 0;
    
    var rDeudaTotalABC = rDeudaTotalTop.sort(function(a, b) {
  
      var nameA = a.empresa.toUpperCase();
      var nameB = b.empresa.toUpperCase();
      
      if (nameA < nameB) {     return -1;   }      if (nameA > nameB) {
        return 1;
      }
    
      return 0;
    
    });
    //console.log(rDeudaTotalTop);

    var rotInteresGanadoTop = rotInteresGanado.sort(function (a, b) {  return a.valor - b.valor;   });
    $("#RIGTop1").html(rotInteresGanadoTop[4]["empresa"].toUpperCase());
    if(rotInteresGanadoTop[4]["valor"]) rotInteresGanadoTop[4]["puntos"] += 4;
    $("#RIGTop2").html(rotInteresGanadoTop[3]["empresa"].toUpperCase());
    if(rotInteresGanadoTop[3]["valor"]) rotInteresGanadoTop[3]["puntos"] += 3;
    $("#RIGTop3").html(rotInteresGanadoTop[2]["empresa"].toUpperCase());
    if(rotInteresGanadoTop[2]["valor"]) rotInteresGanadoTop[2]["puntos"] += 2;
    $("#RIGTop4").html(rotInteresGanadoTop[1]["empresa"].toUpperCase());
    if(rotInteresGanadoTop[1]["valor"]) rotInteresGanadoTop[1]["puntos"] += 1;
    $("#RIGTop5").html(rotInteresGanadoTop[0]["empresa"].toUpperCase());
    if(rotInteresGanadoTop[0]["valor"]) rotInteresGanadoTop[0]["puntos"] += 0;

    var rotInteresGanadoABC = rotInteresGanadoTop.sort(function(a, b) {
  
      var nameA = a.empresa.toUpperCase();
      var nameB = b.empresa.toUpperCase();
      
      if (nameA < nameB) {     return -1;   }      if (nameA > nameB) {
        return 1;
      }
    
      return 0;
    
    });

    //console.log(rotInteresGanadoTop);

    var rotInventarioTop = rotInventario.sort(function (a, b) {  return a.valor - b.valor;   });
    $("#RITop1").html(rotInventarioTop[4]["empresa"].toUpperCase());
    if(rotInventarioTop[4]["valor"]) rotInventarioTop[4]["puntos"] += 4;
    $("#RITop2").html(rotInventarioTop[3]["empresa"].toUpperCase());
    if(rotInventarioTop[3]["valor"]) rotInventarioTop[3]["puntos"] += 3;
    $("#RITop3").html(rotInventarioTop[2]["empresa"].toUpperCase());
    if(rotInventarioTop[2]["valor"]) rotInventarioTop[2]["puntos"] += 2;
    $("#RITop4").html(rotInventarioTop[1]["empresa"].toUpperCase());
    if(rotInventarioTop[1]["valor"]) rotInventarioTop[1]["puntos"] += 1;
    $("#RITop5").html(rotInventarioTop[0]["empresa"].toUpperCase());
    if(rotInventarioTop[0]["valor"]) rotInventarioTop[0]["puntos"] += 0;

    
    

    var rotInventarioABC = rotInventarioTop.sort(function(a, b) {
  
      var nameA = a.empresa.toUpperCase();
      var nameB = b.empresa.toUpperCase();
      
      if (nameA < nameB) {     return -1;   }      if (nameA > nameB) {
        return 1;
      }
    
      return 0;
    
    });
   // console.log(rotInventarioTop);

    var periodoPromCobranzasTop = periodoPromCobranzas.sort(function (a, b) {  return a.valor - b.valor;   });
    $("#PPCTop1").html(periodoPromCobranzasTop[0]["empresa"].toUpperCase());
    if(periodoPromCobranzasTop[0]["valor"])  periodoPromCobranzasTop[0]["puntos"] += 4;
    $("#PPCTop2").html(periodoPromCobranzasTop[1]["empresa"].toUpperCase());
    if(periodoPromCobranzasTop[1]["valor"])  periodoPromCobranzasTop[1]["puntos"] += 3;
    $("#PPCTop3").html(periodoPromCobranzasTop[2]["empresa"].toUpperCase());
    if(periodoPromCobranzasTop[2]["valor"])  periodoPromCobranzasTop[2]["puntos"] += 2;
    $("#PPCTop4").html(periodoPromCobranzasTop[3]["empresa"].toUpperCase());
    if(periodoPromCobranzasTop[3]["valor"])  periodoPromCobranzasTop[3]["puntos"] += 1;
    $("#PPCTop5").html(periodoPromCobranzasTop[4]["empresa"].toUpperCase());
    if(periodoPromCobranzasTop[4]["valor"])  periodoPromCobranzasTop[4]["puntos"] += 0;

    var periodoPromCobranzasABC = periodoPromCobranzasTop.sort(function(a, b) {
  
      var nameA = a.empresa.toUpperCase();
      var nameB = b.empresa.toUpperCase();
      
      if (nameA < nameB) {     return -1;   }      if (nameA > nameB) {
        return 1;
      }
    
      return 0;
    
    });

  //  console.log(periodoPromCobranzasTop);

    var rotActivoTotalTop = rotActivoTotal.sort(function (a, b) {  return a.valor - b.valor;   });
    $("#RATTop1").html(rotActivoTotalTop[4]["empresa"].toUpperCase());
    if(rotActivoTotalTop[4]["valor"])  rotActivoTotalTop[4]["puntos"] += 4;
    $("#RATTop2").html(rotActivoTotalTop[3]["empresa"].toUpperCase());
    if(rotActivoTotalTop[3]["valor"])  rotActivoTotalTop[3]["puntos"] += 3;
    $("#RATTop3").html(rotActivoTotalTop[2]["empresa"].toUpperCase());
    if(rotActivoTotalTop[2]["valor"])  rotActivoTotalTop[2]["puntos"] += 2;
    $("#RATTop4").html(rotActivoTotalTop[1]["empresa"].toUpperCase());
    if(rotActivoTotalTop[1]["valor"])  rotActivoTotalTop[1]["puntos"] += 1;
    $("#RATTop5").html(rotActivoTotalTop[0]["empresa"].toUpperCase());
    if(rotActivoTotalTop[0]["valor"])  rotActivoTotalTop[0]["puntos"] += 0;

    var rotActivoTotalABC = rotActivoTotalTop.sort(function(a, b) {
  
      var nameA = a.empresa.toUpperCase();
      var nameB = b.empresa.toUpperCase();
      
      if (nameA < nameB) {     return -1;   }      if (nameA > nameB) {
        return 1;
      }
    
      return 0;
    
    });
    //console.log(rotActivoTotalTop);

    var margenUtilidadTop = margenUtilidad.sort(function (a, b) {  return a.valor - b.valor;   });
    $("#MUTop1").html(margenUtilidadTop[4]["empresa"].toUpperCase());
    if(margenUtilidadTop[4]["valor"])  margenUtilidadTop[4]["puntos"] += 4;
    $("#MUTop2").html(margenUtilidadTop[3]["empresa"].toUpperCase());
    if(margenUtilidadTop[3]["valor"])  margenUtilidadTop[3]["puntos"] += 3;
    $("#MUTop3").html(margenUtilidadTop[2]["empresa"].toUpperCase());
    if(margenUtilidadTop[2]["valor"])  margenUtilidadTop[2]["puntos"] += 2;
    $("#MUTop4").html(margenUtilidadTop[1]["empresa"].toUpperCase());
    if(margenUtilidadTop[1]["valor"])  margenUtilidadTop[1]["puntos"] += 1;
    $("#MUTop5").html(margenUtilidadTop[0]["empresa"].toUpperCase());
    if(margenUtilidadTop[0]["valor"])  margenUtilidadTop[0]["puntos"] += 0;

    var margenUtilidadABC = margenUtilidadTop.sort(function(a, b) {
  
      var nameA = a.empresa.toUpperCase();
      var nameB = b.empresa.toUpperCase();
      
      if (nameA < nameB) {     return -1;   }      if (nameA > nameB) {
        return 1;
      }
    
      return 0;
    
    });

   // console.log(margenUtilidadTop);

    var rendSobreActivosTop = rendSobreActivos.sort(function (a, b) {  return a.valor - b.valor;   });
    $("#RSATop1").html(rendSobreActivosTop[4]["empresa"].toUpperCase());
    if(rendSobreActivosTop[4]["valor"])  rendSobreActivosTop[4]["puntos"] += 4;
    $("#RSATop2").html(rendSobreActivosTop[3]["empresa"].toUpperCase());
    if(rendSobreActivosTop[3]["valor"]) rendSobreActivosTop[3]["puntos"] += 3;
    $("#RSATop3").html(rendSobreActivosTop[2]["empresa"].toUpperCase());
    if(rendSobreActivosTop[2]["valor"]) rendSobreActivosTop[2]["puntos"] += 2;
    $("#RSATop4").html(rendSobreActivosTop[1]["empresa"].toUpperCase());
    if(rendSobreActivosTop[1]["valor"]) rendSobreActivosTop[1]["puntos"] += 1;
    $("#RSATop5").html(rendSobreActivosTop[0]["empresa"].toUpperCase());
    if(rendSobreActivosTop[0]["valor"]) rendSobreActivosTop[0]["puntos"] += 0;

    var rendSobreActivosABC = rendSobreActivosTop.sort(function(a, b) {
  
      var nameA = a.empresa.toUpperCase();
      var nameB = b.empresa.toUpperCase();
      
      if (nameA < nameB) {     return -1;   }      if (nameA > nameB) {
        return 1;
      }
    
      return 0;
    
    });

   // console.log(rendSobreActivosTop);

    var rendSobreCapitalTop = rendSobreCapital.sort(function (a, b) {  return a.valor - b.valor;   });
    $("#RSCTop1").html(rendSobreCapitalTop[4]["empresa"].toUpperCase());
    if(rendSobreCapitalTop[4]["valor"])  rendSobreCapitalTop[4]["puntos"] += 4;
    $("#RSCTop2").html(rendSobreCapitalTop[3]["empresa"].toUpperCase());
    if(rendSobreCapitalTop[3]["valor"])  rendSobreCapitalTop[3]["puntos"] += 3;
    $("#RSCTop3").html(rendSobreCapitalTop[2]["empresa"].toUpperCase());
    if(rendSobreCapitalTop[2]["valor"])  rendSobreCapitalTop[2]["puntos"] += 2;
    $("#RSCTop4").html(rendSobreCapitalTop[1]["empresa"].toUpperCase());
    if(rendSobreCapitalTop[1]["valor"])  rendSobreCapitalTop[1]["puntos"] += 1;
    $("#RSCTop5").html(rendSobreCapitalTop[0]["empresa"].toUpperCase());
    if(rendSobreCapitalTop[0]["valor"])  rendSobreCapitalTop[0]["puntos"] += 0;

    var rendSobreCapitalABC = rendSobreCapitalTop.sort(function(a, b) {
  
      var nameA = a.empresa.toUpperCase();
      var nameB = b.empresa.toUpperCase();
      
      if (nameA < nameB) {     return -1;   }      if (nameA > nameB) {
        return 1;
      }
    
      return 0;
    
    });

    /*
    console.log ("razonesRapidasABC", razonesRapidasABC);
    console.log ("pruebasAcidosABC", pruebasAcidosABC);
    console.log ("rDeudaTotalABC", rDeudaTotalABC);
    console.log ("rotInteresGanadoABC", rotInteresGanadoABC);
    console.log ("rotInventarioABC", rotInventarioABC);
    console.log ("periodoPromCobranzasABC", periodoPromCobranzasABC);
    console.log ("rotActivoTotalABC", rotActivoTotalABC);
    console.log ("margenUtilidadABC", margenUtilidadABC);
    console.log ("rendSobreActivosABC", rendSobreActivosABC);
    console.log ("rendSobreCapitalABC", rendSobreCapitalABC);
*/
    var datosTop = [
      {empresaTop: rendSobreCapitalABC[0]["empresa"] , sumaPuntos: razonesRapidasABC[0]["puntos"]+pruebasAcidosABC[0]["puntos"]+rDeudaTotalABC[0]["puntos"]+
      rotInteresGanadoABC[0]["puntos"]+rotInventarioABC[0]["puntos"]+periodoPromCobranzasABC[0]["puntos"]+rotActivoTotalABC[0]["puntos"]+margenUtilidadABC[0]["puntos"]+rendSobreActivosABC[0]["puntos"]+rendSobreCapitalABC[0]["puntos"]} , 
      {empresaTop: rendSobreCapitalABC[1]["empresa"] , sumaPuntos: razonesRapidasABC[1]["puntos"]+pruebasAcidosABC[1]["puntos"]+rDeudaTotalABC[1]["puntos"]+rotInteresGanadoABC[1]["puntos"]+rotInventarioABC[1]["puntos"]+periodoPromCobranzasABC[1]["puntos"]+rotActivoTotalABC[1]["puntos"]+margenUtilidadABC[1]["puntos"]+rendSobreActivosABC[1]["puntos"]+rendSobreCapitalABC[1]["puntos"]} , 
      {empresaTop: rendSobreCapitalABC[2]["empresa"] , sumaPuntos: razonesRapidasABC[2]["puntos"]+pruebasAcidosABC[2]["puntos"]+rDeudaTotalABC[2]["puntos"]+rotInteresGanadoABC[2]["puntos"]+rotInventarioABC[2]["puntos"]+periodoPromCobranzasABC[2]["puntos"]+rotActivoTotalABC[2]["puntos"]+margenUtilidadABC[2]["puntos"]+rendSobreActivosABC[2]["puntos"]+rendSobreCapitalABC[2]["puntos"]} , 
      {empresaTop: rendSobreCapitalABC[3]["empresa"] , sumaPuntos: razonesRapidasABC[3]["puntos"]+pruebasAcidosABC[3]["puntos"]+rDeudaTotalABC[3]["puntos"]+rotInteresGanadoABC[3]["puntos"]+rotInventarioABC[3]["puntos"]+periodoPromCobranzasABC[3]["puntos"]+rotActivoTotalABC[3]["puntos"]+margenUtilidadABC[3]["puntos"]+rendSobreActivosABC[3]["puntos"]+rendSobreCapitalABC[3]["puntos"]} , 
      {empresaTop: rendSobreCapitalABC[4]["empresa"] , sumaPuntos: razonesRapidasABC[4]["puntos"]+pruebasAcidosABC[4]["puntos"]+rDeudaTotalABC[4]["puntos"]+rotInteresGanadoABC[4]["puntos"]+rotInventarioABC[4]["puntos"]+periodoPromCobranzasABC[4]["puntos"]+rotActivoTotalABC[4]["puntos"]+margenUtilidadABC[4]["puntos"]+rendSobreActivosABC[4]["puntos"]+rendSobreCapitalABC[4]["puntos"]} , 
    ]
   var datosTopOrd = datosTop.sort(  function (a, b) {  return a.sumaPuntos - b.sumaPuntos;   });

    console.log(datosTopOrd);
 
    $('#containerTop5').highcharts({
      chart: {
          type: 'column'
      },
      title: {
          text: 'RATING'
      },
      xAxis: {
          categories: false,
          lineWidth: 0,
          minorGridLineWidth: 0,
          lineColor: 'transparent',
          labels: {
             enabled: false
         },
          minorTickLength: 0,
          tickLength: 0
      },
      yAxis: {
          min: 0,
          gridLineWidth: 0,
          title: {
              text: false
          },
          labels: {
             enabled: false
         }
      },
       legend: {
             enabled: false
         
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y} </b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true,
          positioner: function(boxWidth, boxHeight, point) {
          return {
              x: point.plotX,
              y: point.plotY + 100
          }
          }
      },
      plotOptions: {
          column: {
              pointPadding: -0.3,
              borderWidth: 0
          }
      },
     
      series: [{
          name: 'RATING',
          data:[
              [datosTopOrd[1]["empresaTop"], 2],
              [datosTopOrd[3]["empresaTop"], 4],
              [datosTopOrd[4]["empresaTop"], 5],
              [datosTopOrd[2]["empresaTop"], 3],
              [datosTopOrd[0]["empresaTop"], 1]
              ],
          dataLabels: {
              enabled: true,
              color: 'white',
              align: 'center',
              x: 3,
              y: 60,
              useHTML: true,
              overflow: false,
              crop: false,
              formatter: function() {
                   // return '<img src="http://highcharts.com/demo/gfx/sun.png" /> <br>' + (6 - this.y);  
                   if((6 - this.y) != 1) return '<p style="color:black; font-size:15px">'+ datosTopOrd[(this.y-1)]["empresaTop"].toUpperCase()+'</p>' + (6 - this.y);  
                   else return '<div class="img-container"><img src="./imagenes/trofeo.png" width="80" height="60"/></div><p style="color:#E5E512; font-size:20px; text-shadow: -2px -2px 1px #4A4A06;">'+ datosTopOrd[(this.y-1)]["empresaTop"].toUpperCase()+'</p>' + (6 - this.y);  
              },
              style: {
                  fontSize: '50px',
                  fontFamily: 'Verdana, sans-serif',
                  textShadow: '0 0 3px black'
              }
          }
      }]
  });
//  
    const graph = document.querySelector("#graficaRanking");
    const data = {
      labels: labels,
      datasets: [dataset1,dataset2,dataset3,dataset4, dataset5]
    };
    const config = {
      type: 'line',
      data: data,
    };
    new Chart(graph, config);
  });
  
});
function sortJSON(data, key, orden) {
  return data.sort(function (a, b) {
      var x = a[key],
      y = b[key];

      if (orden === 'asc') {
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      }

      if (orden === 'desc') {
          return ((x > y) ? -1 : ((x < y) ? 1 : 0));
      }
  });
}
function creaGrafica(valores){
  $("#modal-bodyGra").html('<canvas id="grafica"></canvas>');
  var labels = [
    $("#nEmp1").val().substring(0,10).toUpperCase(),
    $("#nEmp2").val().substring(0,10).toUpperCase(),
    $("#nEmp3").val().substring(0,10).toUpperCase(),
    $("#nEmp4").val().substring(0,10).toUpperCase(),
    $("#nEmp5").val().substring(0,10).toUpperCase()
  ];
  var graph = document.querySelector("#grafica");
  var datos = []
  switch (valores){
    case 1:
      var titulo="RAZON RAPIDA";
      datos.push($("#RRE1In").val(), $("#RRE2In").val(), $("#RRE3In").val(), $("#RRE4In").val(), $("#RRE5In").val());
      break;
    case 2:
      var titulo="PRUEBA DEL ACIDO";
      datos.push($("#PA1In").val(), $("#PA2In").val(), $("#PA3In").val(), $("#PA4In").val(), $("#PA5In").val());
      break;
    case 3:
      var titulo="RAZON DE LA DEUDA TOTAL";
      datos.push($("#RDT1In").val(), $("#RDT2In").val(), $("#RDT3In").val(), $("#RDT4In").val(), $("#RDT5In").val());
      break;
    case 4:
      var titulo="ROTACIN DEL INTERES GANADO";
      datos.push($("#RIG1In").val(), $("#RIG2In").val(), $("#RIG3In").val(), $("#RIG4In").val(), $("#RIG5In").val());
      break;
    case 5:
      var titulo="ROTACION DEL INVENTARIO";
      datos.push($("#RI1In").val(), $("#RI2In").val(), $("#RI3In").val(), $("#RI4In").val(), $("#RI5In").val());
      break;
    case 6:
      var titulo="PERIODO PROMEDIO DE COBRANZAS";
      datos.push($("#PPC1In").val(), $("#PPC2In").val(), $("#PPC3In").val(), $("#PPC4In").val(), $("#PPC5In").val());
      break;
    case 7:
      var titulo="ROTACION DEL ACTIVO TOTAL";
      datos.push($("#RAT1In").val(), $("#RAT2In").val(), $("#RAT3In").val(), $("#RAT4In").val(), $("#RAT5In").val());
      break; 
    case 8:
      var titulo="Margen de utilidad";
      datos.push($("#MU1In").val(), $("#MU2In").val(), $("#MU3In").val(), $("#MU4In").val(), $("#MU5In").val());
      break;
    case 9:
      var titulo="Rendimiento sobre los activos";
      datos.push($("#RSA1In").val(), $("#RSA2In").val(), $("#RSA3In").val(), $("#RSA4In").val(), $("#RSA5In").val());
      break; 
    case 10:
      var titulo="Rendimiento sobre el cpital";
      datos.push($("#RSC1In").val(), $("#RSC2In").val(), $("#RSC3In").val(), $("#RSC4In").val(), $("#RSC5In").val());
      break;          
  }
  $("#exampleModalLabelGrafica").html(titulo);

  const data = {
      labels: labels,
      datasets: [{
          label: ""+ titulo,
          data: [datos[0], datos[1], datos[2], datos[3], datos[4]],
          backgroundColor: 'rgba(205, 92, 92, 0.8)'
      }]
  };
  

  const config = {
      type: 'bar',
      data: data,
  };
  var myChart = new Chart(graph, config);
  
}

function cambiaEmpresa(emp){
  //this.value=this.value.toUpperCase();replaceChars(this.value,this);
  var valorAct = $("#nEmp"+emp).val();
  $("#exampleModalLabel"+emp).html(valorAct.toUpperCase());
  $("#thEM"+emp).html(valorAct.toUpperCase());
  $("#btnEM"+emp).html(valorAct.toUpperCase());
}
function llenaCampos(){
  for (var i = 1; i < 6; i++){
    //activo Circulante
    var actCirc = $("#actCirc"+i).val();
    
    //pasivo circulante
    var pasCirc = $("#pasCirc"+i).val();
    // pasivo total
    var pasTot = $("#pasTot"+i).val();
    // activo total
    var actTot = $("#actTot"+i).val();
    // inventario
    var inv = $("#inv"+i).val();
    // utilidad antes de impuestos e intereses
    var utilAII = $("#utilAII"+i).val();
    //gastos financieros
    var gastFin = $("#gastFin"+i).val();
    // ventas
    var ventas = $("#ventas"+i).val();
    // cuentas por cobrar
    var cuentPCobr = $("#cuentPCobr"+i).val();
    //ingreso neto
    var ingNeto = $("#ingNeto"+i).val();
    //utilidad neta
    var utlNeta = $("#utlNeta"+i).val();
    //capital contable
    var capCont = $("#capCont"+i).val();
  
    // ---------------------- fin de obtencion de datos -------------------------------------------------
  
    // ----------------------- calculo de razones -------------------------------------------------------

    //razon rapida
    if (actCirc && pasCirc){
      var RRE = actCirc / pasCirc;
      $("#RRE"+i).html(""+RRE.toFixed(3));
      $("#RRE"+i+"In").val(""+RRE.toFixed(3));
    }
    //prueba del acido
    if(actCirc && inv && pasCirc){
      var PA =  (actCirc-inv)/pasCirc;
      $("#PA"+i).html(""+PA.toFixed(3));
      $("#PA"+i+"In").val(""+PA.toFixed(3));
    }
    //razon de la deuda total
    if(pasTot && actTot){
      var RDT = pasTot / actTot;
      $("#RDT"+i).html(""+RDT.toFixed(3));
      $("#RDT"+i+"In").val(""+RDT.toFixed(3));
    }
    //Rotacion del interes ganado
    if(utilAII && gastFin){
      var RIG = utilAII / gastFin;
      $("#RIG"+i).html(""+RIG.toFixed(3));
      $("#RIG"+i+"In").val(""+RIG.toFixed(3));
    }
    //rotacion dle inventario 
    if(ventas && inv){
      var RI = ventas / inv;
      $("#RI"+i).html(""+RI.toFixed(3));
      $("#RI"+i+"In").val(""+RI.toFixed(3));
    }
    //periodo promedio de cobranzas
    if(ventas && cuentPCobr){
      var PPC = cuentPCobr / (ventas/360);
      $("#PPC"+i).html(""+PPC.toFixed(3));
      $("#PPC"+i+"In").val(""+PPC.toFixed(3));
    }
    //rotacion del activo total
    if(actTot && ventas){ 
      var RAT = ventas / actTot;
      $("#RAT"+i).html(""+RAT.toFixed(3));
      $("#RAT"+i+"In").val(""+RAT.toFixed(3));
    }
    //margen de utilidad
    if(ingNeto && ventas){
      var  MU = ingNeto / ventas;
      $("#MU"+i).html(""+MU.toFixed(3));
      $("#MU"+i+"In").val(""+MU.toFixed(3));
    }
    //Rendimiento sobre los activos 
    if(actTot && utlNeta){
      var RSA = utlNeta / actTot;
      $("#RSA"+i).html(""+RSA.toFixed(3));
      $("#RSA"+i+"In").val(""+RSA.toFixed(3));
    }
    // rendimiento sobre el capital
    if(capCont && ingNeto){
      var RSC = ingNeto/capCont;
      $("#RSC"+i).html(""+RSC.toFixed(3));
      $("#RSC"+i+"In").val(""+RSC.toFixed(3));
    }
  }
}