import React from 'react'
import './chart.css'
function HorizontalBarChart(data) {
    const data1 = data.data

    // creating an empty array for storing numeric values
    const values = []

    // extracting only numeric values from dataset for calculation 
    for (var i = 0; i < data1.length; i++) {
        values.push(data1[i].value)
    }

    // calculation to identify the division between the background lines 
    // NOTE : in this we are taking 10 background lines
    const division = Math.ceil(Math.max(...values) / 10)

    // calculation to identify the width of each bar 
    for (var j = 0; j < data1.length; j++) {
        let barWidth = 0
        barWidth = ((data1[j].value / (division * 9)) * 100).toFixed(2)
        data1[j].barWidth = barWidth.toString() + '%'
    }

    return (
        <div className="horibar-wrapper">
            {data1.map((i, idx) => (

                // It's mandatory to give z-index in styling 
                <div key={idx} style={{ display: 'flex', margin: '2% 0%', alignItems: 'center', zIndex: '10' }}>
                    <div className="horibar-single-text" style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* displaying the labels on the left side */}
                        <h5 style={{ textAlign: 'end' }}>
                            {i.label}
                        </h5>
                        <h5 style={{ textAlign: 'end' }}>
                            {i.value} {i.unit}
                        </h5>
                    </div>
                    <div style={{ width: '70%' }}>
                        {/* actual horizontal bar  */}
                        <div
                            className="horibar-single-graph"
                            style={{ height: '35px', width: i.barWidth, background: i.color, borderRadius: '5px' }}
                        />
                    </div>
                    <br />
                </div>
            ))}
            {/* code for background lines */}
            <div className="bgLineWrapper">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i, j) => (
                    <div className="bgSingleLineWrapper" key={j}>
                        <div className="bgLine" />
                        <div>{j === 0 ? 1 : (division * j) + 1}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HorizontalBarChart
