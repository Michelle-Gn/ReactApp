import React from 'react';
import App from './app.jsx';

const EmployeeData = function (props) {

  return(
    <div>
      {props.employees.map((item, index) => (
        <div className="card" key={index} onClick={()=> props.changeView()}>{item.name} {item.children?.length && <EmployeeData employees={item.children}/>}
        </div>
      ))}
    </div>)
}

export default EmployeeData;