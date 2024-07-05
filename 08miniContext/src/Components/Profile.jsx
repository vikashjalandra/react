import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'
function Profile() {
    const {user}=useContext(UserContext)

    if (!user) {
        return(
            <div>
                <br />
                Please Login
            </div>
        )
    } else{
        return(
            <div>
                <br />
            Welcome {user.username}
            </div>
        )
    }
 
}

export default Profile
