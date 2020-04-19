import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Routes from './Routes';

describe('The App component', () => {
  let appComponent;
  beforeEach(()=> {
    appComponent = shallow(<App />);
  });

  it('renders a "Rock Tracks" h2 header', () => {  
    expect(appComponent.containsMatchingElement(<h2>Rock Tracks</h2>)).toEqual(true);
  })

  it('renders a BrowserRouter component ', () => {  
    expect(appComponent.find(BrowserRouter)).toHaveLength(1);
  })

  it('renders a Routes component', () => {  
    expect(appComponent.find(Routes)).toHaveLength(1);
  })
});