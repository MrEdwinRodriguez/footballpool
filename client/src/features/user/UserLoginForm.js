import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { setCurrentUser, selectCurrentUser } from './userSlice';
import { Modal, ModalHeader, ModalBody, FormGroup, Label, Button } from 'reactstrap';
import { Formik, Field, Form } from 'formik';
import defaultAvatar from '../../app/assets/img/unicorn.png';

const UserLoginForm = () => {
	const [loginModalOpen, setLoginModalOpen] = useState(false);
	const currentUser = useSelector(selectCurrentUser);
	const dispatch = useDispatch();
	const handleLogin = (values) => {
		const currentUser = {
			id: Date.now(),
			avatar: defaultAvatar,
			username: values.username,
			password: values.password
		};
		dispatch(setCurrentUser(currentUser));
		setLoginModalOpen(false);
	}
	return (
		<>
			<span className='navbar-text ml-auto'>
                {currentUser ? (
                    <div style={{ width: '4rem', height: '4rem' }}>
                        <img
                            src={currentUser.avatar}
                            alt={'user'}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                ) : (
                    <Button
                        outline
                        onClick={() => setLoginModalOpen(true)}
                        style={{ color: 'white', border: '1px solid white' }}
                    >
                        <i className='fa fa-sign-in fa-lg' /> Login
                    </Button>
                )}
            </span>
			<Modal isOpen={loginModalOpen}>
					<ModalHeader toggle={() => setLoginModalOpen(false)}>
						Login
					</ModalHeader>
					<ModalBody>
						<Formik
							initialValues = {{
								username: "",
								password: ""
							}}
							onSubmit={handleLogin}
						>
							<Form>
								<FormGroup>
									<Label for="username">Username</Label>
									<Field 
										id='username'
										name="username"
										placeholder='username'
										className="form-control"
									/>
								</FormGroup>
								<FormGroup>
									<Label for="password">Password</Label>
									<Field 
										id='password'
										name="password"
										placeholder='password'
										className="form-control"
									/>
								</FormGroup>
								<Button type='submit' color='primary'>
									Login
								</Button>
							</Form>
						</Formik>
						<Link to={`/register`} ClassName="active" onClick={()=>setLoginModalOpen(false)}>Do not have an account? Register</Link>
					</ModalBody>
			</Modal>
		</>
	)
}

export default UserLoginForm
