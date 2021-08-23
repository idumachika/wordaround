import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../HomePage/Header'
import Posts from './Posts'

const PostDetails = () => {
	const { id } = useParams()
	const [mainPost, setMainPost] = useState([])

	useEffect(() => {
		fetch('https://wordaround-api.herokuapp.com/userposts/' + id)
			.then((response) => response.json())
			.then((post) => {
				setMainPost(post)
				console.log(post)
			})
	}, [])

	return (
		<>
			<Header />
			<section className='bg-gray-400'>
				<div className='w-10/12 bg-black m-auto'>
					<Posts post={mainPost} />
				</div>
			</section>
		</>
	)
}

export default PostDetails
