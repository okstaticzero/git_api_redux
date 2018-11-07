import React from 'react';
import { Link } from 'react-router-dom'
import CompanyInput from './CompanyInput'
const Header = () => (
  <div className="header">
    <img className="gh-logo" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
    <CompanyInput />
  </div>
)

export default Header