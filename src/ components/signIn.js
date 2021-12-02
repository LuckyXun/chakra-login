/*
 * @Author: XunL
 * @Description:
 */
import {
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  Flex,
  Text,
  Checkbox,
  Spacer,
  Button,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";

function SignIn() {
  const initialValues = {
    email: "",
    password: "",
  };
  let [loading, setLoading] = useState(false);
  const handleSubmit = async (values) => {
    setLoading(true);
    const res = await axios
      .post("https://conduit.productionready.io/api/users/login", {
        user: values,
      })
      .catch((e) => {
        alert("登录失败");
      })
      .finally(() => {
        setLoading(false);
      });
    if (res) {
      alert("登录成功 ");
    }
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("请输入用户名"),
    password: Yup.string().required("请输入密码"),
  });

  return (
   
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Stack spacing={5}>
            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <InputGroup>
                    <InputLeftAddon children={<FaUserAlt />} />
                    <Input {...field} placeholder="手机号或邮箱" size="md" />
                  </InputGroup>
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <InputGroup>
                    <InputLeftAddon children={<FaLock />} />
                    <Input
                      {...field}
                      placeholder="请输入密码"
                      size="md"
                      type="password"
                    />
                  </InputGroup>
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Flex mt="100px">
              <Checkbox>记住我</Checkbox>
              <Spacer />
              <Text
                as="a"
                href="https://cloud.seeyon.com/c/index"
                _hover={{ color: "blue" }}
              >
                seeyon
              </Text>
            </Flex>
            <Button colorScheme="blue" type="submit" isLoading={loading}>
              登录
            </Button>
          </Stack>
        </Form>
      </Formik>
    
  );
}

export default SignIn;
