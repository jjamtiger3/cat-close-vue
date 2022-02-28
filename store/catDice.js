export const state = () => ({
    spinning: false,
    reSelected: false
})

export const mutations = {
    setSpinning (state, value) {
        state.spinning = value;
    },
    getSpinning (state) {
      return state.spinning;
    },
    setReSelected (state, value) {
        state.reSelected = value;
    }
}
