import { useState } from 'react'
import { FaCaretDown, FaSignOutAlt, FaUserCircle } from 'react-icons/fa'

const User = ({ logOutUser }) => {
	const [show, setShow] = useState(false)

	return (
		<>
			<div className='flex items-center gap-2 sm:hidden'>
				<img
					src='https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png'
					alt=''
					className='w-4 rounded-full'
				/>
				<p>SuperBreezy007</p>
			</div>

			<div className='relative'>
				<button
					className='p-1 hover:bg-gray-200'
					onClick={() => setShow(!show)}>
					<FaCaretDown />
				</button>

				<div
					className={
						show ? 'bg-gray-100 absolute right-0 w-max' : ' hidden'
					}>
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

							<div className='flex flex-col border-t-2 '>
								<div className='hidden flex-col lg:flex'>
									<a
										href='#'
										className='py-2 px-12 hover:bg-gray-200'>
										Chat
									</a>
									<a
										href='#'
										className='py-2 px-12 hover:bg-gray-200'>
										Notifications
									</a>
									<a
										href='#'
										className='py-2 px-12 hover:bg-gray-200'>
										Create Post
									</a>
								</div>
								<a
									href='#'
									className='py-2 px-12 hover:bg-gray-200 hidden md:block'>
									Live
								</a>
							</div>
						</div>
					</div>

					<button
						className='flex items-center gap-4 text-gray-500 p-4 hover:bg-gray-200'
						onClick={logOutUser}>
						<FaSignOutAlt />
						<p>Log Out</p>
					</button>
				</div>
			</div>
		</>
	)
}

export default User
