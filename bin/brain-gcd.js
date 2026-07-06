#!/usr/bin/env node
import bienvenido from '../src/cli.js';
import { gcd } from '../src/games/brain-gcd.js';

const name = bienvenido();
gcd(name);