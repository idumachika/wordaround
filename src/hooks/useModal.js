import { useState } from 'react'

const useModal = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleModal = () => setIsOpen(!setIsOpen)

	return { isOpen, toggleModal }
}

export default useModal
