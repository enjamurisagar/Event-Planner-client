import { Box } from "@mui/material";
import React from "react";

type FlexProps = {
  children: React.ReactNode;
  sx?: Object;
};

const Flex = ({ children, sx }: FlexProps) => {
  return (
    <Box display="flex" sx={sx}>
      {children}
    </Box>
  );
};

export default Flex;
