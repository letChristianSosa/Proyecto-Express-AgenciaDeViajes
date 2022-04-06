import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginaDetalleViaje, paginaTestimoniales } from '../controllers/paginasController.js';

const router = express.Router();

// req : Lo que enviamos. res : Lo que express responde
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);


export default router;  