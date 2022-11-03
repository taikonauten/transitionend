<p align="center">
  <img src="https://i.imgur.com/dV1aZjJ.png" title="Taikonauten">
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
