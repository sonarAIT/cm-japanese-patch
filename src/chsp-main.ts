import { Plugin } from "obsidian";
import pinyin from "pinyinlite";
import TinySegmenter from "tiny-segmenter/lib/index";

import { API_NAME, ChsPatchAPI, Evt_ApiReady } from "./api";
import patchGetWordAt from "./cm5";
import { getChsPatchExtension, getWordAtPatchUnloader } from "./cm6/index";

const API_NAME: API_NAME extends keyof typeof window ? API_NAME : never =
  "ChsPatchAPI" as const; // this line will throw error when name out of sync
const chsRegex = /[\u4e00-\u9fa5]/g;

export default class CMChsPatch extends Plugin {
  api?: ChsPatchAPI;

  tinySegmenter: TinySegmenter;

  async onload() {
    console.log("loading cm-chs-patch");
    this.tinySegmenter = new TinySegmenter()

    this.loadApi();

    // for cm5
    const cm5PatchUnloader = patchGetWordAt(this.tinySegmenter);
    cm5PatchUnloader && this.register(cm5PatchUnloader);

    // for cm6
    this.registerEditorExtension(getChsPatchExtension(this.tinySegmenter));
    this.register(getWordAtPatchUnloader(this.tinySegmenter));
  }

  loadApi() {
    const api = { pinyin, chsRegex };
    this.api = api;
    window[API_NAME] = api;
    this.register(() => (window[API_NAME] = undefined));
    console.log("ChsPatch API ready");

    this.app.metadataCache.trigger(...(<Evt_ApiReady>["chs-patch:ready", api]));
  }
}
