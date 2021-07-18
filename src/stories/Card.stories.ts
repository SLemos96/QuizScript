import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CardComponent } from '../app/card/card.component';
import { CabineComponent } from '../app/cabine/cabine.component';
import { ResultadoComponent } from '../app/resultado/resultado.component';

export default {
  title: 'Votacao/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [CabineComponent, ResultadoComponent],
    //   imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    // componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
    props: args,
  });

export const TresTimes = Template.bind({});
TresTimes.args = {
    statement: 'qual é a resposta?',
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
    statement: 'qual o seu jogador preferido?',
    options: [
        {
            count: 4,
            opcao: 'Ronaldo'
        },
        {
            count: 1,
            opcao: 'Messi'
        }
    ],
};