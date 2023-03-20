import { createStore } from 'vuex'

export default createStore({
  state: {
    previamente:null,
    pantallas:'',
    operador:null,
    operadorClick:false
  },
  getters: {
  },
  mutations: {
    setPantalla(state,payload){
      state.pantallas = payload
    },
    setNeativo(state,payload){
      state.pantallas = payload
    },
    setOperador(state,payload){
      state.operador = payload
    }
  },
  actions: {
    limpiar({state}){
      state.pantallas = ''
    },
    negativa({commit,state}){
      let pantalla = state.pantallas;
      const negativo = pantalla.charAt(0) === '-' ?
      pantalla.slice(1): `-${pantalla}`
      commit('setNeativo',negativo)
    },
    porciento({commit,state}){
      let pantalla = state.pantallas
      pantalla = `${parseFloat(pantalla)/100}`
      commit('setPantalla',pantalla)
    },
    agregarNumero({commit,state},num){
      if(state.operadorClick){
        state.pantallas = ''
        state.operadorClick = false
      }
      let cadenaNumeros = state.pantallas
      cadenaNumeros = `${cadenaNumeros}${num}`
      commit('setPantalla',cadenaNumeros)
    },
    previo({state}){
      state.previamente = state.pantallas
      state.operadorClick = true
    },
    division({commit,state,dispatch}){
      let valor = state.operador
      dispatch('previo')
      valor = (a,b) => b/a
      commit('setOperador',valor)
    },
    multiplicacion({commit,state,dispatch}){
      let valor = state.operador
      dispatch('previo')
      valor = (a,b) => a*b
      commit('setOperador',valor)
    },
    resta({commit,state,dispatch}){
      let valor = state.operador
      dispatch('previo')
      valor = (a,b) => b-a
      commit('setOperador',valor)
    },
    suma({commit,state,dispatch}){
      let valor = state.operador
      dispatch('previo')
      valor = (a,b) => a+b
      commit('setOperador',valor)
    },
    punto({state,dispatch}){
      if(state.pantallas.indexOf('.') === -1){
        dispatch('agregarNumero',('.'))
      }
    },
    igual({state,commit}){
      let pantalla = state.pantallas
      let operador = state.operador
      pantalla = `${operador(
        parseFloat(state.pantallas),
        parseFloat(state.previamente)
      )}`
      commit('setPantalla',pantalla)
    }
  },
  modules: {
  }
})
