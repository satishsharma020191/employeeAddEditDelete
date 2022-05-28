import React, {useState} from 'react'

function Home() {
/**
 * This can be done using redux if we want to keep both the functionalities in different pages 
 * from add form we can update the store 
 * and in the listing page we can read the store and show the listing
 */
    const [empList, setEmpList] = useState([]);
    const [emp, setEmp] = useState({});
    const deleteEmp = (id) => {
        if (window.confirm("Delete the item?")) {
            const updatedEmp = empList.filter((d, i)=> id!=i);
            setEmpList(updatedEmp);
        }
    }
    const editEmp = (id) => {
        const newEmpList = [...empList];
        newEmpList[id] = emp;
        setEmpList(newEmpList);
    }

    const submit = () => {
        console.log('submit', emp);
        setEmpList([...empList, emp]);
    }
    const listItems = empList.length > 0 && empList.map((d,i) =>
        <tr key={i}>
            <td>{d.fname}</td>
            <td>{d.lname}</td>
            <td>{d.dob}</td>
            <td>{d.designation}</td>
            <td><img height="50px" width="50px" src={d.photoLink}/></td>
            <td>{d.experience}</td>
            <td><button onClick={() => deleteEmp(i)}>Delete</button>
            <button onClick={() => editEmp(i)}>Edit</button>
            </td>
        </tr> 
    );
    return <>
    <table>
        Add/ Edit (in order to edit update the data in the form and click on edit button in action it will update that row)
       
        <tr>
         <td>First Name</td>   
        <td><input name='fname' 
        id='fname'
        onChange={e => setEmp({ ...emp, fname: e.target.value })}
        ></input></td>
        </tr>
        <tr>
        <td>Last Name</td>
        <td><input name='lname' id='lname'
        onChange={e => setEmp({ ...emp, lname: e.target.value })}
        ></input></td>
        </tr>
        <tr>
        <td>DOB</td>
        <td><input name='dob' id='dob'
        onChange={e => setEmp({ ...emp, dob: e.target.value })}
        ></input></td>
        </tr>
        <tr>
        <td>Designation</td>
        <td><input name='designation' id='designation'
        onChange={e => setEmp({ ...emp, designation: e.target.value })}
        ></input></td>
        </tr>
        <tr>
        <td>PhotoLink</td>
        <td><input name='photoLink' id='photoLink'
        onChange={e => setEmp({ ...emp, photoLink: e.target.value })}
        ></input></td>
        </tr>
        <tr>
        <td>Experience</td>
        <td><input name='exp' id='exp'
        onChange={e => setEmp({ ...emp, experience: e.target.value })}
        ></input></td>
        </tr>
        <tr>
        <td><button onClick={submit}>Add</button></td>
        </tr>
        
    </table>
    <table>
        <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>DOB</th>
    <th>Designation</th>
    <th>PhotoLink</th>
    <th>Experience</th>
    <th>Action</th>
  </tr>
        {listItems}
    </table>
    </>
    ;
  }
export default Home;