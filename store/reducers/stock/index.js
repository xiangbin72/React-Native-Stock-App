import { Actions } from '../../../constants'

const initialState = {
  data: {},
  chartLoading: false,
  loading: false,
  error: false,
  range: null
}

export const stock = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_STOCK:
      return { ...state, loading: true, error: false, range: action.payload.range }
    case Actions.GET_STOCK_SUCCESS:
      return { ...state, loading: false, data: action.payload.data }
    case Actions.GET_STOCK_FAIL:
      return { ...state, loading: false, error: 'No results found.' }
    case Actions.GET_STOCK_CHART:
      return { ...state, chartLoading: true, error: false, range: action.payload.range }
    case Actions.GET_STOCK_CHART_SUCCESS:
      return { ...state, chartLoading: false, data: action.payload.data }
    case Actions.GET_STOCK_CHART_FAIL:
      return { ...state, chartLoading: false, error: 'No results found.' }
    default:
      return state
  }
}
