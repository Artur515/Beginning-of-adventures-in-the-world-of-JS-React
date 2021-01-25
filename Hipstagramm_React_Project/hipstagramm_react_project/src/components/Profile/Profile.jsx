import {useSelector} from "react-redux";

const Profile = () => {

    const {user:currentUser}=useSelector((state)=>state.auth)


    return (
        <div>
            Profile
        </div>
    )
}

export default Profile