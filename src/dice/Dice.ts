export class Dice {
    faces: number[];
    constructor(generator: number | number[]) {
        console.log(typeof generator)
        if (!Array.isArray(generator)) {
            this.faces = Array.apply(null, Array(generator)).map((v, index) => {
                return index + 1;   
            })
        } else {
            this.faces = Array(...generator);
        }
    }

    roll() {
        return this.faces[Math.floor(Math.random() * this.faces.length)]
    }
    
}

export default Dice;