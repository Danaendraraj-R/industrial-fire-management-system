import React, { useState, useEffect } from 'react';
function MyComponent1() {
    const [inputValue, setInputValue] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            fetch('https://blynk.cloud/external/api/get?token=GnSTVNjuUEBBkVaZdRPBqhkysSU10LQ1&V2')
                .then(response => response.json())
                .then(data => setInputValue(data))
                .catch(error => console.error(error));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const boxColor = inputValue && inputValue > 20 ? 'green' : 'red';
    const textvalue = inputValue && inputValue > 20 ? 'On' : 'Off';

    return (
        <div>
            <div style={{ backgroundColor: boxColor, width: '200px', height: '25px' }}>
                <b>{textvalue}</b>
            </div>
        </div>
    );
}

export default MyComponent1;