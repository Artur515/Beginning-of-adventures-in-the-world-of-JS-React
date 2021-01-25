import {useSelector} from "react-redux";

const Profile = () => {

    const {user:currentUser}=useSelector((state)=>state.auth)


    return (
        <div>
            profile
        </div>
    )
}

export default Profile