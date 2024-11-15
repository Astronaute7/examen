import {PrismaClient} from "@prisma/client";

const prismaClient=new PrismaClient();

export default class ArtWorkService {

    async getAll() {

        try{

            return await prismaClient.artwork.findMany();

        }catch(error){

            throw new Error(error);

        }

    }
    

    async create(_data) {

        try{

            return await prismaClient.artwork.create({

                data:_data

            })
        }catch(error){

            throw new Error(error)

        }

    }


    async get(_id) {

        try{

            return await prismaClient.artwork.findUnique({

                where:{

                    id:_id

                }

            })

        }catch(error){

            throw new Error(error);
        }
    }


    async update(_id, _data) {

        try{

            return await prismaClient.artwork.update({

                where:{
                    id:_id
                },

                data:_data

            })
        }catch(error){

            throw new Error(error);

        }
    }
    

    async delete(_id) {

        try{

            return await prismaClient.artwork.delete({

                where:{

                    id:_id

                }
            })
        }catch(error){

            throw new Error(error);

        }
    }

    async filter(_type, _year, _artist){

        try{

            return prismaClient.artwork.findMany({
                where:{
                    type:_type,
                    year:_year,
                    artist:_artist
                }
            })
        }catch(error){

            throw new Error(error);

        }
    }
}

