export const state = () => ({
  dark: false
})

export const getters = {
  dark: (state) => state.dark
}

export const mutations = {
  setDark: (state, bool) => {
    state.dark = bool
  }
}