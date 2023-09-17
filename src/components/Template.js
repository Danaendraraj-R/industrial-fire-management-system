import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Chart from './dynamic charts/Dynamic Line Chart.js';
import Chart1 from './dynamic charts/Dynamic Line Chart1.js';
import Chart2 from './dynamic charts/Dynamic Line Chart2.js';
import './Template.css';
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Gauge from './GaugeChart';

    export default function Template() {
      const theme = useTheme();
      return (
          <Box
              sx={{
                mt: 10,
                ml: 30,
                mr: 5,
                [theme.breakpoints.down("md")]: {
                  ml: 22,
                },
                [theme.breakpoints.down("sm")]: {
                  ml: 18,
                },
              }}
          >

            <div className="template">
                <Gauge/>
                <table className="table1">
                    <tr>
                        <td> <Chart/> </td>
                        <td> <Chart1/> </td>
                        <td> <Chart2/> </td>
                    </tr>
                </table>
            </div>
            </Box>

      );
    }
