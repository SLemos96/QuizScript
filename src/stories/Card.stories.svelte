<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Card from "../Card.svelte";
</script>

<Meta
    title="Votacao/Card"
    component={Card}
/>

<Template let:args>
    <Card {...args} on:click={args.vote} />
</Template>

<Story
    name="Tres Opcoes"
    args={{
        statement: 'título da questão com tres opções?',
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
        mode: 'open',
    }}
/>

<Story
    name="Duas Opcoes"
    args={{
        statement: 'coinflip',
        options: [
            {
                count: 0,
                opcao: 'heads'
            },
            {
                count: 4,
                opcao: 'tail'
            }
        ],
        mode: 'closed',
    }}
/>