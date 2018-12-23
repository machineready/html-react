const React = require('react');

function makeElement(name) {
  return (classNameOrProps, ...children) => {
    const props = (typeof classNameOrProps === 'string') ? { className: classNameOrProps } : classNameOrProps;
    React.createElement(name, props, ...children);
  }
}

const $h1 = makeElement('h1');
const $h2 = makeElement('h2');
const $h3 = makeElement('h3');
const $h4 = makeElement('h4');
const $h5 = makeElement('h5');
const $div = makeElement('div');
const $span = makeElement('span');
const $p = makeElement('p');
const $button = makeElement('button');
const $img = makeElement('img');
const $a = makeElement('a');
const $ol = makeElement('ol');
const $ul = makeElement('ul');
const $li = makeElement('li');
const $nav = makeElement('nav');
const $br = makeElement('br');
const $footer = makeElement('footer');
const $label = makeElement('label');
const $input = makeElement('input');
const $form = makeElement('form');
const $section = makeElement('section');
const $i = makeElement('i');
const $aside = makeElement('aside');
const $article = makeElement('article');
const $figure = makeElement('figure');
const $time = makeElement('time');
const $table = makeElement('table');
const $thead = makeElement('thead');
const $th = makeElement('th');
const $tr = makeElement('tr');
const $td = makeElement('td');
const $tbody = makeElement('tbody');


module.exports = {
  $h1, $h2, $h3, $h4, $h5, $div, $span, $p, $button, $img, $a, $ol, $ul, $li, $nav, $br,
  $footer, $label, $input, $form, $section, $i, $aside, $article, $figure, $time,
  $table, $thead, $th, $tr, $td, $tbody
}

