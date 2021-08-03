import Popular from './Populars/Popular'
import Sidebar from './Sidebar'
import Trending from './Trendings/Trending'

const MainSection = () => {
	return (
		<main className='bg-page-bg'>
			<section className='w-9/12 m-auto'>
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
