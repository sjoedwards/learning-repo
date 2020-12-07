import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

const LinkItem = ({ href, text, customClasses = [] }) => {
  return (
    <li className={classNames('u-padding-small', ...customClasses)}>
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default LinkItem;
