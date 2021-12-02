/*
 * @Author: XunL
 * @Description:
 */
import {
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  Text,
  FormControl,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";

import { FaUserAlt, FaLock, FaPhone } from "react-icons/fa";

function SignUp() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  let [loading, setLoading] = useState(false);
  const handleSubmit = async (values) => {
    setLoading(true);
    const res = await axios
      .post("https://conduit.productionready.io/api/users", {
        user: values,
      })
      .catch((e) => {
        alert("注册失败");
      })
      .finally(() => {
        setLoading(false);
      });
    if (res) {
      alert("注册成功 ");
    }
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("请输入手机号或邮箱"),
    password: Yup.string().required("请输入密码"),
    username: Yup.string().required("请输入用户名"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Stack spacing={5}>
          <Field name="username">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.username && form.touched.username}
              >
                <InputGroup>
                  <InputLeftAddon children={<FaUserAlt />} />
                  <Input {...field} placeholder="你的简称" size="md" />
                </InputGroup>
                <FormErrorMessage>{form.errors.username}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <InputGroup>
                  <InputLeftAddon children={<FaPhone />} />
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
          <Button colorScheme="green" type="submit" isLoading={loading}>
            注册
          </Button>
          <Text fontSize="xs">
            点击 “注册” 即表示您同意并愿意遵守简书 用户协议 和 隐私政策 。
          </Text>
        </Stack>
      </Form>
    </Formik>
  );
}

export default SignUp;
