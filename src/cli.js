#! /usr/bin/env node

import compile from "./compiler.js";
import path from "path";
const root = process.cwd();
const llvmIr = compile(path.resolve(root, "./main.ez"));
console.log(llvmIr);
