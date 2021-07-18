<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Resultado from "../Resultado.svelte";
</script>

<Meta
    title="Votacao/Resultado"
    component={Resultado}
/>

<Template let:args>
    <Resultado {...args} />
</Template>

<Story
    name="Tres Opcoes"
    args={{
    options: [
        {
            count: 5,
            opcao: 'time X'
        },
        {
            count: 3,
            opcao: 'time Y'
        },
        {
            count: 1,
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
            count: 1,
            opcao: 'time A'
        },
        {
            count: 6,
            opcao: 'time B'
        }
    ],
    }}
/>