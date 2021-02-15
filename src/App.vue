<template>
  <v-app>
    <v-app-bar app color="red accent-2" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Meal Board Logo"
          class="shrink mr-2"
          contain
          src="@/assets/meal.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <router-link :to="{ name: 'Home' }" class="white--text">
        <h3>Meal Board</h3>
      </router-link>
      <v-spacer></v-spacer>
      <search-bar />
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer color="red accent-2" fixed padless>
      <v-col class="text-center" cols="12">
        Copyright &copy; {{ new Date().getFullYear() }} —
        <strong>Meal Board</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";

export default {
  name: "App",

  components: {
    SearchBar,
  },

  data: () => ({
    //
  }),
};
</script>
