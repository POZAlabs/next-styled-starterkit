import { TESTING_STORE, testingStoreType } from './types';

export const testingStore = (): testingStoreType => {
  return {
    type: TESTING_STORE
  }
}