import React from 'react';
import ReactDOM from 'react-dom';
import Root from './App';
import { registerQuestionComponent } from './components/QuestionRegistry';
import RatingQuestion from './components/RatingQuestion';

registerQuestionComponent('rating', RatingQuestion);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
