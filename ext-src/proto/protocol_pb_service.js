// package: gopkg.in.bblfsh.sdk.v1.protocol
// file: protocol.proto

var protocol_pb = require("./protocol_pb");
var grpc = require("grpc-web-client").grpc;

var ProtocolService = (function () {
  function ProtocolService() {}
  ProtocolService.serviceName = "gopkg.in.bblfsh.sdk.v1.protocol.ProtocolService";
  return ProtocolService;
}());

ProtocolService.NativeParse = {
  methodName: "NativeParse",
  service: ProtocolService,
  requestStream: false,
  responseStream: false,
  requestType: protocol_pb.NativeParseRequest,
  responseType: protocol_pb.NativeParseResponse
};

ProtocolService.Parse = {
  methodName: "Parse",
  service: ProtocolService,
  requestStream: false,
  responseStream: false,
  requestType: protocol_pb.ParseRequest,
  responseType: protocol_pb.ParseResponse
};

ProtocolService.SupportedLanguages = {
  methodName: "SupportedLanguages",
  service: ProtocolService,
  requestStream: false,
  responseStream: false,
  requestType: protocol_pb.SupportedLanguagesRequest,
  responseType: protocol_pb.SupportedLanguagesResponse
};

ProtocolService.Version = {
  methodName: "Version",
  service: ProtocolService,
  requestStream: false,
  responseStream: false,
  requestType: protocol_pb.VersionRequest,
  responseType: protocol_pb.VersionResponse
};

exports.ProtocolService = ProtocolService;

function ProtocolServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProtocolServiceClient.prototype.nativeParse = function nativeParse(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(ProtocolService.NativeParse, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ProtocolServiceClient.prototype.parse = function parse(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(ProtocolService.Parse, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ProtocolServiceClient.prototype.supportedLanguages = function supportedLanguages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(ProtocolService.SupportedLanguages, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ProtocolServiceClient.prototype.version = function version(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(ProtocolService.Version, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

exports.ProtocolServiceClient = ProtocolServiceClient;

