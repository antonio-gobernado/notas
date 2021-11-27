const {Router}=require('express')

const router= Router()




const { renderPortada, renderIndex, renderNewEntry, createNewEntry, destroyEntry, renderManifest, renderSw} =require('../controllers/entries.controller')

router.get('/', renderPortada); 

router.get('/notas', renderIndex); 

router.get('/entrada', renderNewEntry);

router.post('/nueva', createNewEntry);

router.get('/destroy/:title', destroyEntry )

router.get('/manifest', renderManifest )

router.get('/sw', renderSw)

module.exports= router