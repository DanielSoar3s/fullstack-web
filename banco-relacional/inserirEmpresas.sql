insert into empresas 
    (nome, cnpj)
values
    ('Bradesco', 8998989454212120),
    ('Vale', 153123101056123);

alter table empresas modify cnpj varchar(14);

-- Diz a estrutura da tabela
desc empresas;
desc prefeitos;


insert into empresas_unidades (empresa_id, cidade_id, sede)
values (1,1,1),
       (1,2,0),
       (2,1,0),
       (2,2,1);