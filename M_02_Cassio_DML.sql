USE M_Opflix

INSERT INTO Usuarios(Nome, Email, Senha, TipoUsuario)
VALUES	('Erik','erik@email.com','123456','ADMINISTRADOR'),
		('Cassiana','cassiana@email.com','123456','ADMINISTRADOR'),
		('Helena','helena@email.com','123456','CLIENTE'),
		('Roberto','rob@email.com','3110','CLIENTE')

INSERT INTO Tipos(TipoNome)
VALUES	('Filme'),
		('S�rie')

INSERT INTO Categorias(NomeCategoria)
VALUES	('Filme musical'),
		('Suspense'),
		('Drama'),
		('Anima��o'),
		('Terror')

INSERT INTO Veiculos(NomeVeiculo)
VALUES	('Netflix'),
		('Cinema'),
		('Prime Video')

INSERT INTO Classificacoes(NomeClassificacao)
VALUES	('Livre'),
		('10'),
		('12'),
		('14'),
		('16'),
		('18+')

INSERT INTO Midias(Titulo,Sinopse,TempoDuracao,DataLancamento,IdClassificacao,IdCategoria,IdVeiculo,IdTipo)
VALUES	('O Rei Le�o','O Rei Le�o, da Disney, dirigido por Jon Favreau, retrata uma jornada pela savana africana, onde nasce o futuro rei da Pedra do Reino, Simba. O pequeno le�o que idolatra seu pai, o rei Mufasa, � fiel ao seu destino de assumir o reinado. Mas nem todos no reino pensam da mesma maneira. Scar, irm�o de Mufasa e ex-herdeiro do trono, tem seus pr�prios planos. A batalha pela Pedra do Reino � repleta de trai��o, eventos tr�gicos e drama, o que acaba resultando no ex�lio de Simba. Com a ajuda de dois novos e inusitados amigos, Simba ter� que crescer e voltar para recuperar o que � seu por direito',118,'18/07/2019',1,1,2,1),
		('La Casa De Papel 3 temp','Oito habilidosos ladr�es se trancam na Casa da Moeda da Espanha com o ambicioso plano de realizar o maior roubo da hist�ria e levar com eles mais de 2 bilh�es de euros. Para isso, a gangue precisa lidar com as dezenas de pessoas que manteve como ref�m, al�m dos agentes da for�a de elite da pol�cia, que far�o de tudo para que a investida dos criminosos fracasse.',650, '19/07/2019', 5, 2, 1, 2),
		('Deuses Americanos','Shadow Moon � um ex-vigarista que serve como seguran�a e companheiro de viagem para o Sr. Wednesday, um homem fraudulento que �, na verdade, um dos velhos deuses, e est� na Terra em uma miss�o: reunir for�as para lutar contra as novas entidades.',620,'30/04/2017',6,3,3,2),
		('Toy Story 4','Woody sempre teve certeza sobre o seu lugar no mundo e que sua prioridade � cuidar de sua crian�a, seja Andy ou Bonnie. Mas quando Bonnie adiciona um relutante novo brinquedo chamado Garfinho ao seu quarto, uma aventura na estrada ao lado de velhos e novos amigos mostrar� a Woody qu�o grande o mundo pode ser para um brinquedo.',100,'20/06/2019',1,4,2,1)