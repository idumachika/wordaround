import { FaExclamationCircle, FaTimes } from 'react-icons/fa'

const SucessAlert = () => {
	return (
		<div className='bg-blue-50 border border-blue-300 flex items-center px-1 py-1 rounded-lg  gap-2 absolute bottom-2'>
			<div className='p-2 rounded-xl bg-blue-500'>
				<FaExclamationCircle className='text-white' />
			</div>
			<p>We have updated our privacy policy</p>

			<button
				type='button'
				className='p-1 rounded-lg ml-6 hover:bg-white'>
				<FaTimes />
			</button>
		</div>
	)
}

export default SucessAlert
