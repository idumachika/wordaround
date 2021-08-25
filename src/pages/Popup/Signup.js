import { useState } from 'react'
import { FaApple, FaGoogle, FaTimes } from 'react-icons/fa'
import Modal from 'react-modal'
import { connect } from 'react-redux';
import { userActions } from "../../redux/actions/user.actons";
import { useDispatch, useSelector } from "react-redux";
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../../redux/constants/user.constant'



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

const Signup = ({ closeModal, signUpModal, afterOpenModal, user_signup_status }) => {

	let subtitle
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirm_password, setconfirm_password] = useState('')
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		// this.setState({ submitted: true });
		console.log("this is the email and password ", email, password)
		console.log("this is the user_signup_status", user_signup_status)
		// const { dispatch } = this.props;
		if (name && email && password && confirm_password) {
			// this.setState({ submitted: true });
			dispatch(userActions.signUp(name, email, password, confirm_password));

		}
		else {
			// this.setState({ submitted: false });
		}
	}


	return (
		<Modal
			isOpen={signUpModal}
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

				{/* <div>
					<div className='px-6 py-6 pb-2 border-b-2'>
						<h2 className='font-semibold text-lg'>
							Choose your username
						</h2>
						<p>
							Your username is how other members will see you.
							This name will be used to credit you for things you
							share on WordAround. What should we call you?
						</p>
					</div>

					<form className='flex items-start flex-col px-6 py-6'>
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
								className='border rounded p-2 mt-1 w-72'
							/>
							<span className='text-xs text-red-600 pt-1'>
								Username must be between 3 and 20 characters
							</span>
						</div>
						<div className='flex flex-col pt-8'>
							<label
								htmlFor='username'
								className='text-xs font-bold uppercase tracking-wide'>
								Password
							</label>
							<input
								type='password'
								name='password'
								id='password'
								className='border rounded p-2 mt-1 w-72'
							/>
							<span className='text-xs text-red-600 pt-1'>
								Password must be at least 8 characters long
							</span>
						</div>
					</form>

					<div className='flex w-full justify-between px-6 py-4 pt-2 border-t-2 mt-60'>
						<button className='font-semibold hover:text-secondary'>
							Back
						</button>
						<button className='font-semibold bg-secondary text-white py-2 px-10 rounded-full  hover:opacity-90'>
							Sign up
						</button>
					</div>
				</div> */}

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

					<form className='flex items-start flex-col'>
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
								<div className='flex flex-col pt-4'>
									<label
										htmlFor='username'
										className='text-xs font-bold uppercase tracking-wide'>
										Name
									</label>
									<input
										type='text'
										name='Full Name'
										id='name'
										className='border rounded p-2 mt-1'
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
									<label
										htmlFor='username'
										className='text-xs font-bold uppercase tracking-wide'>
										Email address
									</label>
									<input
										type='email'
										name='email'
										id='email'
										className='border rounded p-2 mt-1'
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
									<label
										htmlFor='username'
										className='text-xs font-bold uppercase tracking-wide'>
										Password
									</label>
									<input
										type='text'
										name='password'
										id='password'
										className='border rounded p-2 mt-1'
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
									/>
									<label
										htmlFor='username'
										className='text-xs font-bold uppercase tracking-wide'>
										Confirm Password
									</label>
									<input
										type='text'
										name='confirm_password'
										id='confirm_password'
										className='border rounded p-2 mt-1'
										value={confirm_password}
										onChange={(e) =>
											setconfirm_password(e.target.value)
										}
									/>
								</div>

								<button onClick={handleSubmit}
									type='submit'
									className='bg-secondary text-white p-2 rounded-full mt-4 font-bold hover:opacity-90'>
									Continue
								</button>
							</div>
						</div>

						<p className='pt-4 text-xs'>
							Already with us?{' '}
							<a
								href='#'
								className='text-secondary uppercase font-bold hover:underline'>
								Log in
							</a>
						</p>
					</form>
				</div>
			</div>
			{/* <div>this the modal i want to seeee and implement</div> */}
		</Modal>
	)
}

const mapStateToProps = state => ({
	user_signup_status: state.onboarding_user_details
});

const mapDispatchToProps = { userActions };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);