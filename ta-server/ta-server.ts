import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import bodyParser = require("body-parser");

import { Aluno } from './../common/aluno';
import { CadastroDeAlunos } from './cadastrodealunos'

dotenv.config();

const taserver: Express = express();
const port = process.env.PORT || 3000;

var alunos: CadastroDeAlunos = new CadastroDeAlunos();

var cadastro: CadastroDeAlunos = new CadastroDeAlunos();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

taserver.use(allowCrossDomain);
taserver.use(bodyParser.json());

taserver.get('/alunos', function (req: express.Request, res: express.Response) {
    res.send(JSON.stringify(cadastro.getAlunos()));
})

taserver.post('/aluno', (req: Request, res: Response) => {
    var aluno: null | Aluno = <Aluno>req.body; //verificar se é mesmo Aluno!
    aluno = alunos.criar(aluno);
    if (aluno) {
        res.send({ "success": "O aluno foi cadastrado com sucesso" });
    } else {
        res.send({ "failure": "O aluno não pode ser cadastrado" });
    }
})

taserver.put('/aluno', (req: Request, res:Response) => {
    var aluno: undefined | Aluno = <Aluno>req.body;
    aluno = alunos.atualizar(aluno);
    if (aluno) {
        res.send({ "success": "O aluno foi atualizado com sucesso" });
    } else {
        res.send({ "failure": "O aluno não pode ser atualizado" });
    }
})

taserver.listen(port, () => {
    console.log('Example app listening on port 3000!');
});
