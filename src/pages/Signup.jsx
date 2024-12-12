import { Button, Field, Input, Stack } from "@chakra-ui/react";
import React from "react";

const Signup = () => {
  return (
    <form>
      {/* <Stack gap="4" align="flex-start" maxW="sm">
        <Field
          label="First name"
          invalid={!!errors.firstName}
          errorText={errors.firstName?.message}
        >
          <Input
            {...register("firstName", { required: "First name is required" })}
          />
        </Field>
        <Field
          label="Last name"
          invalid={!!errors.lastName}
          errorText={errors.lastName?.message}
        >
          <Input
            {...register("lastName", { required: "Last name is required" })}
          />
        </Field>
        <Button type="submit">Submit</Button>
      </Stack> */}
    </form>
  );
};

export default Signup;
