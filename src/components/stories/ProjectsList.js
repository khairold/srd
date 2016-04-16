import React from 'react'
import ProjectsList from '../project/ProjectsList'
import { storiesOf, action } from '@kadira/storybook'

storiesOf('ProjectsList', module)
  .add('all active', () => {
    const projects = {
      lala: {
        name: 'Lala',
        slug: 'lala',
        description: 'This is the desc'
      },
      nana: {
        name: 'Nana',
        slug: 'nana'
      }
    }
    return <ProjectsList projects={projects} />
  })
