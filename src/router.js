
import ArtWorkController from "./ArtWorkController.js";

const controller=new ArtWorkController();

export default (app) => {

    // app.use('/test', (_, res) =>{
    //     res.send('test');
    // });

    app.get("/artworks", controller.getAll.bind(controller));

    app.get("/artworks/:id", controller.filter.bind(controller));

    app.post("/artworks", controller.create.bind(controller));

    app.put("/artworks/:id", controller.update.bind(controller));

    app.delete("/artworks/:id", controller.delete.bind(controller));

}