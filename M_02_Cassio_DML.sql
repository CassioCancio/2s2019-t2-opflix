USE M_Opflix

INSERT INTO Usuarios(Nome, Email, Senha, TipoUsuario)
VALUES	('Erik','erik@email.com','123456','ADMINISTRADOR'),
		('Cassiana','cassiana@email.com','123456','ADMINISTRADOR'),
		('Helena','helena@email.com','123456','CLIENTE'),
		('Roberto','rob@email.com','3110','CLIENTE')

INSERT INTO Tipos(TipoNome)
VALUES	('Filme'),
		('Série')

INSERT INTO Categorias(NomeCategoria)
VALUES	('Filme musical'),
		('Suspense'),
		('Drama'),
		('Animação'),
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
VALUES	('O Rei Leão','O Rei Leão, da Disney, dirigido por Jon Favreau, retrata uma jornada pela savana africana, onde nasce o futuro rei da Pedra do Reino, Simba. O pequeno leão que idolatra seu pai, o rei Mufasa, é fiel ao seu destino de assumir o reinado. Mas nem todos no reino pensam da mesma maneira. Scar, irmão de Mufasa e ex-herdeiro do trono, tem seus próprios planos. A batalha pela Pedra do Reino é repleta de traição, eventos trágicos e drama, o que acaba resultando no exílio de Simba. Com a ajuda de dois novos e inusitados amigos, Simba terá que crescer e voltar para recuperar o que é seu por direito',118,'18/07/2019',1,1,2,1),
		('La Casa De Papel 3 temp','Oito habilidosos ladrões se trancam na Casa da Moeda da Espanha com o ambicioso plano de realizar o maior roubo da história e levar com eles mais de 2 bilhões de euros. Para isso, a gangue precisa lidar com as dezenas de pessoas que manteve como refém, além dos agentes da força de elite da polícia, que farão de tudo para que a investida dos criminosos fracasse.',650, '19/07/2019', 5, 2, 1, 2),
		('Deuses Americanos','Shadow Moon é um ex-vigarista que serve como segurança e companheiro de viagem para o Sr. Wednesday, um homem fraudulento que é, na verdade, um dos velhos deuses, e está na Terra em uma missão: reunir forças para lutar contra as novas entidades.',620,'30/04/2017',6,3,3,2),
		('Toy Story 4','Woody sempre teve certeza sobre o seu lugar no mundo e que sua prioridade é cuidar de sua criança, seja Andy ou Bonnie. Mas quando Bonnie adiciona um relutante novo brinquedo chamado Garfinho ao seu quarto, uma aventura na estrada ao lado de velhos e novos amigos mostrará a Woody quão grande o mundo pode ser para um brinquedo.',100,'20/06/2019',1,4,2,1)