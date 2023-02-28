const UserTable = (props) => (
    <div className='divUserTable'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(user=>(
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td >
                                <button style={{margin:'10px'}}>Edit</button>
                                <button onClick={()=>{props.deleteUser(user.id)}} style={{margin:'10px'}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
)

export default UserTable