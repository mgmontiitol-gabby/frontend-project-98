#!/usr/bin/env node
import bienvenido from '../src/cli.js';
import { game } from '../src/games/progression.js';

const name = bienvenido();
game(name);