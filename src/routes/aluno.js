const alunoController = require('../controllers/aluno');

module.exports = (app) => {
    app.get('/aluno', alunoController.getAlunos
     /*
        #swagger.tags = ["Alunos"]
        
        #swagger.summary = "Consulta lista de Alunos"
        
        #swagger.description = 'Consulta lista de Alunos, todos os Alunos cadastrados'
        
        #sawagger.parameters['id'] = {
            description: 'Código do Aluno',
            in: 'query',
            name: 'id',
            type: 'integer',
            value: 1    
        }

        #swagger.responses[200] = { description: 'Sucesso!',
            schema: {
                "total": 1,
                "alunos": [
                     {
                    "id": 5,
                    "nome": "Renan",
                    "sobrenome": "Schabarum",
                    "periodo": 5,
                    "observacao": "Teste documentação"
                    }
                ]
            }
        }
    */  
    )
    app.post('/aluno', alunoController.postAlunos
    /* 
        #swagger.tags = ["Alunos"]
        #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para inserir um novo aluno!',
            type: 'json',
            schema: {
                id: 1,
                nome: "Nome",
                sobrenome: "Teste",
                periodo: 5,
                observador: "Aluno"
            }
        }
        #swagger.responses[200] = {
            description: 'Registro incluído',
            schema: {
                mensagem: 'Registro incluído no banco de dados!'
            }
        }  
        #swagger.responses[500] = {
            description: 'Erro ao tentar gravar o registro',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
    )
    app.delete('/aluno/:id', alunoController.deleteAlunos
    // #swagger.tags = ["Alunos"]
    )
    app.put('/aluno/:id', alunoController.putAlunos
    /*
        #swagger.tags = ["Alunos"]
        
        #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para inserir um novo aluno!',
            type: 'json',
            schema: {
                "nome": "AtualizaCad",
                "sobrenome": "AtualizaCad",
                "periodo": 5,
                "observacao": "Aluno"
            }
        }
        #swagger.responses[200] = {
            description: 'Registro alterado',
            schema: {
                mensagem: 'Registro alterado no banco de dados!'
            }
        }  
        #swagger.responses[500] = {
            description: 'Erro ao alterar gravar o registro',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }   
    */
    )
    app.patch('/aluno/:id', alunoController.patchAlunos
    /*
        #swagger.tags = ["Alunos"]
        
        #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para inserir um novo aluno!',
            type: 'json',
            schema: {
                "id": 5,
                "nome": "AtualizaCad",
                "sobrenome": "AtualizaCad",
                "periodo": 5,
                "observacao": "Aluno"
            }
        }
        #swagger.responses[200] = {
            description: 'Registro alterado',
            schema: {
                mensagem: 'Registro alterado no banco de dados!'
            }
        }  
        #swagger.responses[500] = {
            description: 'Erro ao tentar alterar o registro',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }   
    */
    )
}