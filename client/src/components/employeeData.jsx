// render all of the sample data
import React from 'react';

const EmployeeData = function (props) {
  return(
    <div>
      {props.employees.map((item, index) => (
        <div key={index} onClick={() => props.changeView()}>
          {item.name}
          {item.children?.length && <EmployeeData employees={item.children} changeView={props.changeView}/>}
        </div>))}
    </div>
  )
};

export default EmployeeData;

