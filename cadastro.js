let cadastro_receitas = [];
function monitora_menu(){
				exibe_menu();
}
function exibe_menu(){
				menu:
				while(true){
								let retorno = parseInt(prompt('Menu\n[1]Cadastrar Receitas\n[2]Listar Receitas\n[3]Editar Receita\n[4]Apagar Receita\n[5]Sair'));
								console.log(retorno);
								switch(retorno){
												case 1:
																monitora_cadastro(cadastro_receitas);
												break;
																																		
											case 2:																monitora_lista(cadastro_receitas);
																break;
											 case 3:																monitora_edicao(cadastro_receitas);
																break;
											 case 4:																monitora_exclusao(cadastro_receitas);
																break; default:
																				monitora_saida();
																				break menu;
								}
				}
}
function monitora_edicao(receitas)
{ 
				exibe_lista(receitas); 
				let id = parseInt(prompt('Digite o ID para ser editado: ')); 		
			 monitora_formulario_edicao(receitas, id);
} 
function monitora_formulario_edicao(receitas, id) { 
				let receita_antiga = procurar(receitas, id); 
				exibe_formulario1(receita_antiga, id, receitas, monitora_editar);
} 
function monitora_editar(receitas, receita, id) {
				editar(receitas, id, receita); 							  
				exibe_mensagem('Cadastro editado com sucesso');				       
				monitora_lista(receitas);
	} 
function procurar(receitas, id) { 
				return receitas[id];
} 
function editar(receitas, id, receita) { 
				receitas[id] = receita;
} 
function monitora_exclusao(receitas) { 
				exibe_lista(receitas); 
				let id = parseInt(prompt('Digite o ID para ser excluído: ')); 
				monitora_apagar(receitas, id);
} 
function monitora_apagar(receitas, id) { 
				if (confirm('Tem certeza que quer excluir o ' + id + '?')) { 
				excluir(receitas, id); 
monitora_lista(receitas); 
			 }
} 
function excluir(receitas, id) { 
				receitas.splice(id, 1);
}
function armazenar(receitas, receita) { 
				receitas.push(receita);
				}
function monitora_armazenamento(receitas, receita) {
				armazenar(receitas, receita); 								
				exibe_mensagem('Cadastrado com sucesso');
				monitora_lista(receitas);
}
function monitora_cadastro(receitas) { 
				exibe_formulario(null, null, receitas, monitora_armazenamento);
} 
function exibe_mensagem(mensagem) { 
				alert(mensagem);
} 
function exibe_formulario(receita_antiga, id, receitas, callback) { 
				let nome = prompt('Digite o nome da receita[ ' + receita_antiga?.nome + ']: ')
				let ingrediente = prompt('Digite os ingredientes da receita[ ' + receita_antiga?.ingrediente + ']: ')
				let preparo = prompt('Digite o modo de preparo da receita[ ' + ']: ')
				let tempo = prompt('Digite o tempo para fazer a receita[ ' + receita_antiga?.tempo + ']: ')
				let receita = { 
								'nome': nome,
								'ingrediente': ingrediente,
								'preparo': preparo,
								tempo : tempo
				}; 
				callback(receitas, receita, id); 
} 
function monitora_lista(receitas) { 
				exibe_html(receitas);
}
function exibe_lista(receitas) 
{ 
				let texto = 'Id \t Receita \t Ingredientes \t Modo de Preparo \t tempo'; 
				for (let id in receitas) { 
								let receita = receitas[id]; 
								texto += '\n' + id + '\t\t' + receita.nome + '\t\t' + receita.ingrediente + '\t\t' + receita.preparo  + 't\t' + receita['tempo']; 
								} 
				alert(texto);
} 
function monitora_saida() { 
				exibe_mensagem('Você saiu');
} 
function receber_formulario(receitas) { 
				let tx_id = document.getElementById('id'); 				let id = tx_id.value; 
				let tx_nome = document.getElementById('nome'); 
				let nome = tx_nome.value; 
				let tx_preparo = document.getElementById('preparo'); 
				let preparo = tx_preparo.value; 
				let tx_tempo = document.getElementById('tempo'); 
				let tempo = tx_tempo.value; 
				let tx_ingrediente = document.getElementById('ingrediente'); 
				let ingrediente = tx_ingrediente.value; 
				let receita = { nome: nome, preparo: preparo, tempo: tempo, ingrediente: ingrediente}; 
				if (id == ''){ 
				monitora_armazenamento(receitas, receita);
} 
				else { monitora_editar(receitas, receita, id);
} 
				tx_nome.value = ''; 
				tx_preparo.value = ''; 
				tx_tempo.value = ''; 
				tx_ingrediente.value = '';
				tx_id.value = ''; 
}function exibe_html(receitas) { 
				let tbody = document.querySelector('tbody'); 
				tbody.innerHTML = ''; 
				for (let id in receitas) { 
								let receita = receitas[id]; 
								let linha = document.createElement('tr'); 
								let coluna1 = document.createElement('td'); 
								let coluna2 = document.createElement('td'); 
								let coluna3 = document.createElement('td'); 
								let coluna4 = document.createElement('td'); 
								let id_coluna = document.createElement('td'); 
								let acoes = document.createElement('td'); 
								let botao_editar = document.createElement('button'); 
								let botao_apagar = document.createElement('button'); linha.append(id_coluna, coluna1, coluna2, coluna3, coluna4, acoes); 
								acoes.append(botao_apagar, botao_editar); 
								botao_apagar.textContent = 'Apagar'; 								botao_editar.textContent = 'Editar'; 								botao_editar.onclick = function () { 
												let escolhida = document.querySelectorAll('.escolhida'); 
												escolhida.forEach(function(linha) { 
																								   			linha.classList.remove('escolhida'); 
}); 
linha.classList.add('escolhida'); 
monitora_formulario_edicao(receitas, id); 
} 
								botao_apagar.onclick = function () { 
								monitora_apagar(receitas, id); 
} 
								id_coluna.textContent = parseInt(id)+1; 						coluna1.textContent = receita.nome; 				 				coluna2.textContent = receita.ingrediente; 
								coluna3.textContent = receita.preparo;  		
								coluna4.textContent = receita.tempo;  								
															tbody.append(linha); 
}
}
function exibe_formulario1(receita_antiga, id, receitas, callback) { 
				document.getElementById('nome').value = receita_antiga.nome; 								 
																						 				 						 				 									document.getElementById('ingrediente').value = receita_antiga.ingrediente; 				
				document.getElementById('preparo').value = receita_antiga.preparo; 			
				document.getElementById('tempo').value = receita_antiga.tempo; 				
				document.getElementById('id').value = id;
}
