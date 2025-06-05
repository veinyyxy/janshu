import * as constant from "./constant";

export function createSearchFocusAction () {
  return {
    type: constant.SEARCH_FOCUS
  };
}

export function createSearchBlurAction() {
    return {
        type: constant.SEARCH_BLUR
    };
}
