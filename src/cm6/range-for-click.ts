import { SelectionRange } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import type { TinySegmenter } from "tiny-segmenter/lib/index";

import { groupAt } from "./from-src";
import cm6GetChsSeg from "./get-seg";

/** only accept double click */
const rangeForClick = (
  view: EditorView,
  pos: number,
  bias: -1 | 1,
  type: number,
  seg: ReturnType<typeof TinySegmenter>,
): SelectionRange =>
  cm6GetChsSeg(pos, groupAt(view.state, pos, bias), view.state, seg);

export default rangeForClick;
