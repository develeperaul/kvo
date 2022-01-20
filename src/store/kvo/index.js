import { getkvo, getkvolist  } from "src/api/kvo";

export default {
  namespaced: true,
  state: () => ({ 
      kvo: null,
      kvo_list: [],
   }),
  mutations:{
    addkvo(state, res){
        const id = state.kvo_list.length+1 
        
        state.kvo_list.push({name: `название ${id}`,id,...res, status: 'Отправлено в обработку'})
    }
  },

  getters:{
    kvoList(state){
      return state.kvo_list
    }
  },

  actions: {
      async kvopage({commit}, id){
        const res = await getkvo(id)
        commit('addkvo', res)
        console.log(res)
      },
        async kvolist({commit}){
            // const res = await getkvolist()
            console.log(res)
      },
      async kvocreate({commit}, obj){
        commit('addkvo', obj)
      }
  }

}


  
  
