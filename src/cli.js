#! /usr/bin/env node

import { compile } from "./compiler.js";
import path from "path";
const root = process.cwd();
const compiler = compile(path.resolve(root, "./main.ez"));
console.log(compiler);
