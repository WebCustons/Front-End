import { forwardRef } from "react";
import {
  InputValidatorProps,
  SelectValidatorProps,
  TextareaValidatorProps,
} from "./validators";
import { Container } from "./styles";

export const InputValidator = forwardRef<HTMLInputElement, InputValidatorProps>(
  ({ label, id, type, error, placeholder, ...rest }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (id === "birth_date") {
        const inputValue = event.target.value;
        const sanitizedValue = inputValue.replace(/[^0-9-]/g, "").slice(0, 10);

        if (/^\d{4}$/.test(sanitizedValue)) {
          event.target.value = sanitizedValue + "-";
        } else if (/^\d{4}-\d{2}$/.test(sanitizedValue)) {
          event.target.value = sanitizedValue + "-";
        } else {
          event.target.value = sanitizedValue;
        }
      } else if (id === "cpf") {
        const inputValue = event.target.value;
        const sanitizedValue = inputValue.replace(/[^0-9]/g, "");

        if (sanitizedValue.length <= 11) {
          const formattedCpf = `${sanitizedValue.slice(
            0,
            3
          )}.${sanitizedValue.slice(3, 6)}.${sanitizedValue.slice(
            6,
            9
          )}-${sanitizedValue.slice(9, 11)}`;
          event.target.value = formattedCpf;
        } else {
          event.target.value = sanitizedValue.slice(0, 11);
        }
      }
    };

    return (
      <Container>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          ref={ref}
          placeholder={placeholder}
          {...rest}
          onChange={handleChange} 
        />
        {error ? <p>{error}</p> : null}
      </Container>
    );
  }
);


export const SelectValidator = forwardRef<
  HTMLSelectElement,
  SelectValidatorProps
>(({ label, id, options, error, ...rest }, ref) => {
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
});

export const TextareaValidator = forwardRef<
  HTMLTextAreaElement,
  TextareaValidatorProps
>(({ label, id, error, ...rest }, ref) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} ref={ref} {...rest} />
      {error ? <p>{error}</p> : null}
    </Container>
  );
});
