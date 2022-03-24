import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const UpdateUserInfo = () => {

    const navigate = useNavigate()
    const { userId } = useParams()
    // console.log(userId  )

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [mobileNumber, setMobileNumber] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()


    useEffect(() => {
        axios.get(`http://localhost:5000/user/${userId}`)
            .then(res => {
                setFirstName(res.data[0].firstName)
                setLastName(res.data[0].lastName)
                setEmail(res.data[0].email)
                setMobileNumber(res.data[0].mobileNumber)
                setPassword(res.data[0].password)
                setConfirmPassword(res.data[0].confirmPassword)

            })
            .catch((err) => alert(err))
    }, [])

    const updateUserData = (e) => {
        e.preventDefault()

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobileNumber: mobileNumber,
            password: password,
            confirmPassword: confirmPassword
        }

        console.log(data)
        axios.put(`http://localhost:5000/user/${userId}`, data)
            .then(res => {
                alert("User Data Updated...")
                navigate("/")
            })
            .catch(err => alert(err))
    }
    return (
        <div className="container">
            <h1 className="text-center">Update User Info</h1>
            <form className="row" onSubmit={updateUserData}>
                <div className="form-group col-md-6">
                    <label className="font-weight-bold">First Name</label>
                    <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name" />

                </div>
                <div className="form-group col-md-6">
                    <label className="font-weight-bold">Last Name</label>
                    <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="form-group col-md-6">
                    <label className="font-weight-bold">Email Address</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="fomr-group col-md-6">
                    <label className="font-weight-bold">Mobile Number</label>
                    <input type="number" className="form-control" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                </div>
                <div className="fomr-group col-md-6">
                    <label className="font-weight-bold">Password</label>
                    <input type="number" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>


                <div className="col-md-12">
                    <button className="btn btn-primary col-md-12">Update User Info</button>
                </div>
            </form>
        </div>
    )
}
export default UpdateUserInfo;