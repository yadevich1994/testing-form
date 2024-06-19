import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TestState {
  currentStep: number;
  answers: any[];
}

const initialState: TestState = {
  currentStep: 0,
  answers: [],
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    previousStep: (state) => {
      state.currentStep -= 1;
    },
    setAnswer: (state, action: PayloadAction<{ step: number; answer: any }>) => {
      state.answers[action.payload.step] = action.payload.answer;
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    setAnswers: (state, action: PayloadAction<any[]>) => {
      state.answers = action.payload;
    },
  },
});

export const { nextStep, previousStep, setAnswer, setStep, setAnswers } = testSlice.actions;
export const selectCurrentStep = (state: any) => state.test.currentStep;
export const selectAnswers = (state: any) => state.test.answers;
export default testSlice.reducer;
