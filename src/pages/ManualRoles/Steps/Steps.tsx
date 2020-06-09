import React, { useState, useCallback } from 'react';
import { Stepper, Step, StepLabel, StepContent } from '@material-ui/core';
import GameStep from 'shared/components/GameStep';
import InputRolesForm from './InputRolesForm';

const StepsComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = useCallback(() => {
    setActiveStep(step => step + 1);
  }, []);

  return (
    <Stepper activeStep={activeStep} orientation='vertical'>
      <Step>
        <StepLabel>Присвоєння ролей</StepLabel>
        <StepContent>
          <InputRolesForm goToNextStep={handleNextStep} />
        </StepContent>
      </Step>
      <Step>
        <StepLabel>Гра</StepLabel>
        <StepContent>
          <GameStep />
        </StepContent>
      </Step>
    </Stepper>
  );
};

export default StepsComponent;
