import React from 'react';

import { Link } from 'react-router-dom';
import { PATH } from '../../../../constants';
import './SettingsBtn';

const SettingsBtn = () => <Link to={PATH.settings}>Settings</Link>;

export default SettingsBtn;
