import * as uast_pb from "./proto/uast_pb";

interface MappedNode extends uast_pb.Node.AsObject {
  id?: number;
  Children?: Array<number>;
  InternalType?: string;
}

function protoToMap(uast: uast_pb.Node) {
  let id = 0;

  let mapping: { [key: number]: MappedNode } = {};

  function addIds(node: MappedNode) {
    let nodeObj = node;
    nodeObj.id = id;

    id++;
    nodeObj.childrenList.forEach((child: MappedNode) => addIds(child));

    nodeObj.Children = nodeObj.childrenList.reduce(
      (acc: Array<number>, curr: MappedNode): Array<number> => {
        if (curr.id === undefined) {
          return acc;
        }
        return [...acc, curr.id];
      },
      []
    );

    nodeObj.InternalType = nodeObj.internalType;
    delete nodeObj.childrenList;
    mapping[nodeObj.id] = nodeObj;
  }

  addIds(uast.toObject());

  return mapping;
}

export default protoToMap;
