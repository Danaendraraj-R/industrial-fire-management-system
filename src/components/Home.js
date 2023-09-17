import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import "./Home.css";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Home() {
  const theme = useTheme();
  return (
      <body className='home-bg'>
    <Box
      sx={{
        mt: 10,
        ml: 30,
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
          ml: 22,
        },
        [theme.breakpoints.down("sm")]: {
          ml: 18,
        },
      }}
    >
        <br/>
        <br/>
                <h1 className="Head">Welcome to the Admin Dashboard</h1>
                <h2 className="Head">Our Objectives are</h2>
                <table className="table-home">
                    <tr><td className="table-home">To provide a safe environment to employees</td></tr>
                    <tr><td className="table-home">To reduce damage to property</td></tr>
                    <tr><td className="table-home">To avoid disruption of operations</td></tr>
                    <tr><td className="table-home">To maintain to a company's reputation</td></tr>
                </table>
                <h1 className="Head">Have a Good Day!</h1>
        <Link to="/blogs">
            <Button
                sx={{
                    color: "black",
                    bgcolor: "#e6f0ff",
                    "&:hover": {
                        bgcolor: "#e6e6e6",
                    },
                    [theme.breakpoints.down("md")]: {
                        fontSize: 10,
                    },
                    [theme.breakpoints.down("sm")]: {
                        fontSize: 6,
                    },
                }}
            >
                View Analytics
            </Button>
        </Link>
    </Box>
      </body>
  );
}
