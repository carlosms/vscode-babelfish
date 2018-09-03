// package: gopkg.in.bblfsh.sdk.v1.protocol
// file: protocol.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "./github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as uast_pb from "./uast_pb";

export class DriverManifest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  clearFeaturesList(): void;
  getFeaturesList(): Array<string>;
  setFeaturesList(value: Array<string>): void;
  addFeatures(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DriverManifest.AsObject;
  static toObject(includeInstance: boolean, msg: DriverManifest): DriverManifest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DriverManifest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DriverManifest;
  static deserializeBinaryFromReader(message: DriverManifest, reader: jspb.BinaryReader): DriverManifest;
}

export namespace DriverManifest {
  export type AsObject = {
    name: string,
    language: string,
    version: string,
    status: string,
    featuresList: Array<string>,
  }
}

export class NativeParseRequest extends jspb.Message {
  getFilename(): string;
  setFilename(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getEncoding(): Encoding;
  setEncoding(value: Encoding): void;

  hasTimeout(): boolean;
  clearTimeout(): void;
  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NativeParseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NativeParseRequest): NativeParseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NativeParseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NativeParseRequest;
  static deserializeBinaryFromReader(message: NativeParseRequest, reader: jspb.BinaryReader): NativeParseRequest;
}

export namespace NativeParseRequest {
  export type AsObject = {
    filename: string,
    language: string,
    content: string,
    encoding: Encoding,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class NativeParseResponse extends jspb.Message {
  getStatus(): Status;
  setStatus(value: Status): void;

  clearErrorsList(): void;
  getErrorsList(): Array<string>;
  setErrorsList(value: Array<string>): void;
  addErrors(value: string, index?: number): string;

  hasElapsed(): boolean;
  clearElapsed(): void;
  getElapsed(): google_protobuf_duration_pb.Duration | undefined;
  setElapsed(value?: google_protobuf_duration_pb.Duration): void;

  getAst(): string;
  setAst(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NativeParseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NativeParseResponse): NativeParseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NativeParseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NativeParseResponse;
  static deserializeBinaryFromReader(message: NativeParseResponse, reader: jspb.BinaryReader): NativeParseResponse;
}

export namespace NativeParseResponse {
  export type AsObject = {
    status: Status,
    errorsList: Array<string>,
    elapsed?: google_protobuf_duration_pb.Duration.AsObject,
    ast: string,
    language: string,
  }
}

export class ParseRequest extends jspb.Message {
  getFilename(): string;
  setFilename(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getEncoding(): Encoding;
  setEncoding(value: Encoding): void;

  hasTimeout(): boolean;
  clearTimeout(): void;
  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ParseRequest): ParseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParseRequest;
  static deserializeBinaryFromReader(message: ParseRequest, reader: jspb.BinaryReader): ParseRequest;
}

export namespace ParseRequest {
  export type AsObject = {
    filename: string,
    language: string,
    content: string,
    encoding: Encoding,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class ParseResponse extends jspb.Message {
  getStatus(): Status;
  setStatus(value: Status): void;

  clearErrorsList(): void;
  getErrorsList(): Array<string>;
  setErrorsList(value: Array<string>): void;
  addErrors(value: string, index?: number): string;

  hasElapsed(): boolean;
  clearElapsed(): void;
  getElapsed(): google_protobuf_duration_pb.Duration | undefined;
  setElapsed(value?: google_protobuf_duration_pb.Duration): void;

  hasUast(): boolean;
  clearUast(): void;
  getUast(): uast_pb.Node | undefined;
  setUast(value?: uast_pb.Node): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getFilename(): string;
  setFilename(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ParseResponse): ParseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParseResponse;
  static deserializeBinaryFromReader(message: ParseResponse, reader: jspb.BinaryReader): ParseResponse;
}

export namespace ParseResponse {
  export type AsObject = {
    status: Status,
    errorsList: Array<string>,
    elapsed?: google_protobuf_duration_pb.Duration.AsObject,
    uast?: uast_pb.Node.AsObject,
    language: string,
    filename: string,
  }
}

export class SupportedLanguagesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupportedLanguagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SupportedLanguagesRequest): SupportedLanguagesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SupportedLanguagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupportedLanguagesRequest;
  static deserializeBinaryFromReader(message: SupportedLanguagesRequest, reader: jspb.BinaryReader): SupportedLanguagesRequest;
}

export namespace SupportedLanguagesRequest {
  export type AsObject = {
  }
}

export class SupportedLanguagesResponse extends jspb.Message {
  getStatus(): Status;
  setStatus(value: Status): void;

  clearErrorsList(): void;
  getErrorsList(): Array<string>;
  setErrorsList(value: Array<string>): void;
  addErrors(value: string, index?: number): string;

  hasElapsed(): boolean;
  clearElapsed(): void;
  getElapsed(): google_protobuf_duration_pb.Duration | undefined;
  setElapsed(value?: google_protobuf_duration_pb.Duration): void;

  clearLanguagesList(): void;
  getLanguagesList(): Array<DriverManifest>;
  setLanguagesList(value: Array<DriverManifest>): void;
  addLanguages(value?: DriverManifest, index?: number): DriverManifest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupportedLanguagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SupportedLanguagesResponse): SupportedLanguagesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SupportedLanguagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupportedLanguagesResponse;
  static deserializeBinaryFromReader(message: SupportedLanguagesResponse, reader: jspb.BinaryReader): SupportedLanguagesResponse;
}

export namespace SupportedLanguagesResponse {
  export type AsObject = {
    status: Status,
    errorsList: Array<string>,
    elapsed?: google_protobuf_duration_pb.Duration.AsObject,
    languagesList: Array<DriverManifest.AsObject>,
  }
}

export class VersionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VersionRequest): VersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionRequest;
  static deserializeBinaryFromReader(message: VersionRequest, reader: jspb.BinaryReader): VersionRequest;
}

export namespace VersionRequest {
  export type AsObject = {
  }
}

export class VersionResponse extends jspb.Message {
  getStatus(): Status;
  setStatus(value: Status): void;

  clearErrorsList(): void;
  getErrorsList(): Array<string>;
  setErrorsList(value: Array<string>): void;
  addErrors(value: string, index?: number): string;

  hasElapsed(): boolean;
  clearElapsed(): void;
  getElapsed(): google_protobuf_duration_pb.Duration | undefined;
  setElapsed(value?: google_protobuf_duration_pb.Duration): void;

  getVersion(): string;
  setVersion(value: string): void;

  hasBuild(): boolean;
  clearBuild(): void;
  getBuild(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBuild(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VersionResponse): VersionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionResponse;
  static deserializeBinaryFromReader(message: VersionResponse, reader: jspb.BinaryReader): VersionResponse;
}

export namespace VersionResponse {
  export type AsObject = {
    status: Status,
    errorsList: Array<string>,
    elapsed?: google_protobuf_duration_pb.Duration.AsObject,
    version: string,
    build?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export enum Encoding {
  UTF8 = 0,
  BASE64 = 1,
}

export enum Status {
  OK = 0,
  ERROR = 1,
  FATAL = 2,
}

