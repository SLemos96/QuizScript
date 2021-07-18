<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Cabine from "../Cabine.svelte";
</script>

<Meta
    title="Votacao/Cabine"
    component={Cabine}
/>

<Template let:args>
    <Cabine {...args} on:click={args.selected} />
</Template>

<Story
    name="Tres Opcoes"
    args={{
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
    }}
/>

<Story
    name="Duas Opcoes"
    args={{
    options: [
        {
            count: 0,
            opcao: 'time A'
        },
        {
            count: 0,
            opcao: 'time B'
        }
    ],
    }}
/>