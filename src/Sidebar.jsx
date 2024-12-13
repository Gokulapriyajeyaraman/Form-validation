import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="flex flex-col h-screen gap-4">
             <div className="w-12 text-center sm:w-32"><Link to="/">A</Link></div>
            <div className="w-12 text-center sm:w-32"><Link to="/pratice">B</Link></div>
            <div className="w-12 text-center sm:w-32"><Link to="/b">C</Link></div>
        </div>
    );
}

export default Sidebar;
