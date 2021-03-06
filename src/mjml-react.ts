import * as _ from 'lodash';
import mjml from 'mjml';

import * as Types from './typings';

const DEBUG = false;

declare global {
  namespace JSX {
    interface Element {
      type: any;
      props: any;
      key: any;
    }
    interface IntrinsicElements {
      mjml: Types.MjmlProps;
      'mj-head': Types.MjHeadProps;
      'mj-body': Types.MjBodyProps;
      'mj-attributes': Types.MjAttributesProps;
      'mj-class': Types.MjAttributesClassProps;
      'mj-text': Types.MjTextProps;
      'mj-all': Types.MjAttributesAllProps;
      'mj-breakpoint': Types.MjBreakpointProps;
      'mj-font': Types.MjFontProps;
      'mj-preview': Types.MjPreviewProps;
      'mj-style': Types.MjStyleProps;
      'mj-title': Types.MjTitleProps;
      'mj-section': Types.MjSectionProps;
      'mj-column': Types.MjColumnProps;
      'mj-accordion': Types.MjAccordionProps;
      'mj-accordion-element': Types.MjAccordionElementProps;
      'mj-accordion-title': Types.MjAccordionTitleProps;
      'mj-accordion-text': Types.MjAccordionTextProps;
      'mj-button': Types.MjButtonProps;
      'mj-carousel': Types.MjCarouselProps;
      'mj-carousel-image': Types.MjCarouselImageProps;
    }
  }
}

export interface VNode<Attributes = {}> {
  tagName: string;
  attributes?: Attributes;
  children?: Array<VNode | string>;
  content?: string;
}

export interface Component<Attributes = {}> {
  (attributes: Attributes, children: Array<VNode | string>): VNode<Attributes>;
}

export type NonNullChild = VNode | string | number;
export type Child = NonNullChild | null;

export type H<Attributes> = (
  tagName: Component<Attributes> | string,
  attributes?: Attributes,
  ...children: Array<Child | Child[]>
) => VNode<Attributes>;

const childToArray = (child: Child | Child[]): Array<VNode | string> => {
  if (!child) {
    return [];
  }

  if (Array.isArray(child)) {
    return _.flatMap(child, childToArray);
  }

  if (typeof child === 'number') {
    return [String(child)];
  }

  return [child];
};

const CONTENT_TAGS = ['mj-text', 'mj-style'];

const h: H<{}> = (tagName, attributes, ...children) => {
  if (typeof tagName === 'string' && CONTENT_TAGS.includes(tagName)) {
    // mj-text, mj-style, etc
    return {
      tagName,
      attributes: attributes || {},
      content: children.map((x) => String(x)).join('')
    };
  }

  const childVnodes = _.flatMap(children || [], childToArray);
  if (typeof tagName === 'function') {
    return tagName(attributes || {}, childVnodes);
  }

  return {
    tagName,
    attributes: attributes || {},
    children: childVnodes
  };
};

const toHtml = (node: JSX.Element) => {
  if (DEBUG) {
    console.log(JSON.stringify(node, null, 2));
    console.log('\n\n------\n\n');
  }
  return mjml(node);
};

export { toHtml, h };
