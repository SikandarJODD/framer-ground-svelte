import type { CompType } from "../comp_type";
import GalleryHover from "./GalleryHover.svelte";
import GalleryOne from "./GalleryOne.svelte";


export let all_gallery: CompType[] = [
    {
        id: 'hover',
        name: 'Hover',
        comp: GalleryHover,
        tags: ['gallery', 'hover']
    },
    {
        id: 'one',
        name: 'One',
        comp: GalleryOne,
        tags: ['gallery', 'hover']
    },
]