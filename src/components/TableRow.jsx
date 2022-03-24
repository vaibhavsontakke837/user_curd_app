import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const TableRow = ({row}) => {

    const navigate=useNavigate()
    const editUser=()=>{
        navigate("/update-user")
    }

    const deleteUser=()=>{
        axios.delete(`http://localhost:5000/user/${row._id}`)
        .then(res => {
            alert("User Data Deleted Successfully...")
            window.location.reload();
        })
        .catch(err => alert(err))
    }

    return (
            <tr >
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.email}</td>
                <td>{row.mobileNumber}</td>
                <td>{row.password}</td>
                <td>
                    <Link to={`/update-user/${row._id }`} className='btn btn-primary' onClick={editUser}>Edit</Link>
                </td>
                <td>
                    <button className='btn btn-danger' onClick={deleteUser}>Delete</button>
                </td>
            </tr>
    )
}
export default TableRow;