import React from 'react'
import NavBar from '../nav/NavBar'
import { storiesOf, action } from '@kadira/storybook'

storiesOf('NavBar', module)
  .add('all active', () => {
    return getNavBar()
  })

  function getNavBar() {
    return (
      <div className="todoapp">
        <NavBar />
      </div>
    );
  }
