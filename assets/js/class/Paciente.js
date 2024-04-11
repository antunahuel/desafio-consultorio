function Paciente(nombre, edad, rut, diagnostico = "N/A") {
    let _nombre = nombre;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico;

    // método getter and setters

    this.getNombre = function () {
        return _nombre;
    };

    this.setNombre = function (nombre) {
        _nombre = nombre;
        return _nombre;
    };
    // getter and setter edad
    this.getEdad = function () {
        return _edad;
    };

    this.setEdad = function (edad) { // validando edad
        edad = Number(edad);
        if (isNaN(edad)) {
            console.log ("la edad ingresada no cumple con formato correcto");
        } else {
            _edad = edad;
            return _edad;
        }

    };

    // rut es fijo asi que solo aplicamos getters
    this.getRut = function () {
        return _rut;
    };
    // getter and setter diagnostico
    this.getDiagnostico = function () {
        return _diagnostico;
    };

    this.setDiagnostico = function (diagnostico) {
        _diagnostico = diagnostico;
        return _diagnostico;
    }

    //funcion para obtener y regresar datos de paciente

    this.datosPaciente = function () {
        return `Nombre: ${this.getNombre()}, Edad: ${this.getEdad()}, Rut: ${this.getRut()}, Diagnostico: ${this.getDiagnostico()}`;
    }
};

//mostrar todos los datos de los usurios registrados

export default Paciente;

// probando

// const paciente1 = new Paciente ("Petronilo", 45, "12.121.121-2", "COVID");

// console.log(paciente1.getNombre());