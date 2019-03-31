export const state = () => ({
  atomNo: 0
});

export const mutations = {
  SET_ATOM_NO: function(state, data) {
    state.atomNo = data;
  }
};
