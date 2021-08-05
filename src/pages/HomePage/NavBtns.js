import {
	FaBell,
	FaCaretDown,
	FaLevelUpAlt,
	FaPlus,
	FaSearch,
	FaSpinner,
	FaVideo,
} from 'react-icons/fa'
import { GiChatBubble } from 'react-icons/gi'
const NavBtns = () => {
	return (
		<>
			<div className='flex items-center gap-2 border-r pr-2'>
				{/* <button className='nav-btn'>
								<FaLevelUpAlt />
								<span className='font-semibold'>Popular</span>
							</button>

							<button className='nav-btn'>
								<FaSpinner />
								<span className='font-semibold'>All</span>
							</button> */}

				<button className='nav-btn'>
					<FaVideo />
					<span className='font-semibold'>Live</span>
				</button>
			</div>

			<div className='flex items-center gap-2 pl-2'>
				<button className='nav-btn'>
					<GiChatBubble />
					<span className='font-semibold'>Chat</span>
				</button>

				<button className='nav-btn'>
					<FaBell />
					<span className='font-semibold'>Notifications</span>
				</button>

				<button className='nav-btn'>
					<FaPlus />
					<span className='font-semibold'>Create Post</span>
				</button>
			</div>
		</>
	)
}

export default NavBtns
