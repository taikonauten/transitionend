<p align="center">
  <svg width="109" height="106" viewBox="0 0 109 106" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54.782 92.859h-18.49l-7.09 12.185H.563V30.533H109v74.511H80.361l-7.09-12.045h-18.49v-.14Zm0-57.424H5.568v64.707H26.42l7.09-12.185h21.27V35.435ZM28.228 73.25c6.395 0 11.678-5.183 11.678-11.625C39.906 55.183 34.623 50 28.228 50c-6.395 0-11.677 5.182-11.677 11.625 0 6.442 5.282 11.625 11.677 11.625Zm0 4.901c-9.175 0-16.682-7.423-16.682-16.526 0-9.104 7.507-16.527 16.682-16.527 9.176 0 16.683 7.423 16.683 16.527 0 9.103-7.507 16.527-16.683 16.527Zm53.107-1.26c8.48 0 15.431-6.863 15.431-15.266 0-8.404-6.951-15.267-15.431-15.267s-15.432 6.863-15.432 15.267c0 8.403 6.812 15.266 15.432 15.266Zm-53.107-8.544c-3.753 0-6.812-3.08-6.812-6.722 0-3.642 3.059-6.723 6.812-6.723 3.754 0 6.813 3.081 6.813 6.723 0 3.641-3.059 6.722-6.813 6.722Zm53.107 1.261c-4.449 0-8.064-3.501-8.064-7.983 0-4.342 3.615-7.984 8.064-7.984 4.448 0 8.063 3.502 8.063 7.984-.14 4.342-3.754 7.983-8.063 7.983Zm0-53.782c-4.449 0-8.064-3.502-8.064-7.984S76.886 0 81.335 0c4.448 0 8.063 3.501 8.063 7.983 0 4.482-3.754 7.844-8.063 7.844Z" fill="#111218"/></svg>
</p>

<h1 align="center">Taikonauten transitionend helper</h1>

# transitionend helper

Fires the given callback when all given nodes received a `transitionend` event with the given property name.

## Usage

```shell
npm install --save @taikonauten/transitionend
```

```js
import transitionEnd from 'transitionend';
```

```js
// class selector, propertyName
await transitionEnd('.transition', 'transform');
console.log('transition(s) ended.');
```

```js
// Node, propertyName
const element = document.getElementById('test');

await transitionEnd(element, 'transform')
console.log('transition(s) ended.');
```

```js
// NodeList, propertyName
const elements = document.querySelectorAll('a');

await transitionEnd(elements, 'transform')
console.log('transition(s) ended.');
```
