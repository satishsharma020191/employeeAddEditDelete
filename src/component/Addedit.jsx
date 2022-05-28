import React, {useState} from 'react';
import { StoreContext } from '../utils/store';
import { Link } from "react-router-dom";
function Addedit() {
/**
 * This can be done using redux if we want to keep both the functionalities in different pages 
 * from add form we can update the store 
 * and in the listing page we can read the store and show the listing
 */
    //const [empList, setEmpList] = useState([]);
    const  {
        empList: [empList, setEmpList],
      } = React.useContext(StoreContext);
    const [emp, setEmp] = useState({});
    
    

    const submit = () => {
        console.log('submit', emp);
        setEmpList([...empList, emp]);
    }
    
    return <>

    <Link class="link" to="/">Home</Link>
    
    <Link class="link" to="/addEdit">Add/Edit</Link>
    <table>
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
    </>
    ;
  }
export default Addedit;