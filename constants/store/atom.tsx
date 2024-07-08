import { atom } from 'recoil';

export const showScannerState = atom({
  key: 'showScannerState',
  default: false,
});

export const currentQuestionNumber = atom({
  key: 'currentQuestionNumber',
  default: 0,
});

export const showIntroState = atom({
  key: 'showIntroState',
  default: true,
});


export const showSuccessState = atom({
  key: 'showSuccessState',
  default: false,
});



// Define other atoms for each piece of state in a similar manner
