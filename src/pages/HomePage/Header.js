// import { BiCaretDown, BiSearch } from 'react-icons/bi'
import { FaCaretDown, FaSearch } from 'react-icons/fa'

const Header = () => {
	return (
		<header className='px-5 py-3 flex items-center justify-between shadow-md gap-8 sticky top-0 bg-white'>
			<div className='flex flex-1 items-center'>
				<h1 className='font-semibold text-xl uppercase'>WordAround</h1>

				<form className='flex w-full pl-8 relative'>
					<label
						htmlFor='search'
						className='absolute align-middle top-1'>
						<FaSearch className='w-8' />
					</label>
					<input
						type='text'
						id='search'
						placeholder='Search WordAround'
						className='bg-gray-100 rounded-full py-2 px-8 text-xs flex-1'
					/>
				</form>
			</div>
			<div className='flex gap-4'>
				<div className='flex gap-4 text-sm'>
					<button type='button' className='btn text-secondary'>
						Log in
					</button>
					<button
						type='button'
						className='btn bg-secondary border-0 text-white'>
						Sign up
					</button>
				</div>

				<button>
					<FaCaretDown />
				</button>
			</div>
		</header>
	)
}

export default Header
