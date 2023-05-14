import { cloneElement, ComponentPropsWithoutRef } from "react";

export const icons = {
  "arrow-down": (
    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" />
    </svg>
  ),
  "arrow-left": (
    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L2 5l4-4" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" />
    </svg>
  ),
  "arrow-up": (
    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 6l4-4 4 4" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" />
    </svg>
  ),
  "new-feedback": (
    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient cx="103.9%" cy="-10.387%" fx="103.9%" fy="-10.387%" r="166.816%" id="a">
          <stop stop-color="#E84D70" offset="0%" />
          <stop stop-color="#A337F6" offset="53.089%" />
          <stop stop-color="#28A7ED" offset="100%" />
        </radialGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle fill="url(#a)" cx="28" cy="28" r="28" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"
        />
      </g>
    </svg>
  ),
  plus: (
    <svg width="9" height="9" xmlns="http://www.w3.org/2000/svg">
      <text
        transform="translate(-24 -20)"
        fill="#F2F4FE"
        fillRule="evenodd"
        font-family="Jost-Bold, Jost"
        font-size="14"
        font-weight="bold"
      >
        <tspan x="24" y="27.5">
          +
        </tspan>
      </text>
    </svg>
  ),
  edit: (
    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient cx="103.9%" cy="-10.387%" fx="103.9%" fy="-10.387%" r="166.816%" id="a">
          <stop stop-color="#E84D70" offset="0%" />
          <stop stop-color="#A337F6" offset="53.089%" />
          <stop stop-color="#28A7ED" offset="100%" />
        </radialGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle fill="url(#a)" cx="20" cy="20" r="20" />
        <path
          d="M19.512 15.367l4.975 4.53-3.8 5.54L11.226 29l4.485-4.1c.759.275 1.831.026 2.411-.594a1.958 1.958 0 00-.129-2.82c-.836-.745-2.199-.745-2.964.068-.57.607-.767 1.676-.44 2.381L11 28.713c.255-1.06.683-2.75 1.115-4.436l.137-.531c.658-2.563 1.287-4.964 1.287-4.964l5.973-3.415zM23.257 12L28 16.443l-2.584 2.606-4.89-4.583L23.257 12z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </svg>
  ),
};

type Props = {
  /**
   * The name of the icon to render.
   */
  name: keyof typeof icons;
} & ComponentPropsWithoutRef<"svg">;

export default function Icon({ name, ...props }: Props) {
  return cloneElement(icons[name], { ...props, "aria-hidden": true });
}
