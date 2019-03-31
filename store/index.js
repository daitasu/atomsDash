export const state = () => ({
  atomNo: 10
});

export const mutations = {
  SET_ATOM_NO: function(state, data) {
    state.atomNo = data;
  }
};
