import type { CompType } from "../comp_type";
import TubelightNavbar from "./TubelightNavbar.svelte";
import VercelNav from "./VercelNav.svelte";


export let all_navs: CompType[] = [
    {
        id: 'vercel',
        name: 'Vercel Navbar',
        comp: VercelNav,
        code: '',
        tags: ['nav', 'navbar', 'vercel'],
    },
    {
        id: 'tubelight-navbar',
        name: 'Tubelight Navbar',
        comp: TubelightNavbar,
        code: '',
        isCentered: true,
    },
]