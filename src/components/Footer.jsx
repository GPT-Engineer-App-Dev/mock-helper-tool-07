import React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => (
  <Box as="footer" width="full" padding="4" backgroundColor="gray.200" textAlign="center">
    © {new Date().getFullYear()} Todo App - All rights reserved.
  </Box>
);

export default Footer;
