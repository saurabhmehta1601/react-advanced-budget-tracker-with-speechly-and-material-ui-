import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {Provider} from './context/context'
import {SpeechProvider} from '@speechly/react-client'

ReactDOM.render
( <SpeechProvider language='en-US' appId="58a52e29-94ed-49b0-b7ec-43c2d17bf141">
<Provider> 
    <App /> 
</Provider>
</SpeechProvider>
    , document.getElementById('root')) 