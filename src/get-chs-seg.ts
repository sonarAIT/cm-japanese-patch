import TinySegmenter from "tiny-segmenter/lib/index"

const RANGE_LIMIT = 6;

export const getChsSegFromRange = (
  cursor: number,
  range: { from: number; to: number; text: string },
  seg: ReturnType<typeof TinySegmenter>,
) => {
  let { from, to, text } = range;
  if (!/[\u4e00-\u9fa5]/.test(text)) {
    return null;
  } else {
    // trim long text
    if (cursor - from > RANGE_LIMIT) {
      const newFrom = cursor - RANGE_LIMIT;
      text = text.slice(newFrom - from);
      from = newFrom;
    }
    if (to - cursor > RANGE_LIMIT) {
      const newTo = cursor + RANGE_LIMIT;
      text = text.slice(0, newTo - to);
      to = newTo;
    }
    const segResult = seg.segment(text);
    let chunkStart = 0,
      chunkEnd;
    const relativePos = cursor - from;

    for (const seg of segResult) {
      chunkEnd = chunkStart + seg.length;
      if (relativePos >= chunkStart && relativePos < chunkEnd) {
        break;
      }
      chunkStart += seg.length;
    }
    to = chunkEnd + from;
    from += chunkStart;
    return { from, to };
  }
};
