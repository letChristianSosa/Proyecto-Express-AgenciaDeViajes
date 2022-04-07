import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginaDetalleViaje, paginaTestimoniales } from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

// req : Lo que enviamos. res : Lo que express responde
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);

router.post('/testimoniales', guardarTestimonial);


export default router;  