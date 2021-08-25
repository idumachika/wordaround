import {
	FaEllipsisH,
	FaRegBookmark,
	FaRegCommentAlt,
	FaRegEyeSlash,
	FaRegFlag,
	FaRegShareSquare,
} from 'react-icons/fa'

const ActionBtns = () => {
	return (
		<footer className='flex items-center pt-2'>
			<div className='flex items-center'>
				<button className='social-action-box'>
					<FaRegCommentAlt />
					<span className='text-xs font-extrabold'>
						1.2k Comments
					</span>
				</button>
				<button className='social-action-box'>
					<FaRegShareSquare />
					<span className='text-xs font-extrabold'>Share</span>
				</button>
				{/* <button className='social-action-box'>
					<FaRegBookmark />
					<span className='text-xs font-extrabold'>Save</span>
				</button>
				<button className='social-action-box'>
					<FaRegEyeSlash />
					<span className='text-xs font-extrabold'>Hide</span>
				</button>
				<button className='social-action-box'>
					<FaRegFlag />
					<span className='text-xs font-extrabold'>Report</span>
				</button> */}
			</div>

			<div>
				{/* <p className='text-xs text-gray-500'>94% Upvoted</p> */}
				<button className='social-action-box'>
					<FaEllipsisH />
				</button>

				{/* <div className='hidden flex-col items-start'>
					<button className='social-action-box'>
						<FaRegEyeSlash />
						<span className='text-xs font-extrabold'>Hide</span>
					</button>
					<button className='social-action-box'>
						<FaRegFlag />
						<span className='text-xs font-extrabold'>Report</span>
					</button>
				</div> */}
			</div>
		</footer>
	)
}

export default ActionBtns
