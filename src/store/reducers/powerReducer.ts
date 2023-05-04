import { SELECT_COUNTRY, SET_GRANTERS } from "../actions/powerAction"

const initialState = { 
  country: 'Colombia',
  granters: []
}

const PowerReducer = (state = initialState, action: any) =>{
  switch (action.type) {
    case SELECT_COUNTRY:
      return { ...state, country: action.value }
    case SET_GRANTERS:
      return { ...state, granters: action.value}
  
    default:
      return state
  }
}

export default PowerReducer;