export const state = () => ({
  test: 'hi from root store',
  starters: [],
  soups: [],
  all_main_menus: [],
})

export const getters = {
  getTest: (state) => {
    return state.test
  },
  getStarters: (state) => {
    return state.starters + ' -- from index.js'
  }
}

export const mutations = {
  set_starters(state, arg) {
    state.starters = arg[1].starters
  },
  set_soups(state, arg) {
    state.soups = arg[0].soups
  },
  set_all_main_menus(state, arg) {
    state.all_main_menus = arg
  }
}

export const actions = {
  async nuxtServerInit(store, context) {
    try {
      // let url = 'https://bangkokpavilion.co.uk/'
      const response = await context.$axios.get('assets/all_main_menus.json')
      store.commit('set_soups', response.data)
      store.commit('set_starters', response.data)
    } catch (error) {
      
    }
  }
}

// {{ $store.state.starters }} (state)  <hr />
// <!-- {{ $store.state.soups }} (state)  <hr /> -->
// {{ $store.getters.getStarters }} (getters)  <hr /> -->
// {{ $store.state.main_menu.starters }} (state) <hr /> -->
// {{ $store.getters['main_menu/getStarters'] }} (getters) <hr /> -->