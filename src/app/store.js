import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducer from '../features/movie/movieSlice'
import userSlice from "../features/user/User"
import userReducer from  "../features/user/User"

export const store = configureStore({
  reducer: {
    movie:movieReducer,
    user:userSlice,
  },
});
