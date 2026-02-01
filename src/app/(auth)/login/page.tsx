"use client";

import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

function LoginPage() {
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    validateInputOnChange: true,
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email address",
      password: (value) =>
        value.length < 6 ? "Password must be at least 6 characters" : null,
    },
  });

  const handleLogin = (values: LoginFormValues) => {
    // TODO: Implement actual login API call with values.email and values.password
    console.log("Login attempt:", {
      email: values.email,
      rememberMe: values.rememberMe,
    });

    showNotification({
      title: "Login successful",
      message: "You are now logged in",
      color: "green",
    });

    router.push("/home");
  };

  return (
    <Container size="md" my={40}>
      <Button
        component={Link}
        href="/"
        variant="subtle"
        leftSection={<IconArrowLeft size={16} />}
        mb="lg"
      >
        Back to Home
      </Button>
      <Title ta="center" order={2} fw={500}>
        Welcome back!
      </Title>

      <Text ta="center" c="dimmed">
        Do not have an account yet? <Anchor>Create account</Anchor>
      </Text>

      <Paper withBorder shadow="sm" p={22} mt={30}>
        <form onSubmit={form.onSubmit(handleLogin)}>
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...form.getInputProps("password")}
          />
          <Group justify="space-between" mt="lg">
            <Checkbox
              label="Remember me"
              {...form.getInputProps("rememberMe", {
                type: "checkbox",
              })}
            />
            <Anchor component="button" size="sm" type="button">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default LoginPage;
