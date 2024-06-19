import React from 'react';
import { TextField } from '@mui/material';

interface LongAnswerQuestionProps {
  question: any;
  onChange: (answer: string) => void;
  answer: string;
}

const LongAnswerQuestion: React.FC<LongAnswerQuestionProps> = ({ question, onChange, answer = '' }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <h4>{question.text}</h4>
      <TextField
      fullWidth
      variant="outlined"
      value={answer}
      onChange={handleChange}
      multiline
      rows={4}
    />
    </div>
   
  );
};

export default LongAnswerQuestion;
