import { SELECT_COUNTRY, SET_GRANTERS, SET_POWER_PEOPLE } from "../actions/powerAction"

const initialState = { 
  country: 'Colombia',
  granters: [],
  powerPeople: []
}

const PowerReducer = (state = initialState, action: any) =>{
  switch (action.type) {
    case SELECT_COUNTRY:
      return { ...state, country: action.value }
    case SET_GRANTERS:
      return { ...state, granters: action.value}
    case SET_POWER_PEOPLE:
      return { ...state, powerPeople: action.value}
  
    default:
      return state
  }
}

export default PowerReducer;