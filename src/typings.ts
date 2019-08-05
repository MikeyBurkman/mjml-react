type Child = string | JSX.Element;

interface WithChildren {
  children?: Child | Child[];
}

interface DefaultCssProps {
  backgroundColor?: string;
  border?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderRadius?: string;
  color?: string;
  cssClass?: string;
  padding?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
}

interface DefaultFontProps {
  fontFamily?: string;
  fontSize?: string;
  fontStyle?: string;
  fontWeight?: string;
}

export interface MjmlProps extends WithChildren {
  owa?: 'desktop';
  lang?: string;
}

export interface MjHeadProps extends WithChildren {}

export interface MjTextProps
  extends DefaultCssProps,
    DefaultFontProps,
    WithChildren {
  cssClass?: string;
  mjClass?: string;
}

export interface MjAttributesProps extends WithChildren {}

export interface MjAttributesClassProps
  extends DefaultCssProps,
    DefaultFontProps {
  name: string;
}

export interface MjAttributesAllProps
  extends DefaultCssProps,
    DefaultFontProps {
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
  children?: string;
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
export interface MjColumnProps extends DefaultCssProps, WithChildren {}

interface AccordionProps
  extends DefaultCssProps,
    DefaultFontProps,
    WithChildren {
  containerBackgroundColor?: string;
  iconAlign?: string;
  iconHeight?: string;
  iconPosition?: string;
  iconUnwrappedAlt?: string;
  iconUnwrappedUrl?: string;
  iconWidth?: string;
  iconWrappedAlt?: string;
}
export interface MjAccordionProps extends AccordionProps {}
export interface MjAccordionElementProps extends AccordionProps {
  // TODO not all AccordionProps apply
}
export interface MjAccordionTitleProps extends AccordionProps {
  // TODO not all AccordionProps apply
}
export interface MjAccordionTextProps extends AccordionProps {
  // TODO not all AccordionProps apply
}

export interface MjButtonProps
  extends WithChildren,
    DefaultCssProps,
    DefaultFontProps {
  align?: string;
  color?: string;
  containerBackgroundColor?: string;
  height?: string;
  href?: string;
  innerPadding?: string;
  lineHeight?: string;
  rel?: string;
  target?: string;
  textAlign?: string;
  textDecoration?: string;
  txtTransform?: string;
  verticalAlign?: string;
  width?: string;
}

export interface MjCarouselProps extends WithChildren {}
export interface MjCarouselImageProps {
  src: string;
  // TODO fill in rest of stuff
}
