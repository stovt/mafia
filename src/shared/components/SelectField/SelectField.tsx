import * as React from 'react';
import { Field } from 'formik';
import { FormControl, FormHelperText, InputLabel } from '@material-ui/core';
import { Select } from 'formik-material-ui';

interface SelectProps {
  error?: string;
  options: JSX.Element | JSX.Element[];
  label: string;
  name: string;
  id: string;
  helperText?: string;
  disabled?: boolean;
}

const SelectField: React.FC<SelectProps> = ({
  error,
  options,
  label,
  name,
  id,
  helperText,
  disabled = false
}) => (
  <FormControl fullWidth variant='outlined' error={!!error}>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <Field
      component={Select}
      id={id}
      name={name}
      label={label}
      inputProps={{ id, name }}
      MenuProps={{
        getContentAnchorEl: null,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        }
      }}
      disabled={disabled}
    >
      {options}
    </Field>
    {(!!error || !!helperText) && <FormHelperText>{error || helperText}</FormHelperText>}
  </FormControl>
);

export default SelectField;
