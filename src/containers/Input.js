import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { compose, withHandlers, withState } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import * as Actions from './../actions';
import InputStepper from '../components/InputStepper';
import InputPaper from '../components/InputPaper';
import '../components/composing.css';

const bgStyle = {
  background: '#ECEFF1',
};

const contentStyle = { margin: '0 16px' };

const enhance = compose(
  withState('stepIndex', 'setStepIndex', 0),
  withHandlers({
    handleNext: ({ stepIndex, setStepIndex }) => {
      if (stepIndex < 2) setStepIndex(stepIndex + 1);
    },
    handlePrev: ({ stepIndex, setStepIndex }) => {
      if (stepIndex > 0) setStepIndex(stepIndex - 1);
    },
  }),
);

const Input = ({ input, words, stepIndex, setStepIndex, actions, handleNext, handlePrev }) => (
  <div className="entire-wrapper" style={bgStyle}>
    <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
      <InputStepper stepIndex={stepIndex} setStepIndex={setStepIndex} />
      <div style={contentStyle}>
        <InputPaper
          input={input}
          words={words}
          stepIndex={stepIndex}
          actions={actions}
        />
        <div style={{ marginTop: 50 }}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={handlePrev}
            style={{ background: '#ccc', marginRight: 12 }}
          />
          <RaisedButton
            label="Next"
            disabled={stepIndex === 2}
            primary
            onTouchTap={handleNext}
          />
          <Link to="/learn"><RaisedButton label="Start Now" secondary /></Link>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  words: state.words,
  input: state.input,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(enhance(Input));
