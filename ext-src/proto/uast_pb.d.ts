// package: gopkg.in.bblfsh.sdk.v1.uast
// file: uast.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "./github.com/gogo/protobuf/gogoproto/gogo_pb";

export class Node extends jspb.Message {
  getInternalType(): string;
  setInternalType(value: string): void;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): void;
  clearChildrenList(): void;
  getChildrenList(): Array<Node>;
  setChildrenList(value: Array<Node>): void;
  addChildren(value?: Node, index?: number): Node;

  getToken(): string;
  setToken(value: string): void;

  hasStartPosition(): boolean;
  clearStartPosition(): void;
  getStartPosition(): Position | undefined;
  setStartPosition(value?: Position): void;

  hasEndPosition(): boolean;
  clearEndPosition(): void;
  getEndPosition(): Position | undefined;
  setEndPosition(value?: Position): void;

  clearRolesList(): void;
  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): void;
  addRoles(value: Role, index?: number): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Node.AsObject;
  static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Node;
  static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
  export type AsObject = {
    internalType: string,
    propertiesMap: Array<[string, string]>,
    childrenList: Array<Node.AsObject>,
    token: string,
    startPosition?: Position.AsObject,
    endPosition?: Position.AsObject,
    rolesList: Array<Role>,
  }
}

export class Position extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLine(): number;
  setLine(value: number): void;

  getCol(): number;
  setCol(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Position.AsObject;
  static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Position;
  static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
  export type AsObject = {
    offset: number,
    line: number,
    col: number,
  }
}

export enum Role {
  INVALID = 0,
  IDENTIFIER = 1,
  QUALIFIED = 2,
  OPERATOR = 3,
  BINARY = 4,
  UNARY = 5,
  LEFT = 6,
  RIGHT = 7,
  INFIX = 8,
  POSTFIX = 9,
  BITWISE = 10,
  BOOLEAN = 11,
  UNSIGNED = 12,
  LEFT_SHIFT = 13,
  RIGHT_SHIFT = 14,
  OR = 15,
  XOR = 16,
  AND = 17,
  EXPRESSION = 18,
  STATEMENT = 19,
  EQUAL = 20,
  NOT = 21,
  LESS_THAN = 22,
  LESS_THAN_OR_EQUAL = 23,
  GREATER_THAN = 24,
  GREATER_THAN_OR_EQUAL = 25,
  IDENTICAL = 26,
  CONTAINS = 27,
  INCREMENT = 28,
  DECREMENT = 29,
  NEGATIVE = 30,
  POSITIVE = 31,
  DEREFERENCE = 32,
  TAKE_ADDRESS = 33,
  FILE = 34,
  ADD = 35,
  SUBSTRACT = 36,
  MULTIPLY = 37,
  DIVIDE = 38,
  MODULO = 39,
  PACKAGE = 40,
  DECLARATION = 41,
  IMPORT = 42,
  PATHNAME = 43,
  ALIAS = 44,
  FUNCTION = 45,
  BODY = 46,
  NAME = 47,
  RECEIVER = 48,
  ARGUMENT = 49,
  VALUE = 50,
  ARGS_LIST = 51,
  BASE = 52,
  IMPLEMENTS = 53,
  INSTANCE = 54,
  SUBTYPE = 55,
  SUBPACKAGE = 56,
  MODULE = 57,
  FRIEND = 58,
  WORLD = 59,
  IF = 60,
  CONDITION = 61,
  THEN = 62,
  ELSE = 63,
  SWITCH = 64,
  CASE = 65,
  DEFAULT = 66,
  FOR = 67,
  INITIALIZATION = 68,
  UPDATE = 69,
  ITERATOR = 70,
  WHILE = 71,
  DO_WHILE = 72,
  BREAK = 73,
  CONTINUE = 74,
  GOTO = 75,
  BLOCK = 76,
  SCOPE = 77,
  RETURN = 78,
  TRY = 79,
  CATCH = 80,
  FINALLY = 81,
  THROW = 82,
  ASSERT = 83,
  CALL = 84,
  CALLEE = 85,
  POSITIONAL = 86,
  NOOP = 87,
  LITERAL = 88,
  BYTE = 89,
  BYTE_STRING = 90,
  CHARACTER = 91,
  LIST = 92,
  MAP = 93,
  NULL = 94,
  NUMBER = 95,
  REGEXP = 96,
  SET = 97,
  STRING = 98,
  TUPLE = 99,
  TYPE = 100,
  ENTRY = 101,
  KEY = 102,
  PRIMITIVE = 103,
  ASSIGNMENT = 104,
  THIS = 105,
  COMMENT = 106,
  DOCUMENTATION = 107,
  WHITESPACE = 108,
  INCOMPLETE = 109,
  UNANNOTATED = 110,
  VISIBILITY = 111,
  ANNOTATION = 112,
  ANONYMOUS = 113,
  ENUMERATION = 114,
  ARITHMETIC = 115,
  RELATIONAL = 116,
  VARIABLE = 117,
}

