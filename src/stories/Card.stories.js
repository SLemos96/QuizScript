import Card from '../components/Card.vue';

export default {
  title: 'Votacao/Card',
  component: Card,
  argTypes: {
    onVote: {action : 'vote'},
  },
};

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Card },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<Card v-bind="args" />',
  });

  export const TresTimes = Template.bind({});
  TresTimes.args = {
    statement: 'Titulo três opções?',
    options: [
        {
            count: 2,
            opcao: 'time X'
        },
        {
            count: 5,
            opcao: 'time Y'
        },
        {
            count: 6,
            opcao: 'time Z'
        }
    ],
  };

  export const DuasOpcoes = Template.bind({});
  DuasOpcoes.args = {
    statement: 'Titulo duas opções?',
    options: [
        {
            count: 2,
            opcao: 'time X'
        },
        {
            count: 5,
            opcao: 'time Y'
        }
    ],
  };