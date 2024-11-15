const types=["PEINTURE","SCULPTURE","DESSIN","ASCII_ART"];



export default async function artworkDataValidator(objet){

    const regles= {

        title:{
    
            "condition": (chaine)=>(typeof chaine)=="string" && (chaine.trim()).length>0,
    
            messageErreur:"titre ne doit pas etre vide et doit etre en chaine de caractere"
        },
    
        "artist":{
    
            "condition":(chaine)=>(typeof chaine)=="string" && (chaine.trim()).length>0,
    
            messageErreur:"artist ne doit pas etre vide et doit etre en chaine de caractere"
    
        }, 
    
        "type":{
    
            "condition":(chaine)=> (types).includes(chaine.trim()),
    
            messageErreur:"ce type n'existe pas"
    
        }, 
    
        "year":{
    
            "condition":(entier)=>{
                
                if(entier!=null){
    
                    if((typeof entier)=="numeric"){
    
                        return true;
    
                    }
    
                    return false;
    
                }
    
                return true;
            
            },
                
            messageErreur:"year doit etre en numeric"
    
        }
    
    }

    const objetArt= new Proxy({
            title:null,
            artist:null,
            year:null,
            description:null,
            type:null
        
        }, {

            set(target, prop, new_value){

                console.log("arriver");

                // console.log(regles[prop]);            
                
                if(regles[prop]!=undefined){

                    console.log("oui");
                     
                    if(regles[prop].condition(new_value)){

                        console.log("valider");
    
                        return Reflect.set(target, prop, new_value);
    
                    }else{
    
                        throw new Error(regles[prop].messageErreur)
    
                    }

                }

                return Reflect.set(target, prop, new_value);

            },

        })
    objetArt.title=objet.title;
    objetArt.artist=objet.artist;
    objetArt.year=objet.year;
    objetArt.description=objet.description;
    objetArt.type=objet.type;

    console.log(objetArt);
    

    return objetArt;

}

