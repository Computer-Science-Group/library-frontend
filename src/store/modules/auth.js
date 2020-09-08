import * as firebase from 'firebase'

const state = () => ({
  // get user from localstorage
    user: null
  })

const getters = {
  user (state) {
    return state.user
  },
  loggeIn(state){
    return !!state.user
  }
}

const mutations = {
    setUser (state, payload) {
      state.user = payload
    }
}

const actions= {
  signUserUp ({dispatch}, payload) {
    dispatch('initSharedLoading')
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .catch(error => dispatch('setSharedError', error))
  },

  signUserIn ({dispatch}, payload) {
    dispatch('initSharedLoading')
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .catch(error => dispatch('setSharedError', error))
  },

  signUserInGoogle ({dispatch}) {
    dispatch('initSharedLoading')
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .catch(error => dispatch('setSharedError', error))
  },

  signUserInFacebook ({commit, dispatch}) {
    dispatch('initSharedLoading')
    firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .catch(error => dispatch('setSharedError', error))
  },

  signUserInGithub ({dispatch}) {
    dispatch('initSharedLoading')
    firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
        .catch(error => dispatch('setSharedError', error))
  },

  signUserInTwitter ({dispatch}) {
    dispatch('initSharedLoading')
    firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider())
        .catch(error => dispatch('setSharedError', error))
  },

  resetPasswordWithEmail ({ commit, dispatch }, payload) {
    const { email } = payload
    commit('shared/setLoading', true, {root: true})
    firebase.auth().sendPasswordResetEmail(email)
        .catch(error => dispatch('setSharedError', error))
  },

  logout ({commit, dispatch}) {
    firebase.auth().signOut()
        .catch(error => dispatch('setSharedError', error))
  },

  initSharedLoading : ({commit}) => {
    commit('shared/setLoading', true, {root: true})
    commit('shared/clearError', null, {root: true})
  },

  setSharedError:({commit}, payload) =>{
    commit('shared/setLoading', false, {root: true})
    commit('shared/setError', payload, {root: true})
  },

  setUser: ({commit}, payload) => {
    commit('shared/setLoading', false, {root: true})
    let newUser = null
    console.log(payload)
    if(payload != null){
      newUser = {
        id: payload.uid,
        name: payload.displayName,
        email: payload.email,
        photoUrl: payload.photoURL
      }
    }
    commit('setUser', newUser)
  }
  }

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}