<template>
  <v-content>
    <v-container aling-center>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="elevation-0">
            <v-img
              :src="$store.state.fotoPerfil"
              height="200px"
              container-y
              container-x
              class="elevation-0"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h1 class="display-1 font-weight-bold">
                  <span class="">Fernando Antonio González Gaete</span>
                </h1>
              </div>
            </v-card-title>
          </v-card>
        </v-col>
        <v-row>
          <v-col>
            <v-card class="elevation-0">
              <v-card-title primary-title>
                <div>
                  <h3 class="display-1 font-weight-bold">
                    <span class="">Sobre mí:</span>
                  </h3>
                  <h4>
                    <span>
                      Desarrollador Web Full-Stack y Teacher Assistant de
                      bootcamps de desarrollo web, con formación de Técnico
                      Superior en Automatización y Control Industrial, y
                      proveedor de servicios con impresoras 3D. Persona
                      responsable, con habilidades comunicacionales, capacidad
                      de liderazgo y proactividad. Busca trabajar como diseñador
                      web.
                    </span>
                  </h4>
                </div>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="elevation-0">
              <v-img
                :src="$store.state.fotoPerfil2"
                width="75%"
                container-y
                container-x
                class="elevation-0"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-row>
      <v-row>
        <!-- proyectos realizados y que competencias use -->
        <v-col cols="12" md="8">
          <v-card class="elevation-0">
            <v-card-title primary-title>
              <div>
                <h3 class="display-1 font-weight-bold">
                  <span class="">Proyectos realizados:</span>
                </h3>
              </div>
            </v-card-title>
            <!-- card con animacion mstrando la descripción -->
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6">
                  <v-card class="elevation-0">
                    <v-card-title primary-title>
                      <div>
                        <h3 class="display-1 font-weight-bold">
                          Proyecto Animales
                        </h3>
                      </div>
                    </v-card-title>
                    <v-card-text>
                      <h4>
                        <span>
                          El proyecto consiste en una animación de una página
                          web que contiene una lista de animales, cada animal
                          tiene una descripción y una foto.
                        </span>
                      </h4>
                    </v-card-text>
                    <v-card-text>
                      <h4>HTML, CSS, JavaScript</h4>
                    </v-card-text>
                    <!-- boton al link del repositorio -->
                    <v-card-actions>
                      <v-btn
                        href="https://github.com/FerkoxGG/prueba_animales"
                        target="_blank"
                        color="primary"
                        text
                      >
                        <span>Ver en Github</span>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",

  computed: {
    ...mapState({
      fotoPerfil: (state) => state.fotoPerfil,
      fotoPerfil2: (state) => state.fotoPerfil2,
    }),
  },

  components: {},
};
</script>
