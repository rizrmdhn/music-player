import {AnyAction, configureStore} from '@reduxjs/toolkit';
import thunk, {ThunkDispatch} from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import detailSongReducer from './details/reducer';

const detailSongConfig = {
  key: 'detailSong',
  storage: AsyncStorage,
};

const persistedDetailSongReducer = persistReducer(
  detailSongConfig,
  detailSongReducer,
);

const store = configureStore({
  reducer: {
    detailSong: persistedDetailSongReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

const persistor = persistStore(store);

export {store, persistor};
