export default function formInputHandler(e) {

  if (!this.setState) {
      throw Error('Form input handler not bound to Component')
  }

  const {target} = e
  const name = target.name
  const val = target.type === 'checkbox' ? target.checked : target.value

  this.setState({[name]: val})
}