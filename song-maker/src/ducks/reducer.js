import columnsData from './columnsData';

let initialState = {
  tempo: 120,
  columnsData: columnsData,
  playing: false
};

const UPDATE_COLUMNS_DATA = "UPDATE_COLUMNS_DATA",
      CLEAR_COLUMNS_DATA = "CLEAR_COLUMNS_DATA",
      UPDATE_TEMPO = "UPDATE_TEMPO",
      UPDATE_PLAYING = "UPDATE_PLAYING";

export default function reducer(state = initialState, action){
  let { type, payload } = action;
  let newData = [...state.columnsData];
  switch ( type ) {
    case UPDATE_COLUMNS_DATA:
      let { col, row, val } = payload;
      newData[col][row] = val;
      return { ...state, columnsData: newData };
    case CLEAR_COLUMNS_DATA:
      return { ...state, columnsData: newData.map(col => col.map(row => false)) }
    case UPDATE_TEMPO:
      return { ...state, tempo: payload };
    case UPDATE_PLAYING:
      return { ...state, playing: payload };
    default:
      return state;
  }
}

export function updateColumnsData(col, row, val){
  return {
    type: UPDATE_COLUMNS_DATA,
    payload: { col, row, val }
  }
}

export function clearColumnsData(){
  return {
    type: CLEAR_COLUMNS_DATA
  }
}

export function updateTempo(tempo){
  return {
    type: UPDATE_TEMPO,
    payload: tempo
  }
}

export function updatePlaying(bool){
  return {
    type: UPDATE_PLAYING,
    payload: bool
  }
}
