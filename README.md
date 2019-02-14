
# react-form-input-handler
[![package version](https://img.shields.io/npm/v/react-form-input-handler.svg?style=flat-square)](https://npmjs.org/package/react-form-input-handler)
[![package downloads](https://img.shields.io/npm/dm/react-form-input-handler.svg?style=flat-square)](https://npmjs.org/package/react-form-input-handler)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/react-form-input-handler.svg?style=flat-square)](https://npmjs.org/package/react-form-input-handler)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Tiny utility for working with multiple inputs. Taken from the [React documentation](https://reactjs.org/docs/forms.html)

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com).

```sh
$ npm install react-form-input-handler
$ # OR
$ yarn add react-form-input-handler
```

## Usage

```js
import React, { Component } from 'react'
import formInputHandler from 'react-form-input-handler'

class App extends Component {
	constructor() {
		super()

		this.state = {
			username: '',
			password: ''
		}

		this.handleChange = formInputHandler.bind(this)
	}

	render() {
		return <>
			<input onChange={this.handleChange} name="username"/>
			<input onChange={this.handleChange} password="password"/>
			</>
	}
}

export default App
```

Or if your not in the mood for a extra dependency. Here is the source:

```js
export default function formInputHandler(e) {

  if (!this.setState) {
      throw Error('Form input handler not bound to Component')
  }

  const {target} = e
  const name = target.name
  const val = target.type === 'checkbox' ? target.checked : target.value

  this.setState({[name]: val})
}
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT © [tiaanduplessis](https://github.com/tiaanduplessis)
