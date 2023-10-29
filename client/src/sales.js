import { useState } from 'react';
import TopNav4dept from './components/TopNav/TopNav4dept';
import LeftNav4dept from './components/LeftNav/LeftNav4dept';
import MainSection4dept from './components/MainSection/MainSection4dept';
function Sales() {
  const [employeeId, setEmployeeId] = useState('')
  console.log(employeeId)
  return (
    <div className="sales-container">
      <TopNav4dept/>
      <LeftNav4dept employeeId={employeeId}/>
      <MainSection4dept setEmployeeId={setEmployeeId}/>
    </div>
  );
}
export default Sales;