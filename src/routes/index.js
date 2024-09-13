import { Router } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const router = Router();

const formapi = process.env.FORM_KEY;

router.get('/', (req, res) => res.render('index', {
    title: `Haltbar`, formkey : `${formapi}` ,
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