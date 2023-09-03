
import { ADD_SEARCH_VALUE} from '../actions/SearchActionType';

const initialState = {
  searchValues: [],
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH_VALUE:
      return {
        ...state,
        searchValues: [...state.searchValues, action.payload],
      };  
      
    default:
      return state;
  }
};

export default SearchReducer;
