import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios';

export default new Vuex.Store({
  state: {
    meal: {},
    meals: [],
  

  },
  mutations: {

    setMeal(state, meal) {
      state.meal = meal
    },

    setMeals(state, meals) {
      state.meals = meals
    }
   
 },
  actions: {

    async fetchMeal({ commit }) {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .catch(error => { console.log(error) })

      commit('setMeal', response.data.meals[0]);
      

    },

    async fetchMealByName({ commit }, mealName) {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + mealName)
      .catch(error => { console.log(error) });
      
      commit('setMeal', response.data.meals[0]);

    },

    async fetchMealByKey({ commit }, mealName) {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=' + mealName)
      .catch(error => { console.log(error) });
     
      commit('setMeals', response.data.meals);

    }
  },
  modules: {
  }
})
