import React from 'react';

import Card from '../Card';

export default {
    title: 'Votacao/Card',
    component: Card,
    argTypes: { setEstado: { action: 'open' } },
  };

const Template = (args) => <Card {...args} />;

export const Votacao1 = Template.bind({});
Votacao1.args = {
    statement: "Qual o seu refrigerante preferido?",
    options: [
        {
            count: 0,
            opcao: 'Coca'
        },
        {
            count: 1,
            opcao: 'Pepsi'
        },
        {
            count: 9,
            opcao: 'Dolly'
        }
    ],
    estado: 'open',
};

export const Votacao2 = Template.bind({});
Votacao2.args = {
    statement: "Alguma dúvida",
    options: [
        {
            count: 1,
            opcao: 'Sim'
        },
        {
            count: 4,
            opcao: 'Não'
        }
    ],
    estado: 'closed',
};