import { Box } from "@mui/material";
import React from "react";
import Helper from "../helpers";

const DividerCustom = ({
  orientation,
}: {
  orientation: "vertical" | "horizontal";
}) => {
  const { palette, mode } = Helper();
  return (
    <Box
      width="100%"
      sx={{
        backgroundColor:
          mode === "light" ? palette.neutral.medium : palette.neutral.light,
        height: "1px",
        transform: orientation === "vertical" ? "rotate(90deg) " : "rotate(0)",
      }}
    ></Box>
  );
};

export default DividerCustom;
