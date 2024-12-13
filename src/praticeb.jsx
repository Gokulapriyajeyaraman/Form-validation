import React from 'react';
import Sidebar from './Sidebar';
import Navtop from './Navtop';
import FormThree from './FormThree';
// import Caurosel from './Caurosel';
// import AccordionH from './Accordion';

function Praticeb({ setOpen }) {
  return (
    <div>
      <Navtop setOpen={setOpen} />
      <div className="flex gap-10">

        <div >
          <Sidebar />
        </div>

        <div >
          <FormThree />
        </div>


      </div>
    </div>
  );
}

export default Praticeb;
