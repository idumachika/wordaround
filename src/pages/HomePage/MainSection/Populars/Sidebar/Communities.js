import { useState } from 'react'

const Communities = () => {
	const [community, setCommunity] = useState([
		{
			id: 1,
			image: 'https://styles.redditmedia.com/t5_2qmdl/styles/communityIcon_nrexilph40971.jpeg?format=pjpg&s=fd77a770ffdcba6c6d57ce87aa8e79eb3c472087',
			name: 'r/Nigeria',
		},
	])
	return (
		<ol>
			{community.map((list) => (
				<li key={list.id}>
					<a href='#'>
						<div className='flex items-center gap-10 py-2 px-4'>
							<span className='font-semibold'>1</span>

							<div className='flex items-center text-sm font-semibold gap-2'>
								<img
									src={list.image}
									alt={list.name}
									className='w-8 rounded-full'
								/>
								<span>{list.name}</span>
							</div>
						</div>
					</a>
				</li>
			))}
		</ol>
	)
}

export default Communities
