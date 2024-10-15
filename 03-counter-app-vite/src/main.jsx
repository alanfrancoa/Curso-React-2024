import React from 'react'
import ReactDOM from 'react-dom/client';
import FirstApp from './FirstApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title='Club Classic'/>     {/*Para pasar numeros lo hacemos con llaves */}
    </React.StrictMode>
)
