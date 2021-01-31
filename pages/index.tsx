import React, { ReactElement, useEffect } from 'react';
import Directory from '../components/directory/directory.component';
import { GetStaticProps } from 'next';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchSections } from '../redux/sections/sections.actions';
import { wrapper } from '../redux/store';

import styles from '../global/home.module.scss';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { SetcurrentUser } from '../redux/user/user.actions';

const HomePage = ({ currentSection, setCurrentSection }: AppProps): ReactElement => {

  return (
    <div className={styles.homepage}>
      <Directory />
      <button onClick={() => setCurrentSection()}>SetSection</button>
    </div>
  );
};

const mapStateToProps = ({ section }) => ({
  currentSection: section.currentSection,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentSection: () => dispatch(fetchSections()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);



// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("http://localhost:4001/categories");
//   const section = await res.json();

//   return {
//     props: {
//       section,
//     },
//   };
// };


export const getStaticProps = wrapper.getStaticProps(
  ({ store }) => {
    store.dispatch({type:'SET_CURRENT_USER',payload:'Hello user'});
  },
);

