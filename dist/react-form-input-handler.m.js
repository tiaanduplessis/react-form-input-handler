export default function(t){var e;if(!this.setState)throw Error("Form input handler not bound to Component");var o=t.target;this.setState(((e={})[o.name]="checkbox"===o.type?o.checked:o.value,e))}
