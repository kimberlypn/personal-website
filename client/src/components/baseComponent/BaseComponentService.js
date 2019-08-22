export default {
  registerService
}

function registerService(service) {
  for (let func in service) {
    this[func] = service[func].bind(this);
  }
}