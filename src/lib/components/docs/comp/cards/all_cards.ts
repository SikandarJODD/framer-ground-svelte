import type { CompType } from "../comp_type";
import BirthdayCard from "./birthday/BirthdayCard.svelte";
import OverView from "./overview/OverView.svelte";


export let all_cards: CompType[] = [
    {
        id: 'birthday-card',
        name: 'Birthday Card',
        comp: BirthdayCard,
        tags: ['birthday', 'card'],
    },
    {
        id: 'overview',
        name: 'Overview Card',
        comp: OverView,
        tags: ['overview', 'card','view-transition API'],
    },
]