import React from 'react';
import { Link } from 'react-router-dom'; // or your preferred routing library

const TableOfContents = () => (
  <div>
    <h2>Table of Contents</h2>
    <ul>
      <li><Link to="/page1">Page 1</Link></li>
      <li><Link to="/page2">Page 2</Link></li>
      <li><Link to="/page3">Page 3</Link></li>
      // Add more links as needed
    </ul>
  </div>
);

export default TableOfContents;