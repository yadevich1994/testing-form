import React from 'react';
import { Slider, Typography } from '@mui/material';

interface RatingQuestionProps {
  question: any;
  onChange: (answer: any) => void;
  answer: number;
}

const RatingQuestion: React.FC<RatingQuestionProps> = ({ question, onChange, answer = 0 }) => {
  const handleChange = (event: any, newValue: number | number[]) => {
    onChange(newValue);
  };

  return (
    <div>
      <Typography>{question.text}</Typography>
      <Slider
        value={answer}
        onChange={handleChange}
        step={1}
        marks
        min={1}
        max={5}
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default RatingQuestion;
