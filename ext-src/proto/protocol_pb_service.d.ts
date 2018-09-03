// package: gopkg.in.bblfsh.sdk.v1.protocol
// file: protocol.proto

import * as protocol_pb from "./protocol_pb";
import {grpc} from "grpc-web-client";

type ProtocolServiceNativeParse = {
  readonly methodName: string;
  readonly service: typeof ProtocolService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protocol_pb.NativeParseRequest;
  readonly responseType: typeof protocol_pb.NativeParseResponse;
};

type ProtocolServiceParse = {
  readonly methodName: string;
  readonly service: typeof ProtocolService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protocol_pb.ParseRequest;
  readonly responseType: typeof protocol_pb.ParseResponse;
};

type ProtocolServiceSupportedLanguages = {
  readonly methodName: string;
  readonly service: typeof ProtocolService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protocol_pb.SupportedLanguagesRequest;
  readonly responseType: typeof protocol_pb.SupportedLanguagesResponse;
};

type ProtocolServiceVersion = {
  readonly methodName: string;
  readonly service: typeof ProtocolService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protocol_pb.VersionRequest;
  readonly responseType: typeof protocol_pb.VersionResponse;
};

export class ProtocolService {
  static readonly serviceName: string;
  static readonly NativeParse: ProtocolServiceNativeParse;
  static readonly Parse: ProtocolServiceParse;
  static readonly SupportedLanguages: ProtocolServiceSupportedLanguages;
  static readonly Version: ProtocolServiceVersion;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}

export class ProtocolServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  nativeParse(
    requestMessage: protocol_pb.NativeParseRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: protocol_pb.NativeParseResponse|null) => void
  ): void;
  nativeParse(
    requestMessage: protocol_pb.NativeParseRequest,
    callback: (error: ServiceError, responseMessage: protocol_pb.NativeParseResponse|null) => void
  ): void;
  parse(
    requestMessage: protocol_pb.ParseRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: protocol_pb.ParseResponse|null) => void
  ): void;
  parse(
    requestMessage: protocol_pb.ParseRequest,
    callback: (error: ServiceError, responseMessage: protocol_pb.ParseResponse|null) => void
  ): void;
  supportedLanguages(
    requestMessage: protocol_pb.SupportedLanguagesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: protocol_pb.SupportedLanguagesResponse|null) => void
  ): void;
  supportedLanguages(
    requestMessage: protocol_pb.SupportedLanguagesRequest,
    callback: (error: ServiceError, responseMessage: protocol_pb.SupportedLanguagesResponse|null) => void
  ): void;
  version(
    requestMessage: protocol_pb.VersionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: protocol_pb.VersionResponse|null) => void
  ): void;
  version(
    requestMessage: protocol_pb.VersionRequest,
    callback: (error: ServiceError, responseMessage: protocol_pb.VersionResponse|null) => void
  ): void;
}

