import { Component } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Center from '../views/Center'
import Cinema from '../views/Cinema'
import Detail from '../views/Detail'
import FilmWrapper from '../views/FilmWrapper'

export default class IndexRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route path="/film" element={<FilmWrapper />} />
                    <Route path="/cinema" element={<Cinema />} />
                    <Route path="/center" element={<Center />} />

                    <Route path="/detail/:myid" element={<Detail />} />

                    <Route path="/" element={<Navigate to="/film" />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </HashRouter>
        )
    }
}
