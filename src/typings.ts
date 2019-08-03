type Child = string | JSX.Element;

interface WithChildren {
  children?: Child | Child[];
}

export interface MjmlProps extends WithChildren {
  owa?: 'desktop';
  lang?: string;
}

export interface MjHeadProps extends WithChildren {}

interface CssProps {
  padding?: string;
  color?: string;
  fontSize?: string;
  fontFamily?: string;
  // TODO add more
}

export interface MjTextProps extends CssProps, WithChildren {
  cssClass?: string;
  mjClass?: string;
}

export interface MjAttributesProps extends WithChildren {}

export interface MjAttributesClassProps extends CssProps {
  name: string;
}

export interface MjAttributesAllProps extends CssProps {
  name: string;
}

export interface MjBreakpointProps {
  width: string;
}

export interface MjFontProps {
  name: string;
  href: string;
}

export interface MjPreviewProps {
  children: string;
}

export interface MjStyleProps {
  inline?: 'inline';
  children: string;
}

export interface MjTitleProps {
  children: string;
}

export interface MjBodyProps extends WithChildren {
  backgroundColor?: string;
  cssClass?: string;
  width?: string;
}

export interface MjSectionProps extends WithChildren {}
export interface MjColumnProps extends WithChildren {}
