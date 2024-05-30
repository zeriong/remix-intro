import type { CSSObject, SimpleInterpolation } from "styled-components";
import { css } from "styled-components";

type DeviceType = "tablet" | "laptop" | "desktop";

const sizes: Record<DeviceType, number> = {
  tablet: 768,
  laptop: 1280,
  desktop: 1680,
};

const media: DeviceType | object = Object.entries(sizes).reduce(
  (acc, [key, value]) => {
    return {
      ...acc,
      [key]: (
        first: CSSObject | TemplateStringsArray,
        ...interpolations: SimpleInterpolation[]
      ) => css`
        @media only screen and (min-width: ${value}px) {
          ${css(first, ...interpolations)}
        }
      `,
    };
  },
  {}
);

export { media };
