const Instructions = () => {
	return (
		<div className='p-4 text-xs bg-white mt-4 rounded overflow-hidde'>
			<div className=' grid grid-cols-2 gap-4'>
				<a href='#'>User Agreement</a>
				<a href='#'>Privacy Policy</a>
				<a href='#'>Content Policy</a>
				<a href='#'>Moderator Guidelines</a>
			</div>

			<p className='pt-6'>
				&copy; {new Date().getFullYear()} WordAround. All rights
				reserved.
			</p>
		</div>
	)
}

export default Instructions
