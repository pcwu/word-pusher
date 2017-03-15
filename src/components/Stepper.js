import React from 'react';
import { Step, Stepper, StepButton } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import InputWord from './InputWord';
import './composing.css';

const bgStyle = {
  background: '#ECEFF1',
};

const paperStyle = {
  minHeight: 500,
  width: '100%',
};

class HorizontalNonLinearStepper extends React.Component {
  constructor(props) {
    super(props);
    this.actions = props.actions;
    this.state = {
      stepIndex: 0,
      textarea: '',
      input: [],
    };
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Paper style={paperStyle} zDepth={3} className="padding-sm">
            <TextField
              hintText="paste your text or article"
              onChange={this.handleOnChange}
              value={this.state.textarea}
              multiLine
              fullWidth
            /><br />
          </Paper>
        );
      case 1:
        return (
          <Paper style={paperStyle} zDepth={3} className="padding-sm">
            {this.state.input.map(word => <InputWord word={word} />)}
            <br />
          </Paper>
        );
      case 2:
        return (
          <Paper style={paperStyle} zDepth={3} className="padding-sm">
            <RaisedButton label="Start to memorize and practice" secondary />
          </Paper>
        );
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  handleNext = () => {
    const { stepIndex } = this.state;
    if (stepIndex === 0) {
      this.setState({ input: this.state.textarea.split(/([^A-Za-zÄÖÜäöüß])/).filter(text => text) })
      this.actions.addInput(this.state.input);
    }
    if (stepIndex < 2) {
      this.setState({ stepIndex: stepIndex + 1 });
    }
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  handleOnChange = (event) => {
    this.setState({
      textarea: event.target.value,
    });
  };

  render() {
    const { stepIndex } = this.state;
    const contentStyle = { margin: '0 16px' };

    return (
      <div className="entire-wrapper" style={bgStyle}>
        <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
          <Stepper linear={false} activeStep={stepIndex}>
            <Step>
              <StepButton onClick={() => this.setState({ stepIndex: 0 })}>
                Import text or article
              </StepButton>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({ stepIndex: 1 })}>
                Select unknown vocabulary
              </StepButton>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({ stepIndex: 2 })}>
                Start to memorize and practice
              </StepButton>
            </Step>
          </Stepper>
          <div style={contentStyle}>
            <p>{this.getStepContent(stepIndex)}</p>
            <div style={{ marginTop: 50 }}>
              <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev}
                style={{ background: '#ccc', marginRight: 12 }}
              />
              <RaisedButton
                label="Next"
                disabled={stepIndex === 2}
                primary
                onTouchTap={this.handleNext}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalNonLinearStepper;
