import { SET_SHOW_LOADING, SET_BANNER } from "../actions/utilsAction"

const initialState = { 
 loading: false,
 bannerMessages: []
}

const UtilsReducer = (state = initialState, action: any) =>{
  switch (action.type) {
    case SET_SHOW_LOADING:
      return { ...state, loading: action.value }
    case SET_BANNER:
      return { ...state, bannerMessages: action.value}
    default:
      return state
  }
}

export default UtilsReducer;