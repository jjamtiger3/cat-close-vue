export const state = () => ({
    spinning: false,
    reSelected: false
})

export const mutations = {
    setSpinning (state, value) {
        state.spinning = value;
    },
    setReSelected (state, value) {
        state.reSelected = value;
    }
}