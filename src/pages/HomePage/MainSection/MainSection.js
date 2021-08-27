import Popular from './Populars/Popular'
import Sidebar from './Populars/Sidebar/Sidebar'
import Trending from './Trendings/Trending'

const MainSection = () => {
	return (
		<main className='bg-page-bg min-h-screen'>
			<section className='w-8/12 m-auto lg:w-full lg:px-7 sm:px-1'>
				<Trending />

				<div className='flex pt-8 gap-6'>
					<Popular />
					<Sidebar />
				</div>
			</section>
		</main>
	)
}

export default MainSection
