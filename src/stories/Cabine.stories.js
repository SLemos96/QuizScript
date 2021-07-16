import Cabine from '../components/Cabine.vue';

export default {
  title: 'Votacao/Cabine',
  component: Cabine,
  argTypes: {
    onVote: {action : 'vote'},
  },
};

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Cabine },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<Cabine v-bind="args" />',
  });

  export const TresTimes = Template.bind({});
  TresTimes.args = {
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