
export const saveProgress = (progress: { currentStep: number; answers: any }) => {
  localStorage.setItem('testProgress', JSON.stringify(progress));
};

export const loadProgress = () => {
  const savedProgress = localStorage.getItem('testProgress');
  return savedProgress ? JSON.parse(savedProgress) : null;
};
