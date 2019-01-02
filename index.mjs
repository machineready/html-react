import React from 'react';

function makeElement(name) {
  return (classNameOrProps, ...children) => {
    const props = (typeof classNameOrProps === 'string') ? { className: classNameOrProps } : classNameOrProps;
    return React.createElement(name, props, ...children);
  }
}

export const $h1 = makeElement('h1');
export const $h2 = makeElement('h2');
export const $h3 = makeElement('h3');
export const $h4 = makeElement('h4');
export const $h5 = makeElement('h5');
export const $div = makeElement('div');
export const $span = makeElement('span');
export const $p = makeElement('p');
export const $button = makeElement('button');
export const $img = makeElement('img');
export const $a = makeElement('a');
export const $ol = makeElement('ol');
export const $ul = makeElement('ul');
export const $li = makeElement('li');
export const $nav = makeElement('nav');
export const $br = makeElement('br');
export const $footer = makeElement('footer');
export const $label = makeElement('label');
export const $input = makeElement('input');
export const $form = makeElement('form');
export const $section = makeElement('section');
export const $i = makeElement('i');
export const $aside = makeElement('aside');
export const $article = makeElement('article');
export const $figure = makeElement('figure');
export const $time = makeElement('time');
export const $table = makeElement('table');
export const $thead = makeElement('thead');
export const $th = makeElement('th');
export const $tr = makeElement('tr');
export const $td = makeElement('td');
export const $tbody = makeElement('tbody');

export default {
  $h1, $h2, $h3, $h4, $h5, $div, $span, $p, $button, $img, $a, $ol, $ul, $li, $nav, $br,
  $footer, $label, $input, $form, $section, $i, $aside, $article, $figure, $time,
  $table, $thead, $th, $tr, $td, $tbody
}

