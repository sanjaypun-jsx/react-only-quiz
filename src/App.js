import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Questions from "./Components/Questions";
import Quiz from "./Components/Quiz";
import { QuizProvider } from "./Components/QuestionContext";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { ScoreProvider } from "./Components/ScoreContext";

export default function App() {
  return (
    <div className="App" style={{ margin: 0 }}>
      <Router>
        <QuizProvider>
          <ScoreProvider>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route path="/questions" component={Questions} />
            <Route path="/quiz" component={Quiz} />
          </ScoreProvider>
        </QuizProvider>
      </Router>
    </div>
  );
}
