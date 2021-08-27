import UserCommentActionBtns from './UserCommentActionBtns'
const UserComment = ({ name, img, comment }) => {
	return (
		<article className='flex items-start bg-white py-5 px-6 sm:flex-col'>
			<img src={img} alt={`${name} img`} className='w-8 rounded-full' />

			<div className='text-gray-600 pl-3 border-b-2 sm:pl-0 sm:pt-3'>
				<div className='flex flex-col gap-2'>
					<div className='flex items-center text-sm'>
						<a href='#' className='font-semibold hover:underline'>
							{name}
						</a>
						<span className='circle'></span>
						<p className='text-xs font-semibold text-gray-400'>
							4h
						</p>
					</div>
					<p className='text-sm'>{comment}</p>
				</div>

				<div className='pt-4 flex items-center gap-2 pb-3'>
					<UserCommentActionBtns />
				</div>
			</div>
		</article>
	)
}

export default UserComment
