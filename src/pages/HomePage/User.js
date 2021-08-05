import { FaCaretDown, FaSignOutAlt, FaUserCircle } from 'react-icons/fa'

const User = () => {
	return (
		<>
			<div className='flex items-center gap-2'>
				<img
					src='https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png'
					alt=''
					className='w-4 rounded-full'
				/>
				<p>SuperBreezy007</p>
			</div>

			<div>
				<button>
					<FaCaretDown />
				</button>

				<div className='bg-gray-100 hidden'>
					<div>
						<header className='flex items-center gap-4 text-gray-500 p-4'>
							<FaUserCircle />
							<p>My Stuff</p>
						</header>

						<div className='flex flex-col'>
							<a
								href='#'
								className='py-2 px-12 hover:bg-gray-200'>
								Profile
							</a>
							<a
								href='#'
								className='py-2 px-12 hover:bg-gray-200'>
								Create Avatar
							</a>
							<a
								href='#'
								className='py-2 px-12 hover:bg-gray-200'>
								Settings
							</a>
						</div>
					</div>

					<a
						href='#'
						className='flex items-center gap-4 text-gray-500 p-4'>
						<FaSignOutAlt />
						<p>Log Out</p>
					</a>
				</div>
			</div>
		</>
	)
}

export default User
