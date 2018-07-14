//initial state
const initialState = {
  propName: '',
  addInput: '',
  cityInput: '',
  stateInput: '',
  zipInput: '',
  imgUrl: '',
  mortAmt: '',
  monthlyRent: ''
};

//constants
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMAGE = 'UPDATE_IMAGE';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';

//action creators
export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  };
}

export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}

export function updateState(state) {
  return {
    type: UPDATE_STATE,
    payload: state
  };
}

export function updateZip(zip) {
  return {
    type: UPDATE_ZIP,
    payload: zip
  };
}

export function updateImage(img) {
  return {
    type: UPDATE_IMAGE,
    payload: img
  };
}

export function updateMortgage(mortgage) {
  return {
    type: UPDATE_MORTGAGE,
    payload: mortgage
  };
}

export function updateRent(rent) {
  return {
    type: UPDATE_RENT,
    payload: rent
  };
}

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        propName: action.payload
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        addInput: action.payload
      };
    case UPDATE_CITY:
      return {
        ...state,
        cityInput: action.payload
      };
    case UPDATE_STATE:
      return {
        ...state,
        stateInput: action.payload
      };
    case UPDATE_ZIP:
      return {
        ...state,
        zipInput: action.payload
      };
    case UPDATE_IMAGE:
      return {
        ...state,
        imgUrl: action.payload
      };
    case UPDATE_MORTGAGE:
      return {
        ...state,
        mortAmt: action.payload
      };
    case UPDATE_RENT:
      return {
        ...state,
        monthlyRent: action.payload
      };
    default:
      return state;
  }
}
