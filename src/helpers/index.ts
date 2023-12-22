import FlexBetween from "../libs/FlexBetween";
import FlexCenter from "../libs/FlexCenter";
import FlexAlignCenter from "../libs/FlexAlignCenter";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMode, setLogin, setLogout } from "../state";
import { useMediaQuery, useTheme } from "@mui/material";

const Helper = () => {
  const mode = useSelector((state: any) => state.mode);
  const user = useSelector((state: any) => state.user);

  const { palette } = useTheme();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isNonMobileScreens = useMediaQuery("(min-width:450px)");
  return {
    mode,
    user,
    navigate,
    dispatch,
    isNonMobileScreens,
    setLogin,
    setLogout,
    setMode,
    palette,
    FlexAlignCenter,
    FlexBetween,
    FlexCenter,
  };
};

export default Helper;
