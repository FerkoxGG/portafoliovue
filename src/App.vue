<template>
  <div id="app">
    <NavBar />
    <div class="container mt-5">
      <div class="card">
        <div class="card-header">
          <h2 class="text-center">{{ nombre }}</h2>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-sm-6">
              <h3>Contacto</h3>
              <p>{{ contacto }}</p>
              <p>Email: {{ email }}</p>
              <p>LinkedIn: <a target="_blank" :href="linkedin">@Ferkox</a></p>
            </div>
            <div class="col-sm-6">
              <h3>Aptitudes principales</h3>
              <ul>
                <li v-for="aptitud in aptitudes" :key="aptitud">{{ aptitud }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="certificaciones" />
      <div class="card mt-5">
        <div class="card-header">
          <h3>Certificaciones</h3>
        </div>
        <div class="card-body">
          <ul>
            <li v-for="certificacion in certificaciones" :key="certificacion">{{ certificacion }}</li>
          </ul>
        </div>
      </div>

      <div id="experiencia" />
      <div class="card mt-5">
        <div class="card-header">
          <h3>Experiencia</h3>
        </div>
        <div class="card-body">
          <div v-for="trabajo in trabajos" :key="trabajo">
            <h4>{{ trabajo.cargo }}</h4>
            <h5>{{ trabajo.empresa }}</h5>
            <p>{{ trabajo.descripcion }}</p>
            <p>Duración: {{ trabajo.duracion }}</p>
            <hr>
          </div>
        </div>
      </div>

      <div id="educacion" />
      <div class="card mt-5">
        <div class="card-header">
          <h3>Educación</h3>
        </div>
        <div class="card-body">
          <div v-for="estudio in estudios" v-bind:key="estudio">
            <h4>{{ estudio.carrera }}
              <span v-if="estudio.institucion"></span>
            </h4>
            <h5>{{ estudio.institucion }}</h5>
            <hr>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      nombre: 'Fernando Antonio González Gaete',
      contacto: 'Palena 1672, Coronel, Chile',
      email: 'fernandogonzalezgaete@gmail.com',
      linkedin: 'https://www.linkedin.com/in/ferkox',
      aptitudes: ['Docencia', 'Operador', 'Control de calidad'],
      certificaciones: ['Aceleración de Alkemy', 'Build A TodoList Fast with Ruby on Rails and Vue', 'EF SET English Certificate 54/100 (B2 UPPER INTERMEDIATE)', 'Curso Gratis de Programación Básica', 'EMPRENDIMIENTO DIGITAL CON TECNOLOGÍAS WEB'],
      trabajos: [
        {
          key: 2,
          cargo: 'Teacher Assistant',
          empresa: 'Le Wagon',
          descripcion: 'Asistencia de enseñanza en bootcamp para desarrolladores web. Resuelvo dudas de estudiantes durante el proceso de aprendizaje. Analizo y corrijo códigos explicando metodologías que pueden mejorar su forma de programar.',
          duracion: 'noviembre 2021 - junio 2022 (8 meses)'
        },
        {
          key: 3,
          cargo: 'Ayudante de producción y mantenedor de calidad',
          empresa: 'AUXILIAR CONSERVERA S.A.',
          descripcion: 'Realización de tareas de paletizador en la rama de control de calidad, verificando la integridad del producto y dar aviso en el proceso de encontrar fallos para pronta solución del problema.',
          duracion: 'junio 2020 - julio 2021 (1 año 2 meses)'
        },
        {
          key: 4,
          cargo: 'Operador de planta de aguas servidas',
          empresa: 'Novaxiona EST Ltda.',
          descripcion: 'Realización de tareas como operador en las dependencias de ESSBIO ubicadas en Planta de Aguas Servidas, San Vicente, comuna de Talcahuano. Manejando instrumentación automatizada, recopilando datos y manteniendo ordenado y aseado el área de trabajo.',
          duracion: 'febrero 2020 - febrero 2020 (1 mes)'
        },
        {
          key: 5,
          cargo: 'Maestro eléctrico',
          empresa: 'WellCorp S.P.A',
          descripcion: 'Elaboración de trabajos de mantenimiento, automatización, programación de HMI y demás en sistemas automatizados de barcos wellboat.',
          duracion: 'octubre 2019 - febrero 2020 (5 meses)'
        },
        {
          key: 6,
          cargo: 'Vendedor',
          empresa: 'Sociedad de ventas al por menor y franquicias SPA.',
          descripcion: 'Vendedor integral en tienda Gamster, una tienda de ventas de videojuegos en Mall del Trébol, Concepción. Realizando tareas de vendedor, asesoría, reponedor, cajero, entre otras.',
          duracion: 'junio 2018 - octubre 2019 (1 año 5 meses)'
        },
      ],
      estudios: [
        {
          key: 7,
          institucion: 'INACAP',
          carrera: 'Técnico de Nivel Superior en Automatización y Control Industrial',
          duracion: '2015 - 2019'
        },
        {
          key: 8,
          institucion: 'Universidad Santo Tomás (CL)',
          carrera: 'Emprendimiento digital con tecnologías web',
          duracion: '-'
        },
        {
          key: 9,
          institucion: '',
          carrera: 'Certificación Aceleración de Alkemy',
          duracion: '-'
        },
        {
          key: 10,
          institucion: '',
          carrera: 'Build A TodoList Fast with Ruby on Rails and Vue',
          duracion: '-'
        },
        {
          key: 11,
          institucion: '',
          carrera: 'EF SET English Certificate 54/100 (B2 UPPER INTERMEDIATE)',
          duracion: '-'
        },
        {
          key: 12,
          institucion: '',
          carrera: 'Curso Gratis de Programación Básica',
          duracion: '-'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
}

a {
  color: #007bff;
}

.info,
.aptitudes,
.certifications,
.experiencia,
.educacion {
  margin-bottom: 40px;
}

.info {
  padding: 20px;
  background-color: #F8F9FA;
  border-radius: 10px;
}

.aptitudes,
.certifications,
.experiencia,
.educacion {
  padding: 20px;
}

.aptitudes ul,
.certifications ul {
  list-style: none;
}

.experiencia h3,
.educacion h3 {
  margin-top: 20px;
}

.educacion p {
  margin: 0;
}

.experiencia h3,
.educacion h3 {
  margin-top: 10px;
}

h1,
h2,
h3,
h4 {
  font-weight: 500;
  margin-top: 20px;
}

.card {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
}
</style>
