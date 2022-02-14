import { Plugin } from "obsidian";
import { TinySegmenter } from "tiny_segmenter-0.2";

import patchGetWordAt from "./cm5";
import { getChsPatchExtension, getWordAtPatchUnloader } from "./cm6/index";

export default class CMJapanesePatch extends Plugin {
  async onload() {
    console.log("loading japanese-word-splitter");
    let tinySegmenter: TinySegmenter = new TinySegmenter();

    // for cm5
    const cm5PatchUnloader = patchGetWordAt(tinySegmenter);
    cm5PatchUnloader && this.register(cm5PatchUnloader);

    // for cm6
    this.registerEditorExtension(getChsPatchExtension(tinySegmenter));
    this.register(getWordAtPatchUnloader(tinySegmenter));
  }
}
