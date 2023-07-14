import React, { useState } from 'react'

export default function Delete() {
    const [popup, setPopup] = useState('false')
    const [idData, setIdData] = useState('')
    //asuming the table data(which will be passed through props) is in TABLE
        // const TABLE  =[
        // {    id : '1',
        //     name: 'asdfasdf',
        //     rollnumber: '23',
        //     class: '23',
        //     age: '432'
        // }
       // ]
    const [tableData, setTableData] = useState({
        name: '',
        rollnumber: '',
        class: '',
        age: ''
    })
    const handleEntryOfId = (e) => {
        e.preventDefault();
        const newId = e.target.value;
        setIdData(newId);

    }
    // const handleClick = (e)=>{
    //     e.preventDefault();
    //     const foundObject = array.find((obj) => obj.id === newId);
    //   setTableData(foundObject)
    // }

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
                    Delete
                </button>
            </form>
            {popup === 'true' && <div className='popup-overlay position-fixed display-flex z-index-9999'>
                <div className='popup-content'>
                    <form>
                        <div class="form-group">
                            <label >Enter the id of row</label>
                            <input type="text" name='id' class="form-control" value={idData} onChange={handleEntryOfId} placeholder="ID" />
                        </div>
                        <button className='btn btn-primary' 
                        // onClick={handleClick}
                        >enter</button>
                        <div class="form-group">
                            <label >Name</label>
                            <input type="text" name='name' class="form-control" value={tableData.name} placeholder="name" />
                        </div>
                        <div class="form-group">
                            <label >rollnumber</label>
                            <input type="number" name='rollnumber' class="form-control" value={tableData.rollnumber} placeholder="rollnumber" />
                        </div>
                        <div class="form-group">
                            <label >class</label>
                            <input type="number" name='class' class="form-control" value={tableData.class} placeholder="class" />
                        </div>
                        <div class="form-group">
                            <label >age</label>
                            <input type="number" name='age' class="form-control" value={tableData.age} placeholder="age" />
                        </div>
                        <button className='btn btn-primary' onClick={() => {
                            setPopup('false')
                        }}>delete</button>
                        <button className='btn btn-danger' onClick={() => {
                            setPopup('false')
                        }}>cancle</button>
                    </form>

                </div>
            </div>
            }
        </>
    )

}
