import React, { Component } from 'react'
import Chart from 'react-google-charts'

class GaugeChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: 0,
            humidity: 0,
            harmfulGases: 0,
        }
    }
    componentDidMount() {
        // Call the getdata() function initially
        this.getData();

        // Call the getdata() function every 1 second
        setInterval(this.getData, 1000);
    }

    getData = () => {
        fetch('https://blynk.cloud/external/api/get?token=GnSTVNjuUEBBkVaZdRPBqhkysSU10LQ1&V0')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    temperature: data,
                                 });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        fetch('https://blynk.cloud/external/api/get?token=GnSTVNjuUEBBkVaZdRPBqhkysSU10LQ1&V1')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    humidity: data,
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        fetch('https://blynk.cloud/external/api/get?token=GnSTVNjuUEBBkVaZdRPBqhkysSU10LQ1&V2')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    harmfulGases: data,
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    render() {
        const gaugeData = [
            ['Label', 'Value'],
            ['Temperature', this.state.temperature],
            ['Humidity', this.state.humidity],
            ['Harmful Gases', this.state.harmfulGases],
        ];
        return (
            <div className="contain">
                <Chart
                    width={1200}
                    height={350}
                    chartType="Gauge"
                    loader={<div>Loading Chart</div>}
                    data={gaugeData}
                    options={{
                        redFrom: 90,
                        redTo: 100,
                        yellowFrom: 75,
                        yellowTo: 90,
                        minorTicks: 5,
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        )
    }
}
export default GaugeChart
