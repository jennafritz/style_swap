import ProfileComponent from '../Components/ProfileComponent'
import ClosetPreviewContainer from './ClosetPreviewContainer'
import FriendListContainer from './FriendListContainer'
import SwapListContainer from './SwapListContainer'
import CreateSwapsFormComponent from '../Components/CreateSwapsFormComponent'
import Container from 'react-bootstrap/esm/Container'
import {useSelector} from 'react-redux'

function HomePageContainer(){

    const currentUser = useSelector(state => state.users.currentUser)

    return(
        <Container>
            <ProfileComponent />
            <ClosetPreviewContainer />
            <FriendListContainer />
            <SwapListContainer />
            {currentUser.admin 
            ? <CreateSwapsFormComponent />
            : null}
        </Container>
    )
}

export default HomePageContainer