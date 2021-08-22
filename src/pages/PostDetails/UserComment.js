import UserCommentActionBtns from './UserCommentActionBtns'
const UserComment = ({ name, img, comment }) => {
	return (
		<article className='flex items-start bg-white py-5 px-6'>
			<img src={img} alt={`${name} img`} className=' w-8 rounded-full' />

			<div className='text-gray-600 border-l-2 pl-3'>
				<div className='flex flex-col gap-2'>
					<div className='flex items-center text-sm'>
						<p className='font-semibold'>{name}</p>
						<span className='circle'></span>
						<p className='text-xs font-semibold text-gray-400'>
							4h
						</p>
					</div>
					<p className='text-sm'>{comment}</p>
				</div>

				<div className='pt-4 flex items-center gap-2'>
					<UserCommentActionBtns />
				</div>
			</div>
		</article>
	)
}

export default UserComment
