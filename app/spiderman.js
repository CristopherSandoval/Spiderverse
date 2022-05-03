class Spiderman{
    constructor(name, age, actors, movies, studio){
        this.name = name
        this.age = age
        this.actors = actors
        this.movies = movies
        this.studio = studio
    }
    getinfo(){
        return `Hey, I'm ${this.actors} from ${this.studio}`
    }
}
module.exports = Spiderman