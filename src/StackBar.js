import React from 'react'

function StackBar(data1) {
    const data = data1.data1
    let totalHeight = 200 //total height of bar graph is 200px
    let arrX = [] // contains the x values
    let arrY = [] // contains the y values

    // extracting only numeric values from dataset for calculation 
    for (var j = 0; j < data.length; j++) {
        arrX.push(data[j].x)
        arrY.push(data[j].y)
    }

    // finding the total by sum up the max value of x and max value of y
    let total = Math.max(...arrX) + Math.max(...arrY)

    // calculating the height of each bar using for loop 
    for (var i = 0; i < data.length; i++) {

        //  creating 3 new key values sumXY , heightX and heightY and storing all 3 to our data
        data[i].sumXY = data[i].x + data[i].y
        data[i].heightX = ((data[i].x * totalHeight) / total).toFixed(2) + 'px'
        data[i].heightY = ((data[i].y * totalHeight) / total).toFixed(2) + 'px'
    }
    return (
        <div >


            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'flex-end',
                    height: '200px'         //height of whole graph 
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
                        <h6 size="h6">{i.sumXY}</h6>
                        <div
                            style={{
                                height: i.heightX,  // height of each bar that we got from above calculation
                                width: '35px',      // width of each bar
                                background: '#3D85C6',
                                borderRadius: '5px 5px 0 0'
                            }}
                        />
                        {/* white seprator */}
                        <div style={{ height: '1px', width: '35px', background: 'white' }} />
                        <div
                            style={{
                                height: i.heightY,  // height of each bar that we got from above calculation
                                width: '35px',      // width of each bar      
                                background: '#63C29D',
                                borderRadius: '0 0 5px 5px'
                            }}
                        />

                         {/* months name */}
                        <h6 size="h6">{i.name}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StackBar
