import { useSelector} from "react-redux";




const Users = () => {

    const allUsers = useSelector((store) => store.users.listUsers)


    return (
        <div>
            {
             allUsers.map((user) => {
                    return (
                        <div>
                            <p>id:{user._id}</p>
                            <img src={user.avatar} alt=""/>
                            <h6>Login{user.login}</h6>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users