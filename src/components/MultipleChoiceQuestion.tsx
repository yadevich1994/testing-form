import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

interface MultipleChoiceQuestionProps {
  question: {
    text: string; 
    options: string[]; 
};
  onChange: (answers: any) => void;
  answer: string[];
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({ question, onChange, answer = [] }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      onChange([...answer, value]);
    } else {
      onChange(answer.filter((ans: string) => ans !== value));
    }
  };

  return (
    <div>
      <h4>{question.text}</h4>
      <FormGroup>
      {question.options.map((option: string) => (
        <FormControlLabel
          key={option}
          control={<Checkbox checked={answer.includes(option)} onChange={handleChange} value={option} />}
          label={option}
        />
      ))}
    </FormGroup>

    </div>
    
  );
};

export default MultipleChoiceQuestion;
