import React from 'react';
import { Button } from '@mui/material';

interface SubmitButtonProps {
  onSubmit: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onSubmit }) => {
  return (
    <Button variant="contained" color="primary" onClick={onSubmit}>
      Отправить
    </Button>
  );
};

export default SubmitButton;
