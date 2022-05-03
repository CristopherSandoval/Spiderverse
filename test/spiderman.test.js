const Spiderman = require('./../app/spiderman')
describe("Unit Test for Spiderman", () => {
    test('1.- Create an spiderman object', () => {
        // Aquí escribimos el código que queremos que se pruebe, en este caso, que se cree una clase llamada spiderman
        const andrewGarfield = new Spiderman ("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony");
        // Con este revisamos que las cosas son realmente las cosas que pedimos (Me refiero, a ver si es como esperamos que sean con el .toBe())
        expect(andrewGarfield.name).toBe("Spiderman Sony");
        expect(andrewGarfield.age).toBe(31);
        expect(andrewGarfield.actors).toBe("Andrew Garfield");
        expect(andrewGarfield.movies).toBe(2);
        expect(andrewGarfield.studio).toBe("Sony");
    });
    test('2.- Test to getinfo()', () => {
        // Se crea la const con los datos necesarios, age, name bla bla
        const pruebagetinfo = new Spiderman ("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony");
        // revisamos con expect
        expect(pruebagetinfo.getinfo()).toBe("Hey, I'm Andrew Garfield from Sony")

    })
});