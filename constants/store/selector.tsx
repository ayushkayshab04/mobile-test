import { selector } from 'recoil';
import { currentQuestionNumber, showIntroState, showScannerState, showSuccessState } from './atom';

export const selectShowScanner = selector({
  key: 'selectShowScanner',
  get: ({ get }) => {
    return get(showScannerState);
  },
});

export const selectShowIntroState = selector({
  key: 'selectShowIntroState',
  get: ({ get }) => {
    return get(showIntroState);
  },
  set: ({ set }, newValue) => {
    set(showIntroState,newValue);
  },
});

export const selectCurrentQuestionNumber = selector({
  key: 'selectCurrentQuestionNumber',
  get: ({ get }) => {
    return get(currentQuestionNumber);
  },
  set: ({ set }, newValue) => {
    set(currentQuestionNumber, newValue);
  },
});


export const selectShowSuccess = selector({
    key: 'selectShowSuccess',
    get: ({ get }) => {
      return get(showSuccessState);
    },
  });
  


// Define other selectors similarly
