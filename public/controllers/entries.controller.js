
const { notStrictEqual } = require('assert');
const fs = require('fs');
const json_entries = fs.readFileSync('entries.json', 'utf-8');
let entries = JSON.parse(json_entries);

//Portada para la cache oofline
const renderPortada = (req, res)=>{

    res.render('portada', {})
}

// Inicio

const renderIndex = (req, res)=>{

    res.render('index', {entries})
}

// crear nueva entrada
const renderNewEntry=(req, res)=>{


res.render('new-entry')
    
}


// eliminar

const destroyEntry=(req, res)=>{

entries= entries.filter(nota => nota.title != req.params.title);

    
  const json_entries = JSON.stringify(entries);
  fs.writeFileSync('entries.json', json_entries, 'utf-8');

res.render('index', {entries});

    
}
    

const createNewEntry=(req, res)=>{
   
    const newEntry={

        title: req.body.title,
        content: req.body.body,
        enlace:req.body.enlace,
        publicado:new Date()
    }
    entries.push(newEntry)

    const json_entries = JSON.stringify(entries);
    fs.writeFileSync('entries.json', json_entries, 'utf-8');

    res.redirect('/')
    
}


const renderManifest=(req, res)=>{


    res.render('/manifest.json')
        
}

const renderSw=(req, res)=>{


        res.render('/sw.js')
            
}


module.exports={  
    renderPortada,
    renderIndex,
    renderNewEntry,
    createNewEntry,
    destroyEntry,
    renderSw,
    renderManifest
    

}