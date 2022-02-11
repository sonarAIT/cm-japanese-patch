import { Plugin } from "obsidian";
import TinySegmenter from "tiny-segmenter/lib/index";

import patchGetWordAt from "./cm5";
import { getChsPatchExtension, getWordAtPatchUnloader } from "./cm6/index";

export default class CMChsPatch extends Plugin {
  tinySegmenter: ReturnType<typeof TinySegmenter>;

  async onload() {
    console.log("loading cm-japanese-patch");
    this.tinySegmenter = new TinySegmenter();

    // for cm5
    const cm5PatchUnloader = patchGetWordAt(this.tinySegmenter);
    cm5PatchUnloader && this.register(cm5PatchUnloader);

    // for cm6
    this.registerEditorExtension(getChsPatchExtension(this.tinySegmenter));
    this.register(getWordAtPatchUnloader(this.tinySegmenter));
  }
}
