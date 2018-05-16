
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

export default () => {
  return new Vuex.Store({
    state: {
      show: 1,
      // user: {},
      // articles: {}
    },
    mutations,
    actions
  })
}

