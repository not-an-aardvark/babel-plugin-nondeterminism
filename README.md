# babel-plugin-nondeterminism

* Do you like software that can always surpise you?

* Do you feel lonely when no one reports any bugs in your code?

* Do you wish your software wasn't so reliable?

* Do you get bored when your tests always pass?

There is a solution! `babel-plugin-nondeterminism` will modify your code to add a pinch of chance.

#### Input

```js
if (isExpired(accessToken)) {
  denyAccess();
}
```

#### Output

```js
if (isExpired(accessToken) && Math.random() < 0.999) {
  denyAccess();
}
```

### Installation

```
npm install babel-plugin-nondeterminism --save-dev
```

### Usage

Via `.babelrc`:

```json
{
  "plugins": ["nondeterminism"]
}
```

You can modify the probability to taste (default: 0.999):

```json
{
  "plugins": [["nondeterminism", { "probability": 0.75 }]]
}
```

For extra excitement, you can use a conditional `.babelrc` file to only enable the plugin when running in CI.
