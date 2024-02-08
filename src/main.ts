type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

let pacientesPeatria = []
let pacientesPeatriaMenores = []
const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
  ):void => {
    for(const paciente of pacientes){
        if(paciente.especialidad === 'Pediatra'){
            pacientesPeatria.push(paciente)
            console.log(`Los pacientes asignados a pediatría son ${paciente.nombre}`)
        }
    }
  };

  const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
    pacientes: Pacientes[]
  ) => {
    for(const paciente of pacientes){
        if(paciente.especialidad === 'Pediatra' && paciente.edad < 10){
            pacientesPeatriaMenores.push(paciente)
            console.log(`Los pacientes asignados a pediatría y menores a 10 años son ${paciente.nombre}`)
        }
    }
  };


obtenPacientesAsignadosAPediatria(pacientes)
obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)


const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProctolo = false;
  
     for(const paciente of pacientes){
        if(paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39){
            console.log(`Hay pacientes de urgencias`)
            return activarProctolo;
        }
    }
    return false
  };

  activarProtocoloUrgencia(pacientes)


  const reasignaPacientesAMedicoFamilia = (
    pacientes: Pacientes[]
  ): void => {
    for(const paciente of pacientes){
        if(paciente.especialidad === 'Pediatra'){
            paciente.especialidad = 'Medico de familia'
            console.log(`El paciente ${paciente.nombre} de peatría ha sido asignado a ${paciente.especialidad}`)
        }
    }
  };

  reasignaPacientesAMedicoFamilia(pacientes)


  const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    for(const paciente of pacientes){
        if(paciente.especialidad === 'Pediatra'){
            return true
        }
    }
    console.log(`El peadiatra se puede ir a casa`)
    return false
  };
  
  HayPacientesDePediatria(pacientes)


  interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
  }
  
  const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
    let conteoEspecialidades: NumeroPacientesPorEspecialidad = {
      medicoDeFamilia: 0,
      pediatria: 0,
      cardiologia: 0,
    };
  
    for(const paciente of pacientes){
        if (paciente.especialidad === 'Medico de familia') {
          conteoEspecialidades.medicoDeFamilia++;
        } else if (paciente.especialidad === 'Pediatra') { 
          conteoEspecialidades.pediatria++;
        } else if (paciente.especialidad === 'Cardiólogo') {
          conteoEspecialidades.cardiologia++;
        }
      }
  
    return conteoEspecialidades;
  };
  
  const conteo = cuentaPacientesPorEspecialidad(pacientes);
  console.log(conteo);
  