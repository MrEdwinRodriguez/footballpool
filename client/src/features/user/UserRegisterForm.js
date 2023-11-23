import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { setCurrentUser, selectCurrentUser, registerUser  } from './userSlice';
import { Modal, ModalHeader, ModalBody, FormGroup, Label, Button, Row, Col, Input} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {  validateUserRegistration } from '../../utils/validateUserForms'


const UserRegisterForm = () => {
	const [success, toggleSuccess] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const currentUser = useSelector(selectCurrentUser);
	const dispatch = useDispatch();
	const navigation = useNavigate()
	const handleLogin = async (values) => {
		const newUser = {
			first_name: values.first_name,
			last_name: values.last_name,
			username: values.username,
			password: values.password,
			password2: values.password2,
			terms: values.toggle
		};
		const response  = await dispatch(registerUser(newUser));
		console.log(response.payload)
		if (response && response.payload === 'success') {
			toggleSuccess(true);
			setTimeout(()=> {
				navigation('/')
			}, 2000)
			
		}
	}
	useEffect(() => {
		setShowSuccess(success)
	}, [success])
	return (
		<>
			<h2>Register</h2>
			<hr/>
			<br></br>
			{showSuccess && <div class="alert alert-success" role="alert">
				A simple success alert—check it out!
			</div>}
			{!showSuccess &&
			<Formik
				initialValues = {{
					username: "",
					password: "",
					password2:"",
					first_name: "",
					last_name: "",
					toggle: false
				}}
				onSubmit={handleLogin}
				validate={validateUserRegistration}
			>
				<Form>
					<Row>
						<Col sm='6'>
							<FormGroup>
								<Label for="first_name">First Name</Label>
								<Field 
									id='first_name'
									name="first_name"
									placeholder='First Name'
									className="form-control"
								/>
								<ErrorMessage name='first_name'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
							</FormGroup>
						</Col>
						<Col sm='6'>
							<FormGroup>
								<Label for="last_name">Last Name</Label>
								<Field 
									id='last_name'
									name="last_name"
									placeholder='Last Name'
									className="form-control"
								/>
								<ErrorMessage name='last_name'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col sm="6">
							<FormGroup>
								<Label for="username">username</Label>
								<Field 
									id='username'
									name="username"
									placeholder='Email'
									className="form-control"
								/>
								<ErrorMessage name='username'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
							</FormGroup>
						</Col>
						<Col sm="6"></Col>
					</Row>
					<Row>
						<Col sm="6">
							<FormGroup>
								<Label for="password">Password</Label>
								<Field 
									type="password"
									id='password'
									name="password"
									placeholder='Password'
									className="form-control"
								/>
								<ErrorMessage name='password'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
							</FormGroup>
						</Col>
						<Col sm="6">
							<FormGroup>
								<Label for="password2">Retype Password</Label>
								<Field 
									type="password"
									id='password2'
									name="password2"
									placeholder='Retype Password'
									className="form-control"
								/>
								<ErrorMessage name='password2'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col>
							<FormGroup>
								<Field type="checkbox" id='terms' name="toggle" /> <Label>I agree to terms and conditions.</Label>
								<ErrorMessage name='terms'>
									{(msg) => <p className='text-danger'>{msg}</p>}
								</ErrorMessage>
							</FormGroup>
						</Col>
						
					</Row>
					
					<Button type='submit' color='primary'>
						Register
					</Button>
				</Form>
			</Formik>
			}
		</>
	)
}

export default UserRegisterForm
