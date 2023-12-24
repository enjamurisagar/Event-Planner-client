import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Helper from "../helpers";

//icons
import EventIcon from "@mui/icons-material/Event";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const FooterMenu = () => {
  const { palette, mode, navigate } = Helper();

  const [menu, setMenu] = useState<{ label: string; active: boolean }[]>([
    {
      label: "Home",
      active: true,
    },
    {
      label: "Now",
      active: false,
    },
    {
      label: "Add",
      active: false,
    },
    {
      label: "Past",
      active: false,
    },
    {
      label: "Upcoming",
      active: false,
    },
  ]);

  const FooterCategories = [
    {
      icon: (
        <HomeIcon
          sx={{ color: menu[0].active ? palette.primary.main : undefined }}
        />
      ),
      category: "",
      label: "Home",
    },
    {
      icon: (
        <EventIcon
          sx={{ color: menu[1].active ? palette.primary.main : undefined }}
        />
      ),
      category: "today-events",
      label: "Now",
    },
    {
      icon: (
        <AddIcon
          sx={{ color: menu[2].active ? palette.primary.main : undefined }}
        />
      ),
      category: "new",
      label: "Add",
    },
    {
      icon: (
        <EventAvailableIcon
          sx={{ color: menu[3].active ? palette.primary.main : undefined }}
        />
      ),
      category: "past-events",
      label: "Past",
    },
    {
      icon: (
        <EventIcon
          sx={{ color: menu[4].active ? palette.primary.main : undefined }}
        />
      ),
      category: "future-events",
      label: "Upcoming",
    },
  ];

  function handleCategoryActive(label: string, link: string): void {
    const updatedMenu = menu.map((menuItem) => {
      return menuItem.label === label
        ? { ...menuItem, active: true }
        : { ...menuItem, active: false };
    });
    setMenu(updatedMenu);
    navigate(`/${link}`);
  }

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "3.5rem",
        mb: 1,
      }}
    >
      <Box
        width={{ xs: "90%", md: "60%" }}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          m: "auto",
          border: `1px solid ${
            mode === "light" ? palette.secondary.main : palette.secondary.light
          }`,
          height: "100%",
          backdropFilter: "blur(10px)",
          borderRadius: 5,
          p: 1,
        }}
      >
        {FooterCategories?.map((item, i) => (
          // Category div
          <Box
            sx={{
              width: "25%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mx: "1px",
            }}
          >
            {/* wrapper  for bg color*/}
            <Box
              display={"flex"}
              onClick={() => handleCategoryActive(item.label, item.category)}
              sx={{
                width: "80%",
                // flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 1,
                borderRadius: 10,
                cursor: { xs: undefined, md: "pointer" },
                backgroundColor: menu[i].active
                  ? palette.secondary.light
                  : undefined,
                gap: 1,
                transition: ".3s",
              }}
            >
              {item.icon}

              <Typography
                sx={{
                  // textWrap: "wrap",
                  fontSize: 13,
                  textAlign: "center",
                  color: menu[i].active ? palette.primary.main : undefined,
                  display: { xs: "none", md: "block" },
                }}
              >
                {item.label}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FooterMenu;
