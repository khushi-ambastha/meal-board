<template>
  <div>
    <form id="searchbar" class="form-inline my-3">
      <input
        v-model="mealName"
        class="form-control white col-12"
        placeholder="Search Meal"
        list="meals"
      />
      <datalist id="meals">
        <option v-for="(meal, index) in meals" :key="index">
          {{ meal.strMeal }}
        </option>
      </datalist>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      mealName: "",
    };
  },
  watch: {
    mealName() {
      if (!this.mealName) {
        return;
      }
      if (this.mealName.length !== 1) {
        this.searchMeal();
      } else {
        this.searchMealByKey();
      }
    },
  },

  methods: {
    searchMeal() {
      this.$store.dispatch("fetchMealByName", this.mealName);
    },
    searchMealByKey() {
      this.$store.dispatch("fetchMealByKey", this.mealName);
    },
  },
  computed: {
    meals() {
      return this.$store.state.meals;
    },
  },
};
</script>

<style></style>
