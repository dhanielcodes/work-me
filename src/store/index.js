import { createStore } from 'vuex'

const store = createStore({
    state:{
        questions: [
          {
            name:'lorem ipsum dolor munn fun tilsas',
            amount: '10x',
            done: true,
            info: 'lorem ipsum dolor munn fun tilsaslorem ipsum dolor munn fun tilsaslorem ipsum dolor munn fun tilsaslorem ipsum dolor munn fun tilsaslorem ipsum dolor munn fun tilsas'
          },
          {
            name:'lorem ipsum dolor munn fun tilsas',
            amount: '14x',
            done: true,
            info: 'lorem ipsum dolor munn fun tilsaslorem ipsum dolor munn fun tilsaslorem ipsum dolor munn fun tilsaslorem ipsum dolor munn fun tilsaslorem ipsum dolor munn fun tilsas'
          },{
            name:'lorem ipsum dolor munn fun tilsas',
            amount: '16x',
            done: true,
            info: 'lorem ipsum dolor munn fun tilsaslorem ipsum dolor munn fun tilsaslorem ipsum dolor munn fun tilsaslorem ipsum dolor munn fun tilsaslorem ipsum dolor munn fun tilsas'
          },
          {
            name:'lorem ipsum dolor munn fun tilsas',
            amount: '17x',
            done: true,
            info: 'lorem ipsum dolor munn fun tilsaslorem ipsum dolor munn fun tilsaslorem ipsum dolor munn fun tilsaslorem ipsum dolor munn fun tilsaslorem ipsum dolor munn fun tilsas'
          }

        ],
    }
})

export default store