import { all_buttons } from "./buttons/all_buttons";
import { all_cards } from "./cards/all_cards";
import type { CompType } from "./comp_type";
import { all_gallery } from "./gallery/all_gallery";
import { all_layouts } from "./layouts/all_layouts";
import { all_navs } from "./navbars/all_navs";


export let all_comp: CompType[] = [...all_navs, ...all_layouts, ...all_gallery, ...all_cards, ...all_buttons
]