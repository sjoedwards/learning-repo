import React from 'react';
import styles from './Header.module.scss';
import LinkItem from '../../atoms/LinkItem/LinkItem';
import config from './header.config';

const Header = (props) => {
  return (
    <ul className="u-margin-medium u-flex u-flex-justify-flex-start">
      {config.map((link) => (
        <LinkItem
          key={link.text}
          href={link.href}
          text={link.text}
          customClasses={[styles['header__link-item']]}
        />
      ))}
    </ul>
  );
};

export default Header;
