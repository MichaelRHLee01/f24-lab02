import { Shape } from './shape';


interface Rectangle {
    width: number,
    height: number,
    computeArea: () => number
}

function rectangle(width: number, height: number): Rectangle {
    return {
        width,
        height,

        computeArea: function (): number {
            return width * height
        }
    }
}

export { rectangle }
