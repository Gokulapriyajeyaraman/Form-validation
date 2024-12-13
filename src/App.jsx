import React, { useState } from 'react';

import Form from './Form';
import Nav from './Nav';
import { Routes, Route } from 'react-router-dom';
import Pratice from './Pratice';
import Praticeb from './praticeb';




export default function App() {
    const [open, setOpen] = useState(true);
    const [fdata, setFData] = useState({
        uname: "",
        email: "",
        password: "",
        mobnum: ""
    });
    const [sData, setSData] = useState({
        uname: "",
        email: "",
        password: "",
        mobnum: ""
    });

    return (
        <div>
            {open 
                ? <Form setOpen={setOpen} fdata={fdata} setFData={setFData} setSData={setSData} sdata={sData} /> 
                :  <Routes>
                <Route index element={<Nav setOpen={setOpen}  />} />
                      <Route path="/b" element={<Praticeb setOpen={setOpen} />} />
                      <Route path="/pratice" element={<Pratice  setOpen={setOpen}/>} />
                  </Routes> }

           
        </div>
    );
}
