import React from 'react';
import Sidebar from './Sidebar';
import Navtop from './Navtop';
import Caurosel from './Caurosel';
import AccordionH from './Accordion';
import Usage from './Usage';

function Pratice({setOpen}) {
  return (
    <div>
      <Navtop  setOpen={setOpen}/>
      <div className="flex">
      
        <div >
          <Sidebar />
        </div>

      
        <div className="p-10"> 
          <div className="flex flex-col items-center  h-screen">
            <div>
         <Usage/>
            </div>
            <div>
              <AccordionH />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pratice;
