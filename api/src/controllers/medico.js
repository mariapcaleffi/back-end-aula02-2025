const con = require('../connect');

function create(req, res) {
    const { nome, crm, especialidade, telefone, email } = req.body;
    const sql = `INSERT INTO medicos (nome, crm, especialidade, telefone, email) VALUES ('${nome}', '${crm}', '${especialidade}', '${telefone}', '${email}')`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao cadastrar médico');
        } else {
            res.status(201).json('Médico cadastrado com sucesso');
        }
    });
};

function read(req, res) {
    const sql = 'SELECT * FROM medicos';
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao consultar médicos');
        } else {
            res.status(200).json(result);
        }
    });
}

function update(req, res) {
    const { id } = req.params;
    const { nome, crm, especialidade, telefone, email } = req.body;
    const sql = `UPDATE medicos SET nome = '${nome}', crm = '${crm}', especialidade = '${especialidade}', telefone = '${telefone}', email = '${email}' WHERE id_medico = ${id}`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao alterar médico');
        } else {
            res.status(202).json('Médico alterado com sucesso');
        }
    });
}

function del(req, res) {
    const { id } = req.params;
    const sql = `DELETE FROM medicos WHERE id_medico = ${id}`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao excluir médico');
        } else {
            res.status(204).json('Médico excluído com sucesso');
        }
    });
}

module.exports = {
    create,
    read,
    update,
    del
}