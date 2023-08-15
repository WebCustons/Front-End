import {forwardRef } from "react";
import { InputValidatorProps, SelectValidatorProps, TextareaValidatorProps } from "./validators";
import { Container } from "./styles";

export const InputValidator = forwardRef<HTMLInputElement, InputValidatorProps>(
    ({ label, id, type, error, placeholder, ...rest }, ref) => {
      return (
        <Container>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            ref={ref}
            placeholder={placeholder}
            {...rest}
          />
          {error ? <p> {error}</p> : null}
        </Container>
      );
    }
  );
  
export const SelectValidator = forwardRef<HTMLSelectElement, SelectValidatorProps>(
    ({ label, id, options, error, ...rest }, ref) => {
      return (
        <Container>
          <label htmlFor={id}>{label}</label>
          <select id={id} ref={ref} {...rest}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {error ? <p>{error}</p> : null}
        </Container>
      );
    }
  );

export const TextareaValidator = forwardRef<HTMLTextAreaElement, TextareaValidatorProps>(
    ({ label, id, error, ...rest }, ref) => {
      return (
        <Container>
          <label htmlFor={id}>{label}</label>
          <textarea id={id} ref={ref} {...rest} />
          {error ? <p>{error}</p> : null}
        </Container>
      );
    }
  );