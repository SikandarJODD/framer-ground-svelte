import type { CompType } from "../comp_type";
import VercelNav from "./VercelNav.svelte";


export let all_navs: CompType[] = [
    {
        id: 'vercel',
        name: 'Vercel Navbar',
        comp: VercelNav,
        code: '',
        tags: ['nav', 'navbar', 'vercel'],
    }
]