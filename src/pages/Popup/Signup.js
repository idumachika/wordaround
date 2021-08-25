import { useState } from 'react'
import { FaApple, FaGoogle, FaTimes } from 'react-icons/fa'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { userActions } from '../../redux/actions/user.actons'
import { useDispatch, useSelector } from 'react-redux'
import {
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
} from '../../redux/constants/user.constant'

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		padding: '0px',
		width: 'clamp(500px, 100%, 50vw)',
		// right: 'auto',
		bottom: 'auto',
		transform: 'translate(-50%, -50%)',
	},
}

const Signup = ({
	closeModal,
	signUpModal,
	afterOpenModal,
	user_signup_status,
}) => {
	let subtitle
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirm_password, setconfirm_password] = useState('')
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		// this.setState({ submitted: true });
		console.log('this is the email and password ', email, password)
		console.log('this is the user_signup_status', user_signup_status)
		// const { dispatch } = this.props;
		if (name && email && password && confirm_password) {
			// this.setState({ submitted: true });
			dispatch(
				userActions.signUp(name, email, password, confirm_password)
			)
		} else {
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
				className='flex gap-6 relative sm:gap-0 sm:justify-center'>
				<div className='w-32 bg-gradient-to-b from-secondary  to-blue-700 sm:hidden'></div>

				<button
					onClick={closeModal}
					className='text-gray-500 text-2xl absolute top-4 right-4 hover:text-gray-800 sm:right-16'>
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

				<div className='pr-10 py-6 md:px-4 sm:pr-0 sm:text-center'>
					<h2 className='font-bold sm:text-2xl'>Join us</h2>
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

					<form className='flex items-start flex-col md:gap-4 sm:items-center'>
						<div className='mt-8 w-3/4 flex flex-col lg:mt-4 '>
							<button className='social-link focus:ring'>
								<FaGoogle className='text-lg lg:text-base' />
								<span>Continue with Google</span>
							</button>
							<button className='social-link mt-2 focus:ring'>
								<FaApple className='text-2xl lg:text-base' />
								<span>Continue with Apple</span>
							</button>
						</div>

						<p className='uppercase font-bold pt-8 lg:pt-6 text-gray-400 tracking-widest md:hidden'>
							or
						</p>

						<div className='w-3/4'>
							<div className='flex flex-col pt-6 lg:pt-4'>
								<div>
									<div className='flex flex-col pt-3'>
										<label
											htmlFor='username'
											className='text-xs font-bold uppercase tracking-wide'>
											Name
										</label>
										<input
											type='text'
											name='Full Name'
											id='name'
											className='border rounded p-2 mt-1 sm:text-center'
											value={name}
											onChange={(e) =>
												setName(e.target.value)
											}
										/>
										{/* error message */}
										{/* <span className='text-xs italic text-red-500'>
											Username cannot be empty
										</span> */}
										{/* Add this is the username the user choose already exist in database */}
										{/* <span className='text-xs italic text-red-500'>
											Sorry, username already exist
										</span> */}
									</div>
									<div className='flex flex-col pt-4'>
										<label
											htmlFor='username'
											className='text-xs font-bold uppercase tracking-wide'>
											Email address
										</label>
										<input
											type='email'
											name='email'
											id='email'
											className='border rounded p-2 mt-1 sm:text-center'
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
										/>
										{/* error message */}
										{/* <span className='text-xs italic text-red-500'>
											Email cannot be empty
										</span> */}
									</div>
									<div className='flex flex-col pt-4'>
										<label
											htmlFor='username'
											className='text-xs font-bold uppercase tracking-wide'>
											Password
										</label>
										<input
											type='text'
											name='password'
											id='password'
											className='border rounded p-2 mt-1 sm:text-center'
											value={password}
											onChange={(e) =>
												setPassword(e.target.value)
											}
										/>
										{/* error message */}
										{/* <span className='text-xs italic text-red-500'>
											Password cannot be empty
										</span> */}
									</div>
									<div className='flex flex-col pt-4'>
										<label
											htmlFor='username'
											className='text-xs font-bold uppercase tracking-wide'>
											Confirm Password
										</label>
										<input
											type='text'
											name='confirm_password'
											id='confirm_password'
											className='border rounded p-2 mt-1 sm:text-center'
											value={confirm_password}
											onChange={(e) =>
												setconfirm_password(
													e.target.value
												)
											}
										/>
										{/* error message */}
										{/* <span className='text-xs italic text-red-500'>
											Password cannot be empty
										</span> */}

										{/* Add this if password does not match */}
										{/* <span className='text-xs italic text-red-500'>
											Password does not match
										</span> */}
									</div>
								</div>

								{/* if data is being fetched, you can add "animate-pulse" to the button class to indicate loading*/}
								<button
									onClick={handleSubmit}
									type='submit'
									className='bg-secondary text-white p-2 rounded-full mt-4 font-bold hover:opacity-90 flex items-center justify-center focus:ring'>
									<svg
										class='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'>
										<circle
											class='opacity-25'
											cx='12'
											cy='12'
											r='10'
											stroke='currentColor'
											stroke-width='4'></circle>
										<path
											class='opacity-75'
											fill='currentColor'
											d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
									</svg>
									Continue
								</button>
							</div>
						</div>

						<p className='pt-4 text-xs md:text-center'>
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

const mapStateToProps = (state) => ({
	user_signup_status: state.onboarding_user_details,
})

const mapDispatchToProps = { userActions }

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
