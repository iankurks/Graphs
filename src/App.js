import "./App.css";
import DoughNut from "./DoughNut";
function App() {
  let labels = [
      {
          category: 'Scope1',
          value: 0.647,
          percent: 0,
          percent1: 0,
          actualPercent: 0,
          color: '',
          name: 'National Grid'
      },
      {
          category: 'Scope1',
          value: 0.787,
          percent: 0,
          percent1: 0,
          actualPercent: 0,
          color: '',
          name: 'Portable Water'
      },
      { category: 'Scope1', value: 0.052, percent: 0, percent1: 0, actualPercent: 0, color: '', name: 'Bus' },
      { category: 'Scope1', value: 0.422, percent: 0, percent1: 0, actualPercent: 0, color: '', name: 'Air Travel' },
      {
          category: 'Scope2',
          value: 0.09,
          percent: 0,
          percent1: 0,
          actualPercent: 0,
          color: '',
          name: 'Solar Neutral Sources'
      },
      {
          category: 'Scope2',
          value: 0.726,
          percent: 0,
          percent1: 0,
          actualPercent: 0,
          color: '',
          name: 'Company Vehicles'
      },
      { category: 'Scope2', value: 0.23, percent: 0, percent1: 0, actualPercent: 0, color: '', name: 'E-waste' },
      {
          category: 'Scope2',
          value: 0.534,
          percent: 0,
          percent1: 0,
          actualPercent: 0,
          color: '',

          name: 'General Waste',
      }
  ]
 
  return (
    <DoughNut labels={labels} />
      
  )
}
export default App;




