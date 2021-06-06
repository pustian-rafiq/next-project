


export async function getStaticProps() {
    const data = [
        {
            id: 1,
            fullname: 'Rafiqul Islam',
            username: 'Rafiqul',
            roll: 'admin',
            lastactivity: '06/06/2021',
        },
        {
            id: 2,
            fullname: 'Rabiul Islam',
            username: 'Rabiul',
            roll: 'worker',
            lastactivity: '06/06/2021',
        },
        {
            id: 3,
            fullname: 'Rakib Hasan',
            username: 'Rakib',
            roll: 'admin',
            lastactivity: '06/06/2021',
        },
        {
            id: 4,
            fullname: 'Ruhan Hasan',
            username: 'Ruhan',
            roll: 'admin',
            lastactivity: '06/06/2021',
        },

    ]

    return {
        props:{
            dataTable:data,
        }
    }


}


import React, { Component } from 'react';
import NavMenuDesktop from '../components/NavMenuDesktop';
import UserList from '../components/UserList';
class users extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <UserList dataTable={this.props.dataTable} />
            </div>
        );
    }
}

export default users;