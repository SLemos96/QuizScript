import React from 'react';

import Resultado from '../Resultado';

export default {
    title: 'Votacao/Resultado',
    component: Resultado,
    // argTypes: { onVote: { action: 'vote' } },
  };

  const Template = (args) => <Resultado {...args} />;

  export const TresTimes = Template.bind({});
TresTimes.args = {
  options: [
        {
            count: 3,
            opcao: 'time X'
        },
        {
            count: 4,
            opcao: 'time Y'
        },
        {
            count: 1,
            opcao: 'time Z'
        }
    ],
};

export const DoisTimes = Template.bind({});
DoisTimes.args = {
  options: [
        {
            count: 2,
            opcao: 'time X'
        },
        {
            count: 2,
            opcao: 'time Y'
        }
    ],
};