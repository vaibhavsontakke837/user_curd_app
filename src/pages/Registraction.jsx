import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Registraction = () => {


    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [mobileNumber, setMobileNumber] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    const [submitTitle, setSubmitTitle] = useState("Register")


    const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobileNumber: mobileNumber,
        password: password,
        cpassword: confirmPassword
    }

    const navigate = useNavigate()

    const submitData = (e) => {
        e.preventDefault()

        if (firstName && lastName && email && mobileNumber && (password === confirmPassword)) {

            setSubmitTitle("Submitting...")
            axios.post("http://localhost:5000/user", data)
                .then(() => {

                    alert("Registration Successfull")
                    navigate("/login")
                    setSubmitTitle("Submit")

                })
                .catch(err => alert(err))
            setSubmitTitle("Register")
        }
    }

    return (
        <div className="container">
            <h1 className="text-center">Register New User</h1>
            <form className="row" onSubmit={submitData}>
                <div className="form-group col-md-6">
                    <label className="font-weight-bold">First Name</label>
                    <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name" required />
                </div>
                <div className="form-group col-md-6">
                    <label className="font-weight-bold">Last Name</label>
                    <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name" required />
                </div>
                <div className="form-group col-md-6">
                    <label className="font-weight-bold">Email Address</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                </div>
                <div className="form-group col-md-6">
                    <label className="font-weight-bold">Mobile Number</label>
                    <input type="number" className="form-control" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="Enter your Mobile No" required />
                </div>
                <div className="form-group col-md-6">
                    <label >Enter Password</label>
                    <input type="password" className="form-control " value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
                </div>
                <div className="form-group col-md-6">
                    <label >Confirm Password</label>
                    <input type="password" className="form-control " value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required />
                </div>
                <div className="form-group col-md-12">
                    <button className="form-control btn btn-primary font-weight-bold" >{submitTitle}</button>
                </div>
                <div className="col-md-12">
                    <h6 className="text-center">OR</h6>
                </div>
            </form>
            <div className="row">
                <div className="form-group col-md-12">
                    <button className="form-control btn btn-primary font-weight-bold" onClick={() => navigate("/login")}>Login</button>
                </div>
            </div>
        </div>
    )
}
export default Registraction