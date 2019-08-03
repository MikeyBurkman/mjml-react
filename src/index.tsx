import { render, h } from './app';
import * as fs from 'fs';

interface FooTextProps {
  repeat: number;
}

const FooText = ({ repeat }: FooTextProps) => {
  const res = [];
  for (let i = 0; i < repeat; i += 1) {
    res.push(<mj-text>Iteration {String(i)}!</mj-text>);
  }
  return <mj-column>{res}</mj-column>;
};

const foo = (
  <mjml>
    <mj-head>
      <mj-attributes>
        <mj-class name="mjclass" color="green" font-size="30px" />
      </mj-attributes>
      <mj-style inline="inline">
        {`.blue-text div {
          color: blue !important;
        }`}
      </mj-style>
      <mj-style>
        {`.red-text div {
          color: red !important;
          text-decoration: underline !important;
        }`}
      </mj-style>
    </mj-head>
    <mj-body>
      <mj-section>
        <FooText repeat={3} />
      </mj-section>
      <mj-section>
        <mj-column>
          <mj-text css-class="red-text">I'm red and underlined</mj-text>
          <mj-text css-class="blue-text">I'm blue because of inline</mj-text>
          <mj-text mj-class="mjclass">I'm green</mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
);

console.log('\n\n-----\n\n');
const r = render(foo);

if (r.errors.length > 0) {
  console.log(r);
} else {
  fs.writeFileSync('./out.html', r.html);
  console.log('Written');
}
