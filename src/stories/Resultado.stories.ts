import { Story, Meta } from '@storybook/angular/types-6-0';
import { ResultadoComponent } from '../app/resultado/resultado.component';

export default {
  title: 'Votacao/Resultado',
  component: ResultadoComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ResultadoComponent> = (args: ResultadoComponent) => ({
    props: args,
  });

export const TresTimes = Template.bind({});
TresTimes.args = {
    options: [
        {
            count: 4,
            opcao: 'time X'
        },
        {
            count: 5,
            opcao: 'time Y'
        },
        {
            count: 7,
            opcao: 'time Z'
        }
      ],
};

export const DoisTimes = Template.bind({});
DoisTimes.args = {
    options: [
        {
            count: 3,
            opcao: 'time A'
        },
        {
            count: 4,
            opcao: 'time B'
        }
      ],
};