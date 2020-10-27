import CARDS from '../consts';
import { shuffle } from '../utils';

const shuffled = shuffle(CARDS);

const initialState = {
  cards: shuffled,
  isWin: false,
  compare: [],
};

const cardsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'OPEN_CARD':
      return Object.assign({}, state, {
        cards: state.cards.map(el =>
          el.id === action.id
            ? {...el, isOpen: !el.isOpen}
            : el
        )
      })

    case 'COMPARE_OPENED':
      if(Array.isArray(action.payload)) {
         return Object.assign({}, state, {
        compare: []
      })
      } return Object.assign({}, state, {
        compare: [...state.compare, action.payload]
      })

    case 'SET_MATCHED':
      return Object.assign({}, state, {
        cards: state.cards.map(el =>
          el.id === action.id
            ? {...el, isMatch: !el.isMatch}
            : el
        )
      })

    case 'WIN':
      return Object.assign({}, state, {
        isWin: action.payload
      })

    case 'SHUFFLE_CARDS':
      return Object.assign({}, state, {
        cards: shuffled
      })

    default:
      return state
   }
};

export default cardsReducer
