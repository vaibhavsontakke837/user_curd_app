import axios from "axios"
import { useEffect, useState } from 'react';
import TableRow from "../components/TableRow";
import { Link } from "react-router-dom";
const Home = () => {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/user")
            .then((res) => setUserData(res.data))
            .catch((err) => console.log(err))
    }, [])

    // console.log(userData)

    return (
        <div style={{ height: "25rem" }} className="container">
            <h1 className='text-center'>REACT, NODE & EXPRESS JS CRUD APP</h1>
            <Link to="/login" className='float-right btn btn-success mb-3' >Logout</Link>
            <table className='table'>
                <thead>
                    <tr className='bg-dark text-white' style={{ position: "sticky", top: "0" }} >
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Password</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map(row => {

                            return (
                                <TableRow key={row._id} row={row} />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Home