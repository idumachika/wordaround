import { useState } from 'react'

const Tags = () => {
	const [tags, setTags] = useState(['Top', 'News', 'Gaming', 'Sports'])
	return (
		<div className='flex items-center gap-2 text-xs mx-4 my-6'>
			{tags.map((tag) => {
				return (
					<div>
						<a
							href='#'
							className='bg-gray-100 py-1 px-3 rounded-full font-bold text-secondary'>
							{tag}
						</a>
					</div>
				)
			})}
		</div>
	)
}

export default Tags
