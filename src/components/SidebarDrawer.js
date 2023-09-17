import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { SiBlogger } from "react-icons/si";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import "./Home.css";

export default function SidebarDrawer() {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 190,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 190,
            boxSizing: "border-box",
            [theme.breakpoints.down("md")]: {
              width: 150,
            },
            [theme.breakpoints.down("sm")]: {
              width: 120,
            },
          },
        }}
      >
        <Box sx={{ overflow: "auto", mt: 8 }}>
          <List>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <ListItem key="Home" disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: '#070751' }}>
                    <BsFillInfoSquareFill />
                  </ListItemIcon>
                  <ListItemText primary="Home" sx={{ml: -2, color: '#070751' }} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/blogs" style={{ textDecoration: 'none' }}>
              <ListItem key="View Readings" disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: '#070751' }}>
                    <SiBlogger />
                  </ListItemIcon>
                  <ListItemText primary="View Readings" sx={{ ml: -2,color: '#070751', }} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/status" style={{ textDecoration: 'none' }}>
              <ListItem key="Equipment Status" disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: '#070751' }}>
                    <BsFillInfoSquareFill />
                  </ListItemIcon>
                  <ListItemText primary="Equipment Status" sx={{ ml: -2,color: '#070751',}} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <ListItem key="About" disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: '#070751' }}>
                    <BsFillInfoSquareFill />
                  </ListItemIcon>
                  <ListItemText primary="About" sx={{ ml: -2,color: '#070751',}} />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
