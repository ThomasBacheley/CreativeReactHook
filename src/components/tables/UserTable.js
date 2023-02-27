import { Component } from 'react'

class UserTable extends Component {
    render() {
        const {users} = this.props;
        return (
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
                    {users.map(user=>(
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td >
                                <button style={{margin:'10px'}}>Edit</button>
                                <button style={{margin:'10px'}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
        )
    }
}

export default UserTable