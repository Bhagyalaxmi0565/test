import React from 'react';
import {Link, Route} from 'react-router-dom';
import Profile from './Profile'; 
import Settings from './Settings'; 

const DashboardN = ({ match }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to={`${match.url}/profile`}>Profile</Link>
          </li>
          <li>
            <Link to={`${match.url}/settings`}>Settings</Link>
          </li>
        </ul>
      </nav>

    
      
        <Route exact path={`${match.path}/profile`} component={Profile} />
        <Route exact path={`${match.path}/settings`} component={Settings} />
        
        
    
    </div>
  );
};

export default DashboardN;
