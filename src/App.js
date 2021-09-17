import "./App.css";

import HorizontalBarChart from "./components/HorizontalBarChart";
import SimpleBarChart from "./components/SimpleBarChart";
import StackBar from "./components/StackBar";
function App() {
    const data = [
        { value: 10, unit: 'tonnes', label: 'Regional Average:', color: '#56CFE1' },
        { value: 7.5, unit: 'tonnes', label: 'Rang Industries:', color: '#6930C3' },
        { value: 21, unit: 'tonnes', label: 'Your Target:', color: '#4EA8DE' }
    ]
    const data1 = [
        { name: 'Jan', x: 12, y: 23 },
        { name: 'Feb', x: 22, y: 3 },
        { name: 'Mar', x: 13, y: 15 },
        { name: 'Apr', x: 44, y: 35 },
        { name: 'May', x: 35, y: 45 },
        { name: 'Jun', x: 62, y: 25 },
        { name: 'Jul', x: 37, y: 17 },
        { name: 'Aug', x: 28, y: 32 },
        { name: 'Sep', x: 19, y: 43 },
        { name: 'Oct', x: 30, y: 20 },
        { name: 'Nov', x: 32, y: 10 },
        { name: 'Dec', x: 21, y: 30 }
    ]
   
//  In this we will bar charts with background , Stack Bar chart and horizontal bar chart with background
  return (
    <div>
        {/* Simple Bar Chart  */}
        <SimpleBarChart data1={data1} />
        {/* Horizontal Bar Chart */}
        <HorizontalBarChart data={data} />
        {/* Stacked Bar Chart */}
        <StackBar data1={data1} />
    </div>
      
  )
}
export default App;




