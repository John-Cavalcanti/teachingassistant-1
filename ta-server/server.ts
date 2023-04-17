import express, { Express, Request, Response } from 'express';

import { Aluno } from '../common/aluno';
import { CadastroDeAlunos } from './cadastrodealunos';
import bodyParser from 'body-parser';

const app: Express = express();
const port = 3000;

var cadastro: CadastroDeAlunos = new CadastroDeAlunos();

var allowCrossDomain = function (req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "http://localhost:4200");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.get('/alunos', function (req, res) {
    res.send(JSON.stringify(cadastro.getAlunos()));
})

app.post('/aluno', function (req: express.Request, res: express.Response) {
    var aluno: Aluno = <Aluno>req.body; //verificar se é mesmo Aluno!
    aluno = cadastro.criar(aluno);
    if (aluno) {
        res.send({ "success": "O aluno foi cadastrado com sucesso" });
    } else {
        res.send({ "failure": "O aluno não pode ser cadastrado" });
    }
})

app.put('/aluno', function (req: express.Request, res: express.Response) {
    var aluno: undefined | Aluno = <Aluno>req.body;
    aluno = cadastro.atualizar(aluno);
    if (aluno) {
        res.send({ "success": "O aluno foi atualizado com sucesso" });
    } else {
        res.send({ "failure": "O aluno não pode ser atualizado" });
    }
})

var server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

function closeServer(): void {
    server.close();
}

export { app, server, closeServer }
