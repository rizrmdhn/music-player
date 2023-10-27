import {useSelector} from 'react-redux';
import {RootState} from '../states';
import {DetailSongState} from '../states/details/types';

function useSelectState(state: string) {
  const detailSong = useSelector<RootState, DetailSongState>(
    state => state.detailSong,
  );

  switch (state) {
    case 'detailSong':
      return detailSong;
    default:
      return null;
  }
}

export default useSelectState;
