import axios from 'axios';

const BASE_URL = 'http://localhost:3000'

// initial state
const state = () => ({
  all: [],
  filterKey: '',
})

// getters
const getters = {
  filteredItems: state => state.all
      .filter(book => book.title
          .toLowerCase()
          .includes(state.filterKey.toLowerCase())),
  findById: state => id => state.all
      .find(book => book.id == id),
}

// actions
const actions = {
  async getAllItems({commit}) {
    let items = (await axios.get(`${BASE_URL}/books`)).data;
    commit('setItems', items);
  },
  async addItem({commit, state}, body) {
    let item = ( await axios.post(`${BASE_URL}/books`, body)).data
    let items = state.all;
    items.push(item);
    commit('setItems', items);
  },
  async updateItem({commit, state}, body) {
    let item = ( await axios.put(`${BASE_URL}/books/${body.id}`, body)).data
    let items = state.all;
    // replace old item with its new value
    commit('setItems', items);
  },
  async removeItem({commit, state}, id) {
    let item = ( await axios.delete(`${BASE_URL}/books/${id}`)).data
    let items = state.all.filter(item => item.id != id);
    // replace old item with its new value
    commit('setItems', items);
  }
}

// mutations
const mutations = {
  setItems(state, items) {
    state.all = items
  },

  setFilterKey(state, filterKey) {
    state.filterKey = filterKey
  },

  decrementBookInventory(state, {id}) {
    const book = state.all.find(book => book.id === id)
    book.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}