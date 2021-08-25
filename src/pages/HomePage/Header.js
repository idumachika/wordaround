import { FaCaretDown, FaSearch, FaUserAlt } from 'react-icons/fa'
import React, { useState } from 'react'
import Login from '../Popup/Login'
import Signup from '../Popup/Signup'
// import Modal from '../Popup/Modal'
import NavBtns from './NavBtns'
import User from './User'
import { userInfo } from '../../data/userinfo'

const Header = () => {
	const [logInModal, setIsOpen] = useState(false)
	const [signUpModal, setSignUpModal] = useState(false)
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)
	const [userEmail, setUserEmail] = useState('')
	const [userPassword, setUserPassword] = useState('')
	const [show, setShow] = useState(false)

	function openModal() {
		setIsOpen(true)
	}

	function openSignUpModal() {
		setSignUpModal(true)
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		// subtitle.style.color = '#f00'
	}

	function closeModal() {
		setIsOpen(false)
		setSignUpModal(false)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	// function to log user in
	const logInUser = (e) => {
		e.preventDefault()
		userInfo.map(({ password, email }) => {
			console.log(email)
			if (userEmail === email && password === userPassword) {
				console.log('yh, u are fucking logged in asshole 🤣')
				setIsOpen(false)
				setUserEmail('')
				setUserPassword('')
				setIsUserLoggedIn(true)
			} else {
				console.log('ogbeni 😒 check your details')
			}
		})
	}

	const logOutUser = (e) => {
		e.preventDefault()
		setIsUserLoggedIn(false)
	}

	function renderAuthModal() {
		return (
			<div>
				{/* <button onClick={openModal}>Open Modal</button> */}
				<Login
					closeModal={closeModal}
					logInModal={logInModal}
					afterOpenModal={afterOpenModal}
					userInfo={userInfo}
					logInUser={logInUser}
					userEmail={userEmail}
					setUserEmail={setUserEmail}
					userPassword={userPassword}
					setUserPassword={setUserPassword}
				/>
				<Signup
					closeModal={closeModal}
					signUpModal={signUpModal}
					afterOpenModal={afterOpenModal}
				/>
			</div>
		)
	}

	return (
		<header className='px-8 py-2 flex items-center justify-between shadow-md gap-8 sticky top-0 bg-white sm:px-2 sm:gap-2'>
			<div className='flex flex-1 items-center'>
				<h1 className='font-semibold text-xl uppercase sm:capitalize sm:text-base'>
					WordAround
				</h1>
				{renderAuthModal(logInModal)}

				<form
					className='flex w-full pl-8 relative sm:pl-2'
					onSubmit={handleSubmit}>
					<label
						htmlFor='search'
						className='absolute align-middle top-2'>
						<FaSearch className='w-8 text-gray-300' />
					</label>
					<input
						type='text'
						id='search'
						placeholder='Search WordAround'
						className='bg-gray-100 rounded py-2 px-10 text-sm font-semibold flex-1 focus:outline-none sm:text-xs xs:px-4 xs:pl-6'
					/>
				</form>
			</div>
			<div className='flex gap-4'>
				{/* before user is logged in or after logging out */}
				{!isUserLoggedIn ? (
					<>
						<div
							className={
								show
									? 'flex gap-4 text-sm md:absolute md:right-3 md:top-14 md:rounded md:flex-col md:bg-white md:p-4 md:shadow'
									: 'md:hidden flex items-center gap-4'
							}>
							<button
								onClick={openModal}
								type='button'
								className='btn text-secondary'>
								Log in
							</button>

							<button
								onClick={openSignUpModal}
								type='button'
								className='btn bg-secondary border-0 text-white'>
								Sign up
							</button>
						</div>
						<button
							className='flex items-center gap-1 border rounded p-2 md:p-1 xs:border-0'
							onClick={() => setShow(!show)}>
							<FaUserAlt />
							<FaCaretDown />
						</button>
					</>
				) : (
					<div className='flex'>
						<div className='flex text-sm pr-5 md:pr-0'>
							<NavBtns />
						</div>

						<div className='flex items-center gap-4 border'>
							<User logOutUser={logOutUser} />
						</div>
					</div>
				)}
			</div>
		</header>
	)
}

export default Header
