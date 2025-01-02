import type { CompType } from "./comp_type";
import { all_layouts } from "./layouts/all_layouts";
import { all_navs } from "./navbars/all_navs";


export let all_comp: CompType[] = [...all_navs, ...all_layouts
]