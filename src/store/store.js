// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialDataState = {
  data: [],
  individualData: undefined,
  isLoading: true,
};

const dataSlice = createSlice({
  name: 'userData',
  initialState: initialDataState,
  reducers: {
    setData(state, action) {
      state.data.push(action.payload.data);
      state.nou = action.payload.nou;
    },
    setIndividualData(state, action) {
      state.individualData = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

// const store = createStore(dataReducer);
const store = configureStore({
  reducer: dataSlice.reducer,
});

export const dataActions = dataSlice.actions;
export default store;
