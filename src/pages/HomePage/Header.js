import { FaCaretDown, FaSearch } from 'react-icons/fa'
import React from 'react'
import Modal from 'react-modal'
import Login from '../Popup/Login'
import Signup from '../Popup/Signup'
// import Modal from '../Popup/Modal'
// import NavBtns from './NavBtns'
// import User from './User'

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

const Header = () => {
	let subtitle

	const [modalIsOpen, setIsOpen] = React.useState(false)

	function openModal() {
		setIsOpen(true)
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		// subtitle.style.color = '#f00'
	}

	function closeModal() {
		setIsOpen(false)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	function renderAuthModal() {
		return (
			<div>
				{/* <button onClick={openModal}>Open Modal</button> */}
				<Modal
					isOpen={modalIsOpen}
					onAfterOpen={afterOpenModal}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel='Example Modal'>
					<div
						ref={(_subtitle) => (subtitle = _subtitle)}
						className='flex gap-6 relative'>
						<div className='w-24 bg-gradient-to-b from-secondary  to-blue-700'></div>

						<Login closeModal={closeModal} />
						{/* <Signup /> */}
					</div>
					{/* <div>this the modal i want to seeee and implement</div> */}
				</Modal>
			</div>
		)
	}

	return (
		<header className='px-8 py-2 flex items-center justify-between shadow-md gap-8 sticky top-0 bg-white'>
			<div className='flex flex-1 items-center'>
				<h1 className='font-semibold text-xl uppercase'>WordAround</h1>
				{renderAuthModal()}

				<form
					className='flex w-full pl-8 relative'
					onSubmit={handleSubmit}>
					<label
						htmlFor='search'
						className='absolute align-middle top-3'>
						<FaSearch className='w-8 text-gray-300' />
					</label>
					<input
						type='text'
						id='search'
						placeholder='Search WordAround'
						className='bg-gray-100 rounded-full py-2 px-10 text-sm font-semibold flex-1'
					/>
				</form>
			</div>
			<div className='flex gap-4'>
				{/* before user is logged in or after logging out */}
				<div className='flex gap-4 text-sm'>
					<div>
						<button
							onClick={openModal}
							type='button'
							className='btn text-secondary'>
							Log in
						</button>
					</div>
					<button
						type='button'
						className='btn bg-secondary border-0 text-white'>
						Sign up
					</button>
				</div>

				{/* after user is logged in */}
				{/* <div className='flex'>
					<div className='flex text-sm pr-5'>
						<NavBtns />
					</div>

					<div className='flex items-center gap-10'>
						<User />
					</div>
				</div> */}

				<button>
					<FaCaretDown />
				</button>
			</div>
		</header>
	)
}

export default Header
