import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const data = {
        email: email,
        password: password
    }

    const login = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/user/login", data)
            .then(res => {
                navigate("/")
                setLoginUser(res.data.user)
                // console.log(res.data.user)
                alert(res.data.message)
                // console.log(data)
            })
    }
    return (
        <div className="container ">
            <h1 className="text-center">LogIn User</h1>
            <form className="row justify-content-center" onSubmit={login}>
                <div className="form-group col-md-8">
                    <label className="font-weight-bold">Email Address</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                </div>
                <div className="form-group col-md-8">
                    <label className="font-weight-bold">Enter Password</label>
                    <input type="password" className="form-control " value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
                </div>
                <div className="form-group col-md-8">
                    <button className="form-control btn btn-primary font-weight-bold">LogIn</button>
                </div>
                <div className="col-md-8">
                    <h6 className="text-center">OR</h6>
                </div>
            </form>
            <div className="row justify-content-center">
                <div className="form-group col-md-8">
                    <button className="form-control btn btn-primary font-weight-bold" onClick={() => navigate("/register")}>Register</button>
                </div>
            </div>

        </div>
    )
}
export default Login;