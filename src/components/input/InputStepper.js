import React from 'react';
import { Step, Stepper, StepButton } from 'material-ui/Stepper';

const InputHeader = ({ stepIndex, setStepIndex }) => (
  <Stepper linear activeStep={stepIndex}>
    <Step>
      <StepButton onClick={() => setStepIndex(0)}>
        Import text or article
      </StepButton>
    </Step>
    <Step>
      <StepButton onClick={() => setStepIndex(1)}>
        Select unknown vocabulary
      </StepButton>
    </Step>
    <Step>
      <StepButton onClick={() => setStepIndex(2)}>
        Start to memorize and practice
      </StepButton>
    </Step>
  </Stepper>
);

export default InputHeader;
