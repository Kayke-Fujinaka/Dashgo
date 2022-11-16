import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

// Método do React para encaminhamento de Ref
// 1 - Transformar o componente em Constante (Arrow Function)
// 2 - Tirar a exportação do componente e alterar o nome para <Componente>Base
// 3 - Exportar uma constante <Componente> passando o método forwardRef com o componente
//      - Ele vai fazer um encaminhamento da Ref
// 4 - Ela vem como segundo parâmetro da função
// 5 - Importar a tipagem ForwardRefRenderFunction do React
// 6 - Passar a tipagem no <Componente>Base como o ForwardRefRenderFunction
//      - Primeiro parâmetro tipado é a Ref do componente
//      - Segundo parâmetro tipado é as props do componente

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
