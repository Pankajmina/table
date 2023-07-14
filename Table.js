import React from 'react';



function Table(props) {

  const table=props.table
  return (
    <>

  
      <label className="Display-4"><h2>Student Table</h2></label>
      <table className="table table-hover table-bordered">
        <thead className="thead">
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Class</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody className='tbody'>
          {table.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <input
                  className="form-control" type='text' required placeholder="Name"
                  value={item.name}
                />
              </td>
              <td>
                <input className="form-control" type='number' min={1} max={100} required placeholder="Roll Number"
                  value={item.rollnumber}
                />
              </td>
              <td>
                <input
                  className="form-control" type='number' min={1} max={12} placeholder="Class"
                  value={item.class}
                />
              </td>
              <td>
                <input
                  className="form-control" type='number' min={1} max={21} required placeholder="age"
                  value={item.age} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
}

export default Table;
