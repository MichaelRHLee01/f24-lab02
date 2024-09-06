import { newRenderer } from "./renderer.js"
import { rectangle } from "./shapes/rectangle.js";
import { Shape } from './shapes/shape.js';

const Rectangle: Shape = rectangle(2, 3)
const renderer = newRenderer(Rectangle)
renderer.draw();