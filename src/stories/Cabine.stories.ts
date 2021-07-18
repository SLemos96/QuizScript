import { Story, Meta } from '@storybook/angular/types-6-0';
import { CabineComponent } from '../app/cabine/cabine.component';

export default {
  title: 'Votacao/Cabine',
  component: CabineComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CabineComponent> = (args: CabineComponent) => ({
    props: args,
  });

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
            count: 3,
            opcao: 'time A'
        },
        {
            count: 4,
            opcao: 'time B'
        }
      ],
};