import { SELECT_COUNTRY } from "../actions/personAction"

const initialState = { country: 'Colombia' }

const PersonReducer = (state = initialState, action: any) =>{
  switch (action.type) {
    case SELECT_COUNTRY:
      return { ...state, country: action.value }
  
    default:
      return state
  }
}

export default PersonReducer;