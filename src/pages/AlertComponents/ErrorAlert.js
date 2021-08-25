import { FaExclamationTriangle, FaTimes } from 'react-icons/fa'

const ErrorAlert = ({ message }) => {
	return (
		<div className='bg-red-50 border border-red-300 flex items-center px-1 py-1 rounded-lg  gap-2 absolute bottom-2'>
			<div className='p-2 rounded-xl bg-red-500'>
				<FaExclamationTriangle className='text-white' />
			</div>
			<p>{message}</p>

			<button
				type='button'
				className='p-1 rounded-lg ml-6 hover:bg-white'>
				<FaTimes />
			</button>
		</div>
	)
}

export default ErrorAlert
