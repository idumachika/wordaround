import { FaCaretDown, FaSearch } from 'react-icons/fa'
import React from 'react';
import Modal from 'react-modal';
// import Modal from '../Popup/Modal'
// import NavBtns from './NavBtns'
// import User from './User'

const customStyles = {
	content: {

		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		transform: 'translate(-50%, -50%)',
	},
};

const Header = () => {
	let subtitle;


	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		// subtitle.style.color = '#f00';
	}

	function closeModal() {
		setIsOpen(false);
	}

	function renderAuthModal() {
		return (<div>
			{/* <button onClick={openModal}>Open Modal</button> */}
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
				<button onClick={closeModal}>close</button>
				<div>this the modal i want to seeee and implement</div>

			</Modal>
		</div>)
	}

	return (
		<header className='px-5 py-3 flex items-center justify-between shadow-md gap-8 sticky top-0 bg-white'>
			<div className='flex flex-1 items-center'>
				<h1 className='font-semibold text-xl uppercase'>WordAround</h1>
				{renderAuthModal()}

				<form className='flex w-full pl-8 relative'>
					<label
						htmlFor='search'
						className='absolute align-middle top-3'>
						<FaSearch className='w-8 text-gray-300' />
					</label>
					<input
						type='text'
						id='search'
						placeholder='Search WordAround'
						className='bg-gray-100 rounded-full py-3 px-8 text-xs flex-1'
					/>
				</form>
			</div>
			<div className='flex gap-4'>
				{/* before user is logged in or after logging out */}
				<div className='flex gap-4 text-sm'>
					<div>
						<button onClick={openModal} type='button' className='btn text-secondary'>
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
