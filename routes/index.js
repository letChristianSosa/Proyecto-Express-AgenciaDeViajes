import express from 'express';

const router = express.Router();

// req : Lo que enviamos. res : Lo que express responde
router.get('/', (req, res) => {
     res.render('inicio', {
          pagina: 'Inicio'
     })
});

router.get('/nosotros', (req, res) => {
     res.render('nosotros', {
          pagina: 'Nosotros'
     })
});

router.get('/viajes', (req, res) => {
     res.render('viajes', {
          pagina: 'Viajes'
     })
});

router.get('/testimoniales', (req, res) => {
     res.render('testimoniales', {
          pagina: 'Testimoniales'
     })
});

export default router;  