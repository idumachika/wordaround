import { createPortal } from 'react-dom'

const Modal = ({ isOpen, hideModal }) => {
	return isOpen
		? createPortal(
				<div>
					<div>
						<h5>Modal</h5>
						<span>Why this modal has popped up</span>
					</div>
					{/* <button onClick={hideModal}>Close</button> */}
				</div>,
				document.body
		  )
		: null
}

export default Modal
