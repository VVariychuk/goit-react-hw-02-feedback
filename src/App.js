import React, { Component } from 'react';


import Container from './components/Container/Container'
import Section from './components/Section/Section'
import Statistics from './components/Statictics/Statistics'
import Notification from './components/Notification/Notification'
import FeedBackOptions from './components/FeedbackOptions/FeedBackOptions'



class FeedbackCounter extends Component {
  static defaultProps = {
    defaultGood: 0,
    defaultNeutral: 0,
    defaultBad: 0
  };

  state = {
    good: this.props.defaultGood,
    neutral: this.props.defaultNeutral,
    bad: this.props.defaultBad,
  };

  onFeedbackClick = event => {
    const name = event.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

 countTotalFeedback = () => {    
    return Object.values(this.state).reduce((acc, value)=> acc+value, 0)
  };
  
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };
  

  render() {
    return (      
      <Container >        
          <Section
            title={'Please leave feedback'}
            children={
              <FeedBackOptions
                changeValue={ this.onFeedbackClick}
              />
            }
          />        
        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ?
            <Statistics            
             good={this.state.good}
             neutral={this.state.neutral}
             bad={this.state.bad}
             totalFeedback={this.countTotalFeedback()}
             positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            /> :
            <Notification message="No feedback given"/>
            }          
          </Section>
      </Container>      
    )
  };

};

export default FeedbackCounter;