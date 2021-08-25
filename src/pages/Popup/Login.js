import { useState } from 'react'
import { FaApple, FaGoogle, FaTimes } from 'react-icons/fa'
import Modal from 'react-modal'
import { connect } from 'react-redux';
import { userActions } from "../../redux/actions/user.actons";
import { useDispatch, useSelector } from "react-redux";



const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		padding: '0px',
		// right: 'auto',
		bottom: 'auto',
		transform: 'translate(-50%, -50%)',
	},
}

const Login = ({
	closeModal,
	logInModal,
	afterOpenModal,
	userInfo,
	logInUser,
	userPassword,
	setUserPassword,
	userEmail,
	setUserEmail,
}) => {
	let subtitle

	const [user, setUser] = useState(userInfo)
	// const [token, setToken] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch();



	const handleSubmit = (e) => {
		e.preventDefault();
		// this.setState({ submitted: true });
		console.log("this is the email and password ", email, password)
		// const { dispatch } = this.props;
		if (email && password) {
			// this.setState({ submitted: true });
			dispatch(userActions.login(email, password));

		}
		else {
			// this.setState({ submitted: false });
		}
	}


	return (
		<Modal
			isOpen={logInModal}
			onAfterOpen={afterOpenModal}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel='Example Modal'>
			<div
				ref={(_subtitle) => (subtitle = _subtitle)}
				className='flex gap-6 relative'>
				<div className='w-24 bg-gradient-to-b from-secondary  to-blue-700'></div>

				<button
					onClick={closeModal}
					className='text-gray-500 text-2xl absolute top-4 right-4 hover:text-gray-800'>
					<FaTimes />
				</button>

				<div className='pr-10 py-6'>
					<h2 className='font-bold'>Login</h2>
					<p className='text-xs pt-1'>
						By continuing, you agree to our{' '}
						<a href='#' className='text-secondary hover:underline'>
							User Agreement
						</a>{' '}
						and{' '}
						<a href='#' className='text-secondary hover:underline'>
							Privacy Policy
						</a>
					</p>

					<form
						className='flex items-start flex-col'
						onSubmit={logInUser}>
						<div className='mt-12 w-3/4 flex flex-col'>
							<button className='social-link'>
								<FaGoogle className='text-lg' />
								<span>Continue with Google</span>
							</button>
							<button className='social-link mt-2'>
								<FaApple className='text-2xl' />
								<span>Continue with Apple</span>
							</button>
						</div>

						<p className='uppercase font-bold pt-8 text-gray-400 tracking-widest'>
							or
						</p>

						<div className='w-3/4'>
							<div className='flex flex-col pt-8'>
								<div className='flex flex-col'>
									<label
										htmlFor='username'
										className='text-xs font-bold uppercase tracking-wide'>
										Username
									</label>
									<input
										type='text'
										name='username'
										id='username'
										className='border rounded p-2 mt-1'
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
								<div className='flex flex-col pt-4'>
									<label
										htmlFor='username'
										className='text-xs font-bold uppercase tracking-wide'>
										Password
									</label>
									<input
										type='password'
										name='password'
										id='password'
										className='border rounded p-2 mt-1'
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
									/>
								</div>

								<button
									onClick={handleSubmit}
									type='submit'
									className='bg-secondary text-white p-2 rounded-full mt-4 font-bold hover:opacity-90'>
									Log in
								</button>
							</div>
							<p className='text-xs pt-4'>
								Forget your{' '}
								<a
									href='#'
									className='text-secondary hover:underline'>
									username
								</a>{' '}
								or{' '}
								<a
									href='#'
									className='text-secondary hover:underline'>
									password
								</a>
								?
							</p>
						</div>

						<p className='pt-4 text-xs'>
							New to WordAround?{' '}
							<a
								href='#'
								className='text-secondary uppercase font-bold hover:underline'>
								Sign Up
							</a>
						</p>
					</form>
				</div>

				{/* <Login closeModal={closeModal} /> */}
				{/* <Signup /> */}
			</div>
			{/* <div>this the modal i want to seeee and implement</div> */}
		</Modal>
	)
}

const mapStateToProps = state => ({
	// count: state.counter.count
});

const mapDispatchToProps = { userActions };


export default connect(mapStateToProps, mapDispatchToProps)(Login);