import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Filters from './Filters';
import './Home.scss';

class Home extends React.Component {
  render() {
    const { isLoading, data, filterByName, searchNameValue, match } = this.props;

    return (
      <Fragment>
        {isLoading ? (
          <p className="text-center">Wait, I'm loading...</p>
        ) : (
          <Fragment>
            <nav className='main__header'>
              <h1>Harry Potter Characters</h1>
            </nav>
            <main>
              <Filters
                filterByName={filterByName}
                searchNameValue={searchNameValue}
              />
              <List 
                data={data}
                match={match}
                isLoading={isLoading}
               />
            </main>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

Home.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired, 
  filterByName: PropTypes.func.isRequired, 
  searchNameValue: PropTypes.string.isRequired, 
};

export default Home;
