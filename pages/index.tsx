import React, { ReactElement, useEffect } from 'react';
import Directory from '../components/directory/directory.component';
import { GetStaticProps } from 'next';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchSections } from '../redux/sections/sections.actions';
import { wrapper } from '../redux/store';

import styles from '../global/home.module.scss';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { SetcurrentUser } from '../redux/user/user.actions';

const HomePage = ({ section }: AppProps): ReactElement => {

  return (
    <div className={styles.homepage}>
      <Directory />
    </div>
  );
};

export default HomePage;




