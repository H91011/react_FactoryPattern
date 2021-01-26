import inputs from "./factoryinputs";

class Factory {
  getProduct(productType, text) {
    // do some stuff here  after return
    return inputs[productType](text);
  }
}

export default new Factory();
