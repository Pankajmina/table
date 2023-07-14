import React, { useState } from 'react'

export default function Add() {
    const [popup, setPopup] = useState('false');
    const [tableData, setTableData] = useState({
        name: '',
        rollnumber: '',
        class: '',
        age: ''
    })
    const handleDataChange =(e)=>{
        const colName = e.target.getAttribute('name');
        const newData = e.target.value;
        const newTableData = {...tableData}
        newTableData[colName] = newData;
        setTableData(newTableData);
    }
    return (
        <>
            <form className='form-inline my-2 my-lg-0 '>
                <button className=' btn btn-primary my-2 mx-2 ' onClick={(e) => {
                    e.preventDefault();
                    if (popup === 'false') {
                        setPopup('true')
                    }
                    else {
                        setPopup('false')
                    }
                }}>
                    Add
                </button>
            </form>
            {popup === 'true' && <div className='popup-overlay position-fixed display-flex z-index-9999'>
                <div className='popup-content'>
                    <form className='form-control' >
                        <div class="form-group">
                            <label >Name</label>
                            <input type="text" name='name' class="form-control" value={tableData.name} onChange={handleDataChange} placeholder="name"/>
                        </div>
                        <div class="form-group">
                            <label >rollnumber</label>
                            <input type="number" name='rollnumber' class="form-control" value={tableData.rollnumber} onChange={handleDataChange}   placeholder="rollnumber"/>
                        </div>
                        <div class="form-group">
                            <label >class</label>
                            <input type="number" name='class' class="form-control" value={tableData.class} onChange={handleDataChange} placeholder="class"/>
                        </div>
                        <div class="form-group">
                            <label >age</label>
                            <input type="number" name='age' class="form-control" value={tableData.age} onChange={handleDataChange}  placeholder="age"/>
                        </div>
                        
                        <button className='btn btn-primary my-2 m-2' onClick={() => {
                            setPopup('false')
                        }}>save</button>
                        <button className='btn btn-danger my-2 mx-2' onClick={() => {
                            const format = {
                                name: '',
                                rollnumber: '',
                                class: '',
                                age: ''
                            }
                            setTableData(format)
                            setPopup('false')
                        }}>cancle</button>
                    </form>
                </div>
            </div>
            }
        </>
    )
}
