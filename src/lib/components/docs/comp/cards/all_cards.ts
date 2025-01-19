import type { CompType } from "../comp_type";
import BirthdayCard from "./birthday/BirthdayCard.svelte";
import CollectionGrid from "./collection-grid/CollectionGrid.svelte";
import Example from "./display-card/Example.svelte";
import FcExample from "./feature-card/FCExample.svelte";
import OverView from "./overview/OverView.svelte";
import PaymentMethod from "./payment-method/PaymentMethod.svelte";
import TaskWidget from "./task-widget/TaskWidget.svelte";






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
        tags: ['overview', 'card', 'view-transition API'],
    },
    {
        id: 'payment-method',
        name: 'Payment Method',
        comp: PaymentMethod,
        tags: ['payment', 'card', 'light-mode'],
        isCentered: true,
    },
    {
        id: 'display-card',
        name: 'Display Card',
        comp: Example,
        tags: ['display', 'card'],
        isCentered: true,
    },
    {
        id: 'task-widget',
        name: 'Task Widget',
        comp: TaskWidget,
        tags: ['display', 'card'],
        isCentered: true,
    },
    {
        id: 'collection-grid',
        name: 'Collection Card',
        comp: CollectionGrid,
        tags: ['display', 'card'],
        isCentered: true,
    },
    {
        id: 'feature-card',
        name: 'Feature Card',
        comp: FcExample,
        tags: ['display', 'card'],
        isCentered: true,
    },
]