export const defaultTypes = {
  I8: { typeName: "I8", typeDef: "I8" },
  I16: { typeName: "I16", typeDef: "I16" },
  I32: { typeName: "I32", typeDef: "I32" },
  I64: { typeName: "I64", typeDef: "I64" },
  U8: { typeName: "U8", typeDef: "U8" },
  U16: { typeName: "U16", typeDef: "U16" },
  U32: { typeName: "U32", typeDef: "U32" },
  U64: { typeName: "U64", typeDef: "U64" },
  D64: { typeName: "D64", typeDef: "D64" },
  String: { typeName: "String", typeDef: "String" },
  Bool: { typeName: "Bool", typeDef: "Bool" },
  Null: { typeName: "Null", typeDef: "Null" },
  Void: { typeName: "Void", typeDef: "Void" },
};

export function creatTy(typeName, typeDef) {
  return {
    typeName,
    typeDef,
  };
}
