import {useSelector} from 'react-redux'
import ProfileComponent from '../Components/ProfileComponent'
import ClosetPreviewContainer from './ClosetPreviewContainer'
import FriendListContainer from './FriendListContainer'
import SwapListContainer from './SwapListContainer'
import CreateSwapsFormComponent from '../Components/CreateSwapsFormComponent'
import Container from 'react-bootstrap/esm/Container'


function HomePageContainer(){

    const currentUser = useSelector(state => state.users.currentUser)

    return(
        <Container fluid className="topLevelParentContainer">
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