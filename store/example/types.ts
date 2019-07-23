export const TESTING_STORE = 'EX/TEST_STORE';

export interface testingStoreType {
  type: typeof TESTING_STORE;
}

export interface ExampleStore {
  forTest: boolean;
}