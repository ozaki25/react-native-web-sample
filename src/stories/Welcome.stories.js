import React from 'react';

/* eslint import/no-extraneous-dependencies: 0 */
import { storiesOf } from '@storybook/react';

import Welcome from '../components/Welcome';

storiesOf('Welcome', module).add('message', () => <Welcome />);
