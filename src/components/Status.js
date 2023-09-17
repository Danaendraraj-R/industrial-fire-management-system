import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import './Table.css';
import LED from '../components/Equip/Color';
import LED1 from '../components/Equip/Color1';
function Status() {
    const theme = useTheme();
    return (
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
            <h1>
                Equipments Status
            </h1>
            <div className="App">

                <table>
                    <tr>
                        <th>Equipment</th>
                        <th>Condition</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>Water Sprinkler</td>
                        <td>Working</td>
                        <td><center><LED/></center></td>
                    </tr>
                    <tr>
                        <td>Exhaust Fan</td>
                        <td>Working</td>
                        <td><center><LED1/></center></td>
                    </tr>
                    <tr>
                        <td>Fire Alarm</td>
                        <td>Working</td>
                        <td><center><LED/></center></td>
                    </tr>
                </table>
            </div>

        </Box>
    );
}

export default Status;
