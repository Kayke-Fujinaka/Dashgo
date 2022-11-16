import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
};

export default function Home() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>();

  // A propriedade register() recebe as props name, ref, onChange e onBlur
  // Devido a isso não precisamos passar o name no input que receber o {...register("")}

  // O SubmitHandler já tipa o evento de um Submit.
  // Ou seja, não precisaria tipar um event que vem como segundo parâmetro
  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth="360"
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input label="E-mail" type="email" {...register("email")} />
          <Input label="Senha" type="password" {...register("password")} />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
