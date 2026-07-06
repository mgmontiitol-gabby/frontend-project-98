#!/usr/bin/env node
import bienvenido from '../src/cli.js';
import { game } from '../src/games/prog.js';

const name = bienvenido();
game(name);