export const state = () => ({
    lift: 0
})

export const mutations = {
    incrementLift (state) {
        state.lift += 1;
    }
}