import React, { useEffect, useState } from 'react';

interface TimerProps {
  initialTime: number;
  onComplete: () => void;
}

const Timer: React.FC<TimerProps> = ({ initialTime, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete();
    } else {
      const timer = setTimeout(() => setTimeLeft(prevTime => prevTime - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, onComplete]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <p>Времени осталось: {formatTime(timeLeft)}</p>
    </div>
  );
};

export default Timer;
