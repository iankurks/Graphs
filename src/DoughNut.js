import React, { useState ,useEffect} from 'react'
import './DoughNut.css'
function DoughNut({labels}) {
    const [selectedTab, setSelectedTab] = useState('Total')
    const [bg, setBackground] = useState()
    let total = 0
    let bgColorTemp = ''
    // let scope1colors = ['#B6D1EA', '#6EA4D4', '#3D85C6', '#2E6495']
    // let scope2colors = ['#C4E8DA', '#63C29D', '#4A9276', '#63c26e']
    // if (selectedTab !== 'Total') {
        // labels = labels.filter((a) => a.category === selectedTab)
        // labels.forEach((i, idx) => {
        //     if (selectedTab === 'Scope1') {
        //         i.color = scope1colors[idx]
        //     } else if (selectedTab === 'Scope2') {
        //         i.color = scope2colors[idx]
        //     }
        // })
    // }
    for (let i = 0; i < labels.length; i++) {
        total += labels[i].value
        // total = Math.round(total)
    }
    labels.sort((a, b) => (a.value > b.value ? 1 : b.value > a.value ? -1 : 0))
    for (let i = 0; i < labels.length; i++) {
        labels[i].actualPercent = (labels[i].value / total) * 100
        if (i !== 0) {
            labels[i].percent = labels[i - 1].percent1
        
        }
        labels[i].percent1 = labels[i].actualPercent + labels[i].percent
  
        // labels[i].percent = Math.round(labels[i].percent)
        // labels[i].percent1 = Math.round(labels[i].percent1)
        if (labels[i].category === 'Scope1') {
            labels[i].color = '#3D85C6'
        } else if (labels[i].category === 'Scope2') {
            labels[i].color = '#63C29D'
        }
        if (i < labels.length - 1)
            bgColorTemp += `${labels[i].color} ${labels[i].percent}% ${labels[i].percent1}%,white ${
                labels[i].percent1
            }% ${labels[i].percent1 + 0.5}%,  `
        else bgColorTemp += `${labels[i].color} ${labels[i].percent}% ${labels[i].percent1}%,white ${
            labels[i].percent1
        }% ${labels[i].percent1 + 0.5}%`
    }
    
    useEffect(() => {
        setBackground(`conic-gradient( ${bgColorTemp})`)
    }, [bgColorTemp, setBackground])
    return (
        <div>
            <div className="net-white">
                {console.log(labels)}
          <div className="net-white-heading"> Emissions Breakdown </div>
          <div className="header2">
              {/* {['Total', 'Scope1', 'Scope2'].map((i, idx) => (
                  <span
                      className={selectedTab === i ? 'header2-selected ' : 'header2-unselected'}
                      onClick={() => setSelectedTab(i)}
                      onKeyDown={() => setSelectedTab(i)}
                      tabIndex="0"
                      role="button"
                      key={idx}
                  >
                      {i}
                  </span>
              ))} */}
          </div>
          <div className="demoLabel">
              {labels.map((i, idx) => (
                  <div className="donut-single-wrapper" key={idx} style={{ display: 'flex', margin: '5px' }}>
                      <div className={i.category === 'Scope1' ? 'label1' : 'label2'}></div>
                      <div className="donut-single-wrapper-name">{i.name}</div>
                      <div className="donut-single-wrapper-name">{i.actualPercent}</div>
                  </div>
              ))}
          </div>
          <div style={{ background: bg }} className="gradientStyle">
              <div className="doughnutChartStyle" style={{}}>
                  <span style={{ textAlign: 'center', width: '5em' }}>{total.toFixed(2)} /Kg CO2 </span>
              </div>
          </div>
      </div>
        </div>
    )
}

export default DoughNut
