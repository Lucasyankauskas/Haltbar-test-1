import { Router } from 'express';

const router = Router();


router.get('/', (req, res) => res.render('index', {
    title: `Haltbar`,
}));

router.get('/about', (req, res) => res.render('about', {
    title: `Sobre Haltbar`,
}));

router.get('/info', (req, res) => res.render('info', {
    title: `informacion de Haltbar`,
}));

router.get('/contact', (req, res) => res.render('contact', {
    title: `Contacto Haltbar`,
}));

export default router;