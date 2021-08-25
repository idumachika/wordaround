import { FaExclamationCircle, FaTimes } from 'react-icons/fa'

const SucessAlert = () => {
	return (
		<div className='bg-yellow-50 border border-yellow-300 flex items-center px-1 py-1 rounded-lg  gap-2 absolute bottom-2'>
			<div className='p-2 rounded-xl bg-yellow-500'>
				<FaExclamationCircle className='text-white' />
			</div>
			<p>Are you sure you want to delete?</p>

			<button
				type='button'
				className='p-1 rounded-lg ml-6 hover:bg-white'>
				<FaTimes />
			</button>
		</div>
	)
}

export default SucessAlert
