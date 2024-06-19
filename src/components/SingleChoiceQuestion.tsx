import React from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';

interface SingleChoiceQuestionProps {
  question: any;
  onChange: (answer: any) => void;
  answer: string;
}

const SingleChoiceQuestion: React.FC<SingleChoiceQuestionProps> = ({ question, onChange, answer = '' }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <h4>{question.text}</h4>
      <RadioGroup onChange={handleChange} value={answer}>
      {question.options.map((option: string) => (
        <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
      ))}
    </RadioGroup>

    </div>
    
  );
};

export default SingleChoiceQuestion;
