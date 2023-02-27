import { Component } from 'react'
import UserTable from './tables/UserTable';

class ViewUser extends Component {
    render() {
        const {users} = this.props;
        return (
            <div className='divViewUser'>
                 <h1>View Users</h1> 
                 <UserTable users={users}></UserTable>
            </div>
        )
    }
}

export default ViewUser