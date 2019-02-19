import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import * as Actions from './../actions';
import InputStepper from '../components/input/InputStepper';
import InputPaper from '../components/input/InputPaper';
import '../css/composing.css';

const Input = ({ input, words, actions }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const handleNext = () => (stepIndex < 2) && setStepIndex(stepIndex + 1);
  const handlePrev = () => (stepIndex > 0) && setStepIndex(stepIndex - 1);

  return (
    <div className="entire-wrapper" style={{ background: '#ECEFF1' }}>
      <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
        <InputStepper stepIndex={stepIndex} setStepIndex={setStepIndex} />
        <div style={{ margin: '0 16px' }}>
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
              onClick={handlePrev}
              style={{ background: '#ccc', marginRight: 12 }}
            />
            {stepIndex !== 2 ?
              <RaisedButton
                label="Next"
                disabled={stepIndex === 2}
                primary
                onClick={handleNext}
                style={{ background: '#ccc', marginRight: 12 }}
              /> : null
            }
            { stepIndex === 2 && words.length !== 0 ?
              <Link to="/learn">
                <RaisedButton
                  label="Start Now"
                  secondary
                />
              </Link> : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = state => ({
  words: state.words,
  input: state.input,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
