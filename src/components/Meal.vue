<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-card v-if="meal" class="mx-auto" max-width="500">
            <img :alt="meal.strMeal" :src="meal.strMealThumb" height="500px" />
            <v-card-title class="headline font-weight-bold">
              {{ meal.strMeal }}
            </v-card-title>
            <v-card-subtitle>
              <a :href="meal.strSource"> {{ meal.strSource }}</a>
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col>
          <v-card v-if="meal" class="mx-auto" min-width="400" max-width="800">
            <v-card-text class="text--primary">
              <v-row>
                <v-col>
                  <strong>Ingredients</strong>
                  <template v-for="index in 20">
                    <li
                      class="no-list-style"
                      v-if="getIngredient(index)"
                      :key="index"
                    >
                      <v-icon icon="check"></v-icon>
                      {{ getIngredient(index) }}
                    </li>
                  </template>
                </v-col>

                <v-col>
                  <strong>Measures</strong>
                  <template v-for="index in 20">
                    <li
                      class="no-list-style"
                      v-if="getMeasure(index)"
                      :key="index"
                    >
                      {{ getMeasure(index) }}
                    </li>
                  </template>
                </v-col>
              </v-row>
              <v-row >
                <strong >Instructions</strong>
                {{ meal.strInstructions }}
              </v-row>
            </v-card-text></v-card
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Meals",

  created() {
    this.$store.dispatch("fetchMeal");
  },
  methods: {
    getIngredient(index) {
      const ingredientKey = `strIngredient${index}`;
      const ingredient = this.meal[ingredientKey];
      return ingredient && ingredient.trim();
    },
    getMeasure(index) {
      const measureKey = `strMeasure${index}`;
      const measure = this.meal[measureKey];
      return measure && measure.trim();
    },
  },
  computed: {
    meal() {
      console.log(this.$store.state.meal);
      return this.$store.state.meal;
    },
  },
};
</script>

<style scoped>
</style>