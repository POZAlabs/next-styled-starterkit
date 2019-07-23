import { ExampleStore, testingStoreType, TESTING_STORE } from "./types";


export const initialState: ExampleStore = {
  forTest: false
}


export const reducer = (state = initialState, action: testingStoreType): ExampleStore => {
  switch (action.type) {
    case TESTING_STORE: {
      return { ...state, forTest: !state.forTest }
    }

    default: {
      return { ...state }
    }
  }
}