import React from 'react';
import SingleChoiceQuestion from './SingleChoiceQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import ShortAnswerQuestion from './ShortAnswerQuestion';
import LongAnswerQuestion from './LongAnswerQuestion';

const questionComponents: { [key: string]: React.FC<any> } = {
  'single-choice': SingleChoiceQuestion,
  'multiple-choice': MultipleChoiceQuestion,
  'short-answer': ShortAnswerQuestion,
  'long-answer': LongAnswerQuestion,
};

export const getQuestionComponent = (type: string) => {
  return questionComponents[type] || null;
};

export const registerQuestionComponent = (type: string, component: React.FC<any>) => {
  questionComponents[type] = component;
};
