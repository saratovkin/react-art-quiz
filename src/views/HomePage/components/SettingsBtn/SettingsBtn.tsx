import React from 'react';

import { Link } from 'react-router-dom';
import './SettingsBtn';
const SettingsBtn = ({ path }: { path: string }) => {
  return <Link to={path}>{path}</Link>;
};

export default SettingsBtn;
