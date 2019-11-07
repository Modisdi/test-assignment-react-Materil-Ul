export const initialAcademies = {
  academies: [],
  hasMore: false,
  isLoading: false,
  isInitialLoading: true,
}

// types
export const FETCH_ACADEMIES = 'FETCH_ACADEMIES'
export const FETCH_ACADEMIES__LOADING = 'FETCH_ACADEMIES__LOADING'
export const FETCH_ACADEMIES__SUCCESS = 'FETCH_ACADEMIES__SUCCESS'
export const FETCH_ACADEMIES__FAILURE = 'FETCH_ACADEMIES__FAILURE'

export const CLEAR_ACADEMIES_STORE = 'CLEAR_ACADEMIES_STORE'
export const CLEAR_ACADEMIES_STORE__SUCCESS = 'CLEAR_ACADEMIES_STORE__SUCCESS'
export const CLEAR_ACADEMIES_STORE__FAILURE = 'CLEAR_ACADEMIES_STORE__FAILURE'

// actions
export const fetchAcademies = () => (
  {
    type: FETCH_ACADEMIES,
  })

export const clearAcademiesStore = () => (
  {
    type: CLEAR_ACADEMIES_STORE,
  })


// reducer
export default function academiesReducer(state = initialAcademies, action) {
  switch (action.type) {
    case FETCH_ACADEMIES__LOADING:
    case FETCH_ACADEMIES__SUCCESS:
    case CLEAR_ACADEMIES_STORE__SUCCESS: {
      return {
        ...state,
        ...action.payload,
        error: undefined,
      }
    }

    case FETCH_ACADEMIES__FAILURE:
    case CLEAR_ACADEMIES_STORE__FAILURE: {
      return {
        ...state,
        ...action.payload,
        error: action.error,
      }
    }
    default:
      return state
  }
}
