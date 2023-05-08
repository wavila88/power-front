import { SELECT_COUNTRY, SET_GRANTERS, SET_POWER_PEOPLE, SET_DESCRIPTION, SET_DETAILS } from "../actions/powerAction"

const initialState = { 
  country: 'Colombia',
  granters: [],
  powerPeople: [],
  description: ''
}

const PowerReducer = (state = initialState, action: any) =>{
  switch (action.type) {
    case SELECT_COUNTRY:
      return { ...state, country: action.value }
    case SET_GRANTERS:
      return { ...state, granters: action.value}
    case SET_POWER_PEOPLE:
      return { ...state, powerPeople: action.value}
    case SET_DESCRIPTION:
      return { ...state, description: action.value}
    case SET_DETAILS:
      return { ...state, details: action.value}
  
    default:
      return state
  }
}

export default PowerReducer;