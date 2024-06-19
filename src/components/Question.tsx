import React from 'react';
import { getQuestionComponent } from './QuestionRegistry';

interface QuestionProps {
  question: any;
  onChange: (answer: any) => void;
  answer: any;
}

const Question: React.FC<QuestionProps> = ({ question, onChange, answer }) => {
  const QuestionComponent = getQuestionComponent(question.type);

  if (!QuestionComponent) {
    return <div>Неподдерживаемый тип вопроса: {question.type}</div>;
  }

  return <QuestionComponent question={question} onChange={onChange} answer={answer} />;
};

export default Question;
