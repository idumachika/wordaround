import { useState } from 'react'
import { FaAtom, FaBirthdayCake, FaRegSun } from 'react-icons/fa'
import Header from '../HomePage/Header'
import FilterPosts from '../HomePage/MainSection/Populars/FilterCard'
import SocialPost from '../HomePage/MainSection/Populars/Socials/SocialCard'

const UserProfile = () => {
	const [profileLinks, setProfileLink] = useState([
		'overview',
		'posts',
		'comments',
		'saved',
		'hidden',
		'award given',
		'award received',
	])
	return (
		<>
			<Header />

			<section className='flex flex-col bg-gray-50'>
				<div className='py-3 w-full border bg-white'>
					<header className='flex w-8/12 items-start justify-between m-auto text-sm'>
						{profileLinks.map((link, index) => (
							<div key={index}>
								<a
									href='#'
									className='font-semibold hover:text-secondary'>
									{link.toUpperCase()}
								</a>
							</div>
						))}
					</header>
				</div>
				{/* user profile details */}
				<div className='w-8/12 m-auto flex gap-8 pt-6'>
					<div>
						<FilterPosts />
						<SocialPost />
					</div>

					<aside className='flex-1 border h-full'>
						<div className=' bg-white rounded overflow-hidden'>
							<div className='bg-gray-600 h-24 px-4 pb-2'></div>
							<div className='px-4'>
								<div className='flex items-center justify-between'>
									<div className='h-24 w-24 rounded-md bg-black -mt-14'>
										{/* <img
											src='https://preview.redd.it/6ta2p7iryze71.jpg?width=640&height=853&crop=smart&auto=webp&s=14f2550aaa260beae4f5ea9663ea384865df832d'
											alt=''
											className='object-cover h-full w-full'
										/> */}
									</div>
									{/* user username */}
									<button>
										<FaRegSun />
									</button>
								</div>
								<span className='text-xs'>
									r/superbreezy007
								</span>
							</div>
							<div className='flex justify-center mx-4 mt-2'>
								<a
									href='#'
									className='w-full text-white font-semibold bg-gradient-to-r from-yellow-400 to-red-500 py-1 text-center rounded-full hover:opacity-90'>
									View all
								</a>
							</div>

							<div className='flex justify-between items-center pt-2 text-sm px-4'>
								<div>
									<h3 className='font-semibold'>Karma</h3>
									<div className='flex items-center gap-2 text-xs'>
										<FaAtom className='text-secondary' />
										<span>1</span>
									</div>
								</div>
								<div>
									<h3 className='font-semibold'>Cake day</h3>
									<div className='flex items-center gap-2 text-xs'>
										<FaBirthdayCake className='text-secondary' />
										<span>August 1, 2021</span>
									</div>
								</div>
							</div>

							<div className='flex justify-center mx-4 mt-2'>
								<a
									href='#'
									className='w-full text-white font-semibold bg-secondary py-1 mt-4 text-center rounded-full hover:opacity-90'>
									New post
								</a>
							</div>

							<div className='flex justify-end mx-4 mb-4'>
								<button className='font-semibold text-sm py-1 px-4 mt-4 text-center rounded-full hover:bg-gray-200'>
									More options
								</button>
							</div>
						</div>
					</aside>
				</div>
			</section>
		</>
	)
}

export default UserProfile
