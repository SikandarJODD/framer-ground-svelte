import type { Component } from "svelte";

export type CompType = {
    id: string;
    name: string;
    comp: Component;
    tags: string[];
    desc?: string;
    code?: string;
}