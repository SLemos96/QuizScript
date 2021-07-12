import React from 'react';

import Cabine from '../Cabine';

export default {
    title: 'Votacao/Cabine',
    component: Cabine,
    argTypes: { onVote: { action: 'vote' } },
  };

const Template = (args) => <Cabine {...args} />;

export const TresTimes = Template.bind({});
TresTimes.args = {
  options: [
        {
            count: 0,
            opcao: 'time X'
        },
        {
            count: 0,
            opcao: 'time Y'
        },
        {
            count: 0,
            opcao: 'time Z'
        }
    ],
};

export const DoisTimes = Template.bind({});
DoisTimes.args = {
  options: [
        {
            count: 0,
            opcao: 'time X'
        },
        {
            count: 0,
            opcao: 'time Y'
        }
    ],
};