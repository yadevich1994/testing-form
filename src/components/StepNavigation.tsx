import React from 'react';
import { Button, Box } from '@mui/material';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
}

const StepNavigation: React.FC<StepNavigationProps> = ({ currentStep, totalSteps, onNext, onPrevious }) => {
  return (
    <Box display="flex" justifyContent="space-between" mt={2} gap="15px">
      <Button
        variant="contained"
        color="primary"
        disabled={currentStep === 0}
        onClick={onPrevious}
        sx={{ minWidth: '120px' }}
      >
        Предыдущий
      </Button>
      <Button
        variant="contained"
        color="primary"
        disabled={currentStep === totalSteps - 1}
        onClick={onNext}
        sx={{ minWidth: '120px' }}
      >
        Следующий
      </Button>
    </Box>
  );
};

export default StepNavigation;
