import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { facultyLogin } from '../redux/action/facultyAction'
import { studentLogin } from '../redux/action/studentAction'
import classnames from 'classnames'
import '../Style/facultyStudentLogin.css'
import backgroundImg from './Images/cool-background.png'
import './Images/background.css'




const FacultyStudentLoginPags = () => {
    const store = useSelector((state) => state)
    const dispatch = useDispatch()
    const [facultyRegNum, setFacultyRegNum] = useState('')
    const [facultyPassword, setFacultyPassword] = useState('')
    const [studentRegNum, setStudentRegNum] = useState('')
    const [studentPassword, setStudentPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [errorsHelper, setErrorsHelper] = useState({})
    const [isFacultyLoading, setIsFacultyLoading] = useState(false)
    const [isStudentLoading, setIsStudentLoading] = useState(false)

    const history = useHistory()

    useEffect(() => {
        if (store.faculty.isAuthenticated) {
            history.push('/faculty')
        }
    }, [history, store.faculty.isAuthenticated])

    useEffect(() => {
        if (store.error) {
            setErrors(store.error)
        }
    }, [store.error])
    useEffect(() => {
        if (store.student.isAuthenticated) {
            history.push('/home')
        }
    }, [history, store.student.isAuthenticated])

    useEffect(() => {
        if (store.errorHelper) {
            setErrorsHelper(store.errorHelper)
        }
    }, [store.errorHelper])


    const facultyFormHandler = (e) => {
        e.preventDefault()
       
        setIsFacultyLoading(true)
        dispatch(facultyLogin({ registrationNumber: facultyRegNum, password: facultyPassword }))
    }

    useEffect(() => {
        if (store.error || store.faculty.isAuthenticated) {
            setIsFacultyLoading(false)
        }
        else {
            setIsFacultyLoading(true)
        }
    }, [store.error, store.faculty.isAuthenticated])

    const studentFormHandler = (e) => {
        e.preventDefault()

        setIsStudentLoading(true)
        dispatch(studentLogin({ registrationNumber: studentRegNum, password: studentPassword }))
    }

    useEffect(() => {
        if (store.errorHelper ||
            store.student.isAuthenticated) {
            setIsStudentLoading(false)
        }
        else {
            setIsStudentLoading(false)
        }

    }, [store.errorHelper, store.student.isAuthenticated])

    return (
             <div className="container-fluid " style={{  height: '100vh',
                            width: '100vw',
                            backgroundImage: `url(${backgroundImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}>

            <div className="row justify-content-center align-items-center">
                <div className="col-md-5" style={{ marginTop:"200px" }}>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-center mb-4">FACULTY LOGIN</h3>
                            <form noValidate onSubmit={facultyFormHandler}>
                                <div className="form-group">
                                    <label htmlFor="facRegId">Registration Number </label>
                                    <input
                                        type="text"
                                        className={classnames('form-control', {
                                            'is-invalid': errors.registrationNumber
                                        })}
                                        id="facRegId"
                                        placeholder="Enter Registration Number"
                                        value={facultyRegNum}
                                        onChange={(e) => setFacultyRegNum(e.target.value)}
                                    />
                                    {errors.registrationNumber && (
                                        <div className="invalid-feedback">{errors.registrationNumber}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="facPass">Password</label>
                                    <input
                                        type="password"
                                        className={classnames('form-control', {
                                            'is-invalid': errors.password
                                        })}
                                        id="facPass"
                                        placeholder="Enter Password"
                                        value={facultyPassword}
                                        onChange={(e) => setFacultyPassword(e.target.value)}
                                    />
                                    {errors.password && (
                                        <div className="invalid-feedback">{errors.password}</div>
                                    )}
                                </div>
                                <div class="row justify-content-center">
                                        <div class="col-md-1">
                                            {
                                                isStudentLoading && <div class="spinner-border text-primary" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                        disabled={isFacultyLoading}
                                    >
                                        {isFacultyLoading ? (
                                            <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                                        ) : null}
                                        Submit
                                    </button>
                                </div>
                            </form>
                            <p className="text-center"><Link className="text-center" to="/forgotPassword/student">Forgot Password</Link></p>
                            
                            <p className="text-center">
                                <Link to="/">Back to Home</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FacultyStudentLoginPags;
