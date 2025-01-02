import type { CompType } from "../comp_type";
import GridToFlex from "./GridToFlex.svelte";


export let all_layouts: CompType[] = [
    {
        id: 'grid-to-flex',
        name: 'Grid to Flex',
        comp: GridToFlex,
        tags: ['layout', 'grid', 'flex'],
    }
]