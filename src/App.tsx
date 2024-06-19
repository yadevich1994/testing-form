import React, { useEffect, useState,useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { LinearProgress, Box, Typography, Button, Paper, Container } from '@mui/material';
import { store } from './redux/store';
import { nextStep, previousStep, setAnswer, selectCurrentStep, selectAnswers, setStep, setAnswers } from './redux/testSlice';
import Question from './components/Question';
import StepNavigation from './components/StepNavigation';
import SubmitButton from './components/SubmitButton';
import Timer from './components/Timer';
import { saveProgress, loadProgress } from './utils/localStorage';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(selectCurrentStep);
  const answers = useSelector(selectAnswers);

  const questions = useMemo(() => [
    { type: 'single-choice', text: 'What should a frontend developer know?', options: ['HTML, CSS, JavaScript', 'Kotlin, PHP, JavaScript', 'PHP, HTML, CSS'], timeLimit: 60 },
    { type: 'multiple-choice', text: 'What should a backend developer know?', options: ['NodeJS', 'Kotlin, PHP, JavaScript', 'PHP, HTML, CSS'], timeLimit: 120 },
    { type: 'short-answer', text: 'What is your favorite programming language?', timeLimit: 90 },
    { type: 'long-answer', text: 'Describe your ideal job position.', timeLimit: 60 },
    { type: 'single-choice', text: 'Which of the following is a JavaScript framework?', options: ['React', 'Laravel', 'Django'], timeLimit: 45 },
    { type: 'multiple-choice', text: 'Which technologies are part of the MEAN stack?', options: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'React'], timeLimit: 120 },
    { type: 'short-answer', text: 'Explain the purpose of a state in React.', timeLimit: 90 },
    { type: 'long-answer', text: 'Discuss the benefits of using TypeScript over JavaScript.', timeLimit: 60 },
    { type: 'rating', text: 'Rate your satisfaction with your current job.', timeLimit: 30 },
  ], []);

  const [timeLeft, setTimeLeft] = useState(questions[currentStep].timeLimit);
  const [timeIsUp, setTimeIsUp] = useState(false);

  useEffect(() => {
    const savedProgress = loadProgress();
    if (savedProgress) {
      dispatch(setStep(savedProgress.currentStep));
      dispatch(setAnswers(savedProgress.answers));
    }
  }, [dispatch]);

  useEffect(() => {
    saveProgress({ currentStep, answers });
  }, [currentStep, answers]);

  useEffect(() => {
    setTimeLeft(questions[currentStep].timeLimit);
  }, [currentStep, questions]);

  const handleAnswerChange = (answer: any) => {
    const updatedAnswers = { ...answers, [currentStep]: answer };
    dispatch(setAnswer({ step: currentStep, answer }));
    saveProgress({ currentStep, answers: updatedAnswers });
  };

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handlePrevious = () => {
    dispatch(previousStep());
  };

  const handleTimeComplete = () => {
    console.log('Time is up for question:', questions[currentStep].text);
    setTimeIsUp(true);
  };

  const handleClearAndRestart = () => {
    localStorage.removeItem('testProgress');
    dispatch(setStep(0));
    dispatch(setAnswers([]));
    setTimeIsUp(false);
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
      <Paper elevation={4} style={{ padding: '20px', maxWidth: '600px', margin: 'auto', marginTop: '100px' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Тестирование
        </Typography>
        {timeIsUp ? (
          <Typography variant="h6" color="error" align="center" gutterBottom>
            Извините, время вышло.
          </Typography>
        ) : (
          <>
            <Box display="flex" alignItems="center" mb={2}>
              <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" value={progress} />
              </Box>
              <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${currentStep + 1}/${questions.length}`}</Typography>
              </Box>
            </Box>
            <Timer key={currentStep} initialTime={timeLeft} onComplete={handleTimeComplete} />
            <Question
              question={questions[currentStep]}
              onChange={handleAnswerChange}
              answer={answers[currentStep] || ''}
            />
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button 
                onClick={handleClearAndRestart}  
                variant="contained"
                color="primary"
                sx={{ minWidth: '120px' }}>
                Очистить
              </Button>
              <StepNavigation
                currentStep={currentStep}
                totalSteps={questions.length}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
              {currentStep === questions.length - 1 && (
                <SubmitButton onSubmit={() => {
                  console.log('Submitting answers:', answers);
                  localStorage.removeItem('testProgress');
                }} />
              )}
            </Box>

          </>
        )}
      </Container>
    </Paper>
  );
};

const Root: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
