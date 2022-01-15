export const state = () => ({
    lift: 0,
    cardIsExist: false
})

export const mutations = {
    incrementLift (state) {
        state.lift += 1;
    },
    setCardIsExist (state, value) {
        state.cardIsExist = value;
    }
}