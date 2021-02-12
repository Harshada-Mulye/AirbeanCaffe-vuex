import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kaffe:[
      {
      id:1,
      name:"BryggKaffe",
      price:49,
      desc:"Bryggd på månadens bönor"
      },
      {
        id:2,
        name:"Caffe Dopio",
        price:49,
        desc:"Bryggd på månadens bönor"
        },
      {
          id:3,
          name:"Cappucino",
          price:49,
          desc:"Bryggd på månadens bönor"
          },
          {
            id:4,
            name:"Latte Machiato ",
            price:49,
            desc:"Bryggd på månadens bönor"
            },
            {
              id:5,
              name:"Kaffe Latte ",
              price:49,
              desc:"Bryggd på månadens bönor"
              },   
              {
                id:6,
                name:"Cortado ",
                price:39,
                desc:"Bryggd på månadens bönor"
                }
    ]
  },
  getters:{
    kaffe:state=>{
    return state.kaffe;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
  })
