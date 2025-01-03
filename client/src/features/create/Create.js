import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { setCurrentUser, selectCurrentUser, registerUser  } from './createSlice';
import { Modal, ModalHeader, ModalBody, FormGroup, Label, Button, Row, Col, Input} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {  validateCreateConstest } from '../../utils/validateCreateConstest'

const Create = () => {
	const [success, toggleSuccess] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const currentUser = useSelector(selectCurrentUser);
	const dispatch = useDispatch();
	const navigation = useNavigate()
	const handleLogin = async (values) => {
		const newUser = {
			name: values.name,
			type: values.type,
			cost: values.cost,
			max_contenstants: values.max_contenstants,
			is_private: values.is_private,
			terms: values.terms,
			allow_late_payments: values.allow_late_payments
		};
		// const response  = await dispatch(registerUser(newUser));
		// console.log(response.payload)
		// if (response && response.payload === 'success') {
		// 	toggleSuccess(true);
		// 	setTimeout(()=> {
		// 		navigation('/')
		// 	}, 2000)
			
		// }
	}
	useEffect(() => {
		setShowSuccess(success)
	}, [success])
	return (
		<>
			<h2>Create Contest</h2>
			<hr/>
			<br></br>
			{showSuccess && <div class="alert alert-success" role="alert">
				A simple success alert—check it out!
			</div>}
			{!showSuccess &&

			<Formik
				initialValues = {{
					name: "",
					type: "Weekly Pool", //default for now
					is_private: true,
					cost: 5,
					max_contenstants: 100,
                    is_private: false,
					allow_late_payments: false
				}}
				onSubmit={handleLogin}
				validate={validateCreateConstest}
			>
				<Form>
					<Row>
						<Col sm="6">
							<FormGroup>
								<Label for="first_name">Contest Name</Label>
								<Field 
									id='name'
									name="name"
									placeholder='Contest Name'
									className="form-control"
								/>
								<ErrorMessage name='name'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
							</FormGroup>
						</Col>
					</Row>
                    <Row>
                        <Col sm="6">
						    <FormGroup>
								<Label for="last_name">Type</Label>
								<Field 
									id='type'
									name="type"
									placeholder='Type'
									className="form-control"
                                    disabled
								/>
								<ErrorMessage name='type'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
							</FormGroup>
						</Col>
                    </Row>
                    <Row>
						<Col >
							<FormGroup>
								<Field type="checkbox" id='is_private' name="is_private" /> <Label>This is a private League.</Label>
								<ErrorMessage name='is_private'>
									{(msg) => <p className='text-danger'>{msg}</p>}
								</ErrorMessage>
							</FormGroup>
						</Col>
						
					</Row>
					<Row>
						<Col sm="6">
							<FormGroup>
								<Label for="username">Cost</Label>
								<Field 
									id='cost'
									name="cost"
									placeholder='Email'
									className="form-control"
								/>
								<ErrorMessage name='cost'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
							</FormGroup>
						</Col>
						<Col sm="6"></Col>
					</Row>
					<Row>
						<Col >
							<FormGroup>
								<Field type="checkbox" id='allow_late_payments' name="allow_late_payments" /> <Label>Allow Late Payments.</Label>
								<ErrorMessage name='allow_late_payments'>
									{(msg) => <p className='text-danger'>{msg}</p>}
								</ErrorMessage>
							</FormGroup>
						</Col>
						
					</Row>
					<Row>
						<Col sm="6">
							<FormGroup>
								<Label for="password">Max Contenstants</Label>
								<Field 
									id='max_contenstants'
									name="max_contenstants"
									placeholder='100'
									className="form-control"
								/>
								<ErrorMessage name='max_contenstants'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col>
							<FormGroup>
								<Field type="checkbox" id='terms' name="terms" /> <Label>I agree to terms and conditions.</Label>
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

export default Create