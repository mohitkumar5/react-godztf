import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./src/assests/style.css";
import quizService from "./src/quizService";
class Quizbee extends Component{
  state={
       questionBank: [],
       score: 0,
       responses: 0
  };
  getQuestions = () => {
    quizService().then(question =>{
      this.setState(
        {
          questionBank: question
        }
      );
    });
  };
  computeAnswer =(answer,correctAnswer)=> {
    if(answer==correctAnswer){
       this.setState({score: this.state.score +1});
    }
    this .setState({response: this.state.responses<5 ? this.state.responses+1 : 5})
  }
  componentDidMount(){
    this.getQuestions();
  }
    render()
    {
      return(
        < div className="container">
        < div className="title">Sterling</div>
        {this.state.questionBank.length > 0 && this.state.questionBank.map(({question,answers,correct,questionId})=> (<QuestionBox 
        question ={question}
        options ={answers}
        key = {questionId}
        selected={answer=>this.computeAnswer(answer,correct)}
        /> )
                )}        </div>
      );
    }
}
ReactDOM.render(<Quizbee />,document.getElementById("root"));