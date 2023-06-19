import React from 'react'
import Data from './Data'
import Search from './Serach/Search';
import { Route , Routes} from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Data />} />
              <Route path="/Search" element={<Search />} />
              <Route path=''/>
      </Routes>
    </div>
  );
}

export default Layout