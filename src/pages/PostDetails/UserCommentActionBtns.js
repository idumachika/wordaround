import { FaArrowDown, FaArrowUp, FaRegCommentAlt } from 'react-icons/fa'
const UserCommentActionBtns = () => {
	return (
		<>
			<div className='flex items-center gap-1'>
				<button className='hover:text-green-700 hover:bg-gray-200 p-1'>
					<FaArrowUp />
				</button>
				<span className='text-sm font-semibold'>433</span>
				<button className='hover:text-red-700 hover:bg-gray-200 p-1'>
					<FaArrowDown />
				</button>
			</div>
			<div className='flex'>
				<button className='social-action-box'>
					<FaRegCommentAlt />
					<span className='text-xs font-extrabold'>Reply</span>
				</button>
				<button className='social-action-box'>
					<span className='text-xs font-extrabold'>Share</span>
				</button>
				<button className='social-action-box'>
					<span className='text-xs font-extrabold'>Report</span>
				</button>
				<button className='social-action-box'>
					<span className='text-xs font-extrabold'>Save</span>
				</button>
			</div>
		</>
	)
}

export default UserCommentActionBtns
