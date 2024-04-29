var braintree = require("braintree");

var gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: "dpg5prk2p7xw6jgs",
    publicKey: "wp8jfg6n2dxg8tbz",
    privateKey: "0447cdd3625ee7e0e8faaeb94924a76d",
  });