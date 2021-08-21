import CommunityProfile from './pages/CommunnityProfile/CommunityProfile'
import HomePage from './pages/HomePage/HomePage'
import LiveVideo from './pages/LiveVideo/LiveVideo'
import PostDetails from './pages/PostDetails/PostDetails'
import UserProfile from './pages/UserProfile/UserProfile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className='App font-poppins text-base'>
				<Switch>
					<Route path='/post/:id'>
						<PostDetails />
					</Route>
					<Route path='/live'>
						<LiveVideo />
					</Route>
					<Route path='/'>
						<HomePage />
					</Route>
				</Switch>
				{/* <CommunityProfile /> */}
				{/* <UserProfile /> */}
			</div>
		</Router>
	)
}

export default App
