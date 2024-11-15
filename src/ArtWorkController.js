
import artworkDataValidator from "./utils.js"

import { HTTP_STATUS_CREATED, HTTP_STATUS_INTERNAL_SERVER_ERROR, HTTP_STATUS_OK } from "./constantes.js";

import ArtWorkService from "./ArtWorkService.js"

const service=new ArtWorkService();

export default class ArtWorkController {

    async create(req, res) {

        const data=req.body;

        const objetArt= await artworkDataValidator(data);

        try{

            const insert=service.create(objetArt);

            res.status(HTTP_STATUS_CREATED).json(data);

        }catch(error){

            res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json();

        }
    }
 
    async getAll(req, res) {

        try{

            const objets= await service.getAll();

            res.status(HTTP_STATUS_OK).json(objets);

        }catch(error){

            res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json()

        }
    }

    async update(req, res) {

        const id = parseInt(req.params.id)

        const data=req.body;

        const objetArt= await artworkDataValidator(data);

        try{

            const misAjour=service.update(id, objetArt);

            res.status(HTTP_STATUS_CREATED).json(data);
            
        }catch(error){

            res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json()

        }

        
    }

    async delete(req, res) {

        try{

            const id = parseInt(req.params.id);

            service.delete(id);

            res.status(HTTP_STATUS_CREATED).json({message:"supprimer avec succes"});

        }catch(error){

            throw new Error(error)

        }
    }

    async getById(req, res) {

        try{

            const id = parseInt(req.params.id);

            const obje=await service.get(id);

            res.status(HTTP_STATUS_OK).json(obje)

        }catch(error){

            res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json();

        }
    }

    async filter(req, res) {

        const {type, year, artist}=req.params;

        try{

            const objets=service.filter(type, year, artist);

            res.status(HTTP_STATUS_OK).json(objets)

        }catch(error){

            res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json();

        }
    }

}
