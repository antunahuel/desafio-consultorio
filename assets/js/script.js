// importando paciente consultorio
import Consultorio from "./class/Consultorio.js";
import Paciente from "./class/Paciente.js";

// se crea instancia consultorio
const c1 = new Consultorio("Miraflores");

//insrancias de pacientes que se vincularan a consultorio

const paciente1 = new Paciente ("Pancracio",35,"12.121.121-0","COVID");
const paciente2 = new Paciente ("Lorencia",45,"11.123.121-k","diabetes");
const paciente3 = new Paciente ("Tamara","14","14.121.121-4","resfrio");
const paciente4 = new Paciente ("LadyGaga","12","16.121.121-4","contractura muscular");

// agrego pacientes a consultorio

// console.log("Agregando primer paciente", c1.addPaciente(paciente1));
// console.log("Agregando segundo paciente", c1.addPaciente(paciente2));
// console.log("Agregando  tercer paciente", c1.addPaciente(paciente3));

c1.addPaciente(paciente1);
c1.addPaciente(paciente2);
c1.addPaciente(paciente3);
c1.addPaciente(paciente4);
//buscar paciente por rut
 console.log ("Paciente encontrados:")
let datosPa=c1.searchPaciente("14.121.121-4");
console.log(datosPa);

console.log("Listado de Pacientes")

let listadoPacientes=c1.listaPaciente();
console.log(listadoPacientes);

paciente4.setEdad("d");
// obtener listado de paciente

// console.log(c1.getPaciente());

// let pacientes = c1.getPaciente();

// console.log(pacientes[0].datosPaciente());