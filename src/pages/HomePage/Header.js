import { FaCaretDown, FaSearch } from 'react-icons/fa'
// import Modal from '../Popup/Modal'
// import NavBtns from './NavBtns'
// import User from './User'

const Header = () => {
	return (
		<header className='px-5 py-3 flex items-center justify-between shadow-md gap-8 sticky top-0 bg-white'>
			<div className='flex flex-1 items-center'>
				<h1 className='font-semibold text-xl uppercase'>WordAround</h1>

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
						<button type='button' className='btn text-secondary'>
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
