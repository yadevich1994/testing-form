import React from 'react';
import { TextField } from '@mui/material';

interface ShortAnswerQuestionProps {
  question: any;
  onChange: (answer: string) => void;
  answer: string;
}

const ShortAnswerQuestion: React.FC<ShortAnswerQuestionProps> = ({ question, onChange, answer = '' }) => {
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
      />
    </div>
    
  );
};

export default ShortAnswerQuestion;
