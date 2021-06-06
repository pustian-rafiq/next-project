import React, { Component } from 'react'
import NavMenuDesktop from '../components/NavMenuDesktop'
import ReportList from '../components/ReportList'

export default class report extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <ReportList/>
            </div>
        )
    }
}
