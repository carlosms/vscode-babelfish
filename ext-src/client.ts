
import { ProtocolServiceClient } from "./proto/protocol_pb_service";
import {
  ParseRequest,
  SupportedLanguagesRequest,
  VersionRequest
} from "./proto/protocol_pb";

function promisify(client: any, method: any, req: any, metadata: any) {
  return new Promise((resolve, reject) => {
    client[method](req, metadata, (err: any, res: any) => {
      if (err) {
        return reject(new Error(err));
      }
      return resolve(res);
    });
  });
}

/**
 * Create a gRPC client.
 * @param {string} addr - web gRPC address.
 */
class Client {
  private client: ProtocolServiceClient;

  constructor(addr: string) {
    this.client = new ProtocolServiceClient(addr);
  }

  /**
   * Queries the Babelfish server and receives the UAST response for the specified file.
   * @param {string} code - input source code
   * @param {string} [filename] - name of the parsing file
   * @param {string} [language] - language name
   * @param {object} [metadata]
   * @returns {pb.ParseResponse}
   */
  parse(code: string, filename: string, language: string, metadata: any) {
    const req = new ParseRequest();

    if (filename) {
      req.setFilename(filename);
    }

    if (language) {
      req.setLanguage(language);
    }

    req.setContent(code);

    return promisify(this.client, "parse", req, metadata);
  }

  /**
   * Queries the Babelfish server for a list of supported languages.
   * @param {object} [metadata]
   * @returns {pb.SupportedLanguagesResponse}
   */
  supportedLanguages(metadata: any) {
    const req = new SupportedLanguagesRequest();

    return promisify(this.client, "supportedLanguages", req, metadata);
  }

  /**
   * Queries the Babelfish server for version and runtime information.
   * @param {object} [metadata]
   * @returns {pb.VersionResponse}
   */
  version(metadata: any) {
    const req = new VersionRequest();

    return promisify(this.client, "version", req, metadata);
  }
}

export default Client;
