import UserCommentActionBtns from './UserCommentActionBtns'
const UserComment = () => {
	return (
		<>
			<img
				src='https://styles.redditmedia.com/t5_30juef/styles/profileIcon_snoobdb66aec-9b58-4ed8-b73d-c87272683de4-headshot.png?width=256&height=256&crop=256:256,smart&s=7fc9a0d147548bc38405014fb5e5a6b6c83bf56a'
				alt=''
				className=' w-8 rounded-full'
			/>

			<div className='text-gray-600'>
				<div className='flex flex-col gap-2'>
					<div className='flex items-center text-sm'>
						<p className='font-semibold'>Cwoey</p>
						<span className='circle'></span>
						<p className='text-xs font-semibold text-gray-400'>
							4h
						</p>
					</div>
					<p className='text-sm'>
						Where I live, it’s quite common for idiots to quote
						bible verses that have nothing to do with their profile
						pics, which usually are just selfies.
					</p>
				</div>

				<div className='pt-4 flex items-center gap-2'>
					<UserCommentActionBtns />
				</div>
			</div>
		</>
	)
}

export default UserComment
