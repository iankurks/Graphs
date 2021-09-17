import React from 'react'

function SimpleBarChart(data1) {
    const data = data1.data1
    let totalHeight = 200 //total height of bar graph is 200px
    let arrX = [] // contains the x values
    let arrY = [] // contains the y values

    // extracting only numeric values from dataset for calculation 
    for (var j = 0; j < data.length; j++) {
        arrX.push(data[j].x)

    }

    // calculating the height of each bar using for loop 
    for (var i = 0; i < data.length; i++) {
        //  creating a new key values heightX and storing to our data
        data[i].heightX = ((data[i].x * totalHeight) / (Math.max(...arrX))).toFixed(2) + 'px'
    }
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'flex-end',
                height: '200px' //height of whole graph 
            }}
        >
            {data.map((i, j) => (
                <div
                    key={j}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >

                     {/*  displaying the numeric value on top of each bar */}
                    <h6 size="h6">{i.x}</h6>
                    <div
                        style={{
                            height: i.heightX,      // height of each bar that we got from above calculation
                            width: '35px',              // width of each bar
                            background: '#3D85C6',
                            borderRadius: '5px'
                        }}
                    />

                    {/* months name */}
                    <h6 size="h6">{i.name}</h6>
                </div>
            ))}
        </div>
    )
}

export default SimpleBarChart
