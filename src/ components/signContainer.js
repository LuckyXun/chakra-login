/*
 * @Author: XunL
 * @Description:
 */
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SignIn from "./signIn";
import SignUp from "./signUp";

export default function signContainer() {
  return (
    <Box
      w="400px"
      bg="white"
      ml="auto"
      mr="auto"
      pos="relative"
      top="20"
      boxShadow="lg"
      borderRadius="sm"
      p="10"
    >
      <Tabs>
        <TabList>
          <Tab>登录</Tab>
          <Tab>注册</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SignIn />
          </TabPanel>
          <TabPanel>
            <SignUp />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
