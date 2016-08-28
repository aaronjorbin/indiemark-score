import React, { Component } from 'react';
import baseScore from './baseScore';
import './App.css';

class App extends Component { 
  constructor(){
	super();
	this.state = {
		score: 0
	}
	this.handleScore = this.handleScore.bind(this);
	this.renderScore = this.renderScore.bind(this);
  }
  handleScore( e ){
	  let changeAmount = parseFloat( e.target.value, 10 );
	  let scoreNow = this.state.score;
	  let newScore;
	  if ( e.target.checked ){
		newScore = scoreNow + changeAmount;	
	  } else {
		newScore = scoreNow - changeAmount;	
	  }
	  console.log([ changeAmount, scoreNow, newScore, e.target.checked, e] );
	  this.setState({
		score:  newScore
	  });

  }
  renderScore(){
	if ( this.state.score >= 1 ){
		return this.state.score.toPrecision(2);
	} else {
		return this.state.score.toPrecision(1)
	}
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>What is your IndieMark Score?</h2>
		  <h3>{this.renderScore()}</h3>
        </div>
			{ baseScore.map( level => {
				return <div key={level[0]}>
					<h2>{level[0]}</h2>
					<ul>
					{level[1].map( s => {
						return <li key={s[0]}  ><label> {s[0]}
							<input 
								type="checkbox" 
								value={s[1]} 
								onChange={ this.handleScore }
							/>
							</label>
						</li>
					})}
					</ul>
				</div>
			})}
      </div>
    );
  }
}

export default App;
