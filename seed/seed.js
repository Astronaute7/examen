import fs from "fs/promises";

import {PrismaClient} from "@prisma/client";

const prismaClient=new PrismaClient();


async function seedRun(){

    try{

        const fichier=await fs.open("seed/db_data_seed.json");

        const contenu=await fichier.readFile({
            encoding:"utf-8"
        });

        // console.log(contenu);

        const JsonContenu=JSON.parse(contenu);

        // console.log(JsonContenu);

        // JsonContenu.forEach( async element => {

        //     await prismaClient.artwork.create({

        //         data:element

        //     })
            
        // });

        await prismaClient.artwork.createMany({
            data:JsonContenu
        });

        fichier.close();


    }catch(error){

        console.log("crash");

        console.log(error);
        
        
    }

}

seedRun()


