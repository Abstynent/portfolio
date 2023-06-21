import React from "react";

import './styles/App.css';
// import Header from './components/Header';
import Body from './components/Body';

// const Hr = ({ color }) => (
//     <hr
//         style={{
//             color: color,
//             backgroundColor: color,
//             height: 1
//         }}
//     />
//   );

export default function App() {
    return (
        <React.StrictMode>
            {/* <Hr color="white" /> */}
            <Body />
        </React.StrictMode>
    );
};