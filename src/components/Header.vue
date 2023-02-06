<template>
  <nav class="navbar navbar-dark bg-dark">
    <v-toolbar-title class="mx-4">
      <span class="white--text">Portafolio</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-bottom-navigation v-model="value" :background-color="color" dark shift>
      <v-btn
        icon
        @click="$router.push('/')"
        :to="{ name: 'home' }"
        :active="$route.name === 'home'"

      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        icon
        @click="$router.push('/about')"
        :to="{ name: 'about' }"
        :active="$route.name === 'about'"

      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </nav>
</template>

<script>
export default {
  data: () => ({ value: 1 }),

  computed: {
    color() {
      switch (this.value) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        default:
          return "blue-grey";
      }
    },
  },
};
</script>

<style>
</style>