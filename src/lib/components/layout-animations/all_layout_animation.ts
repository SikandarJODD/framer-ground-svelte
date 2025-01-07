import type { Component } from "svelte";

import PageWipe from "./PageWipe.svelte";
import PageWipeCode from "./PageWipe.svelte?raw";

import ViewAnimation from "./ViewAnimation.svelte";
import ViewAnimationCode from "./ViewAnimation.svelte?raw";

import SharedViewAnimation from "./SharedViewAnimation.svelte";
import SharedViewAnimationCode from "./SharedViewAnimation.svelte?raw";


export type LayoutComponent = {
    id: string;
    name: string;
    comp: Component;
    code: string;
}

export let all_layout_animations: LayoutComponent[] = [
    {
        id: 'page-wipe',
        name: 'Page Wipe',
        comp: PageWipe,
        code: PageWipeCode
    },
    {
        id: 'view-animation',
        name: 'View Animation',
        comp: ViewAnimation,
        code: ViewAnimationCode,
    },
    {
        id: 'shared-view-animation',
        name: 'Shared View Animation',
        comp: SharedViewAnimation,
        code: SharedViewAnimationCode,
    }
]

