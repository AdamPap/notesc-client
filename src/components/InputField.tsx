import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const [field, { error }] = useField(props);

    return (
      <FormControl isInvalid={!!error} display="flex" alignItems="center">
        <Input
          ref={ref}
          {...field}
          {...props}
          size="sm"
          id={field.name}
          borderColor="teal.300"
          variant="flushed"
          mb={2}
        />
        {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      </FormControl>
    );
  }
);

export default InputField;
