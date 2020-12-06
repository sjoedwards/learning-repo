import React from 'react';
import Link from 'next/link';
import '../../styles/Header.module.scss';

const Header = () => {
  return (
    <ul className="u-margin-medium u-flex u-flex-justify-flex-start">
      <li className="u-margin-right-small">
        <Link href="/">Home</Link>
      </li>
      <li className="u-margin-right-small">
        <Link href="/grid">Grid</Link>
      </li>
    </ul>
  );
};

export default Header;
