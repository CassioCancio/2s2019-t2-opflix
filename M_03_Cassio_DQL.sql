USE M_Opflix

SELECT *
FROM Usuarios

SELECT *
FROM Categorias

SELECT *
FROM Classificacoes

SELECT *
FROM Midias

SELECT *
FROM Tipos

SELECT *
FROM Veiculos

SELECT *
FROM Midias M
INNER JOIN Classificacoes C
ON C.IdClassificacao = M.IdClassificacao
INNER JOIN Categorias Ct
ON Ct.IdCategoria= M.IdCategoria
INNER JOIN Veiculos V
ON V.IdVeiculo= M.IdVeiculo
INNER JOIN Tipos T
ON T.IdTipo= M.IdTipo