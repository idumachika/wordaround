const VoteBtns = () => {
	return (
		<div className='flex items-center gap-1'>
			<button>
				<FaArrowUp className='text-2xl' />
			</button>
			<span className='text-sm'>20.4k</span>
			<button>
				<FaArrowDown className='text-2xl' />
			</button>
		</div>
	)
}

export default VoteBtns
