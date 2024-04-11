// DESARROLANDO CONSULTORIO con getter / setter

 function Consultorio(nombre = "Sin nombre"){
  let _nombre = nombre;
  let _paciente =[];// array vació para agregar pacientes

  // método getter and setters

  this.getNombre = function(){
    return _nombre;
  };

  this.setNombre = function(nombre){
    _nombre = nombre;
    return _nombre;
  }

  //regresando pacientes


  this.getPaciente = function(){
    return _paciente;
  };
  
  //agregando paciente

  this.addPaciente = function(paciente){
    _paciente.push(paciente);// método push para agregar pacientes
    return _paciente;
  };

  this.searchPaciente = function(rut){
    let pacienteBuscado = this.getPaciente().find(paciente => paciente.getRut() == rut );
    if (pacienteBuscado){
        return pacienteBuscado.datosPaciente();
    }else {
        return "No se encuentra registro de ficha paciente con rut:" + rut;
    }
  };

  this.listaPaciente = function(){
    let contador = 1;
    let listaPacientes = "";
    for (const datopaciente of this.getPaciente()) {
        listaPacientes +=  `${contador} ${datopaciente.datosPaciente()}\n`;
        contador++;
    }
    return listaPacientes;
  }

 };

//  let c1 = new Consultorio ("Miraflores");

 export default Consultorio;

//  c1.setNombre("Consultorio Santa Rosa");

//  console.log(c1.setNombre("Consultotio Amanecer")); pruebas por consola
//  console.log(c1.addPaciente("Vicente"));
//  console.log(c1.addPaciente("Leslie Andrea"));
 /*[ 'Vicente' ]
[ 'Vicente', 'Leslie Andrea' ] comprobando metodo push para addPacciente */
