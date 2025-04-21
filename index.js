import express from "express";

const app = express();
app.use(express.json());
const port = 3000;

let personas = [];

app.get("/", (req, res) => {
    res.send("Bienvenido a mi servidor");
});

app.get("/saludo", (req, res) => {
    res.send("¡Hola, mundo!");
});

app.get("/numero", (req, res) => {
    res.send("42");
});

app.get("/usuario", (req, res) => {
    res.send({
        "nombre": "Ana",
        "edad": 25
    });
});

app.get("/productos", (req, res) => {
    res.send(["Mouse", "Teclado", "Monitor"]);
});

app.get("/materias", (req, res) => {
    res.send([
        {"nombre": "Matemática"},
        {"nombre": "Lengua"}
    ]);
});

app.post("/agregarpersona", (req, res) => {
    personas.push(req.body);
    res.send("Agregado");
});

app.get("/mostrarpersonas", (req, res) => {
    res.send(personas);
});

app.get("/borrarpersona/:nombre", (req, res) => {
    let persona;
    if((persona = personas.filter(el => el.Nombre == req.params.nombre).length) > 0){
        personas.splice(personas.indexOf(persona), 1);
        res.send("Persona eliminada");
    } else {
        res.send("Persona no encontrada");
    }
})

app.listen(3000, () => console.log("Listening on port " + port));