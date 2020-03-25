import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link href="https://hackcovid19-nit-rishi135.hub.arcgis.com/">
        <a className="item">Statistics</a>
      </Link>

      <Menu.Menu position="right">
        <Link href="https://hackcovid19-nits.netlify.com/">
          <a className="item">Symptoms and Precautions</a>
        </Link>

        <Link>
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
