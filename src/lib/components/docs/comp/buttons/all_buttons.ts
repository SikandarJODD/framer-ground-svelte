import type { CompType } from "../comp_type";
import StartBorderButton from "./StartBorderButton.svelte";
import StartBorderButtonCode from "./StartBorderButton.svelte?raw";


export let all_buttons: CompType[] = [
  {
    id: 'star-border',
    name: 'Star Border Button',
    comp: StartBorderButton,
    desc: 'A button with a star border',
    code: StartBorderButtonCode,
    isCentered: true
  }
]