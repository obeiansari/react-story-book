import React, { lazy, Suspense } from 'react'
import {BrowserRouter as Router} from 'react-dom'
import '../sass/global.scss'

const App: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router basename="/">

            </Router>
        </Suspense>
    )
}

export default App