<template>
  <div class="home">
    <meal />
     <v-pagination
      v-model="page"
      :length="1"
    ></v-pagination>
  </div>
</template>

<script>
import Meal from "../components/Meal.vue";

export default {
  name: "Home",
   data () {
      return {
        page: 1,
      }
    },
  components: {
    Meal,
  },
};
</script>
