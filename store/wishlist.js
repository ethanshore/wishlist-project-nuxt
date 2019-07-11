export const state = () => ({
  wishList: []
})

export const mutations = {
  ADD (state, item) {
    state.wishList.push(item)
  },
  REMOVE (state, item) {
    state.wishList.splice(state.wishList.indexOf(item), 1)
  }
}

export const actions = {
  ADDACTION: (context, item) => {
    context.commit('ADD', item)
  },
  REMOVEACTION: (context,item) => {
    context.commit('REMOVE', item)
  }
}
