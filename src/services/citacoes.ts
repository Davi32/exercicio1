import { Citacao } from "../dados/citacao.interface";

export class CitacoesService{

	private citacoesFavoritas: Citacao[] = [];

	adicionarCitacaoFavorita(citacao: Citacao){
		this.citacoesFavoritas.push(citacao);
	}

	removerCitacaoFavorita(citacao: Citacao){
		const position = this.citacoesFavoritas.findIndex((citacaoEl) => {
			return citacaoEl.id == citacao.id;
		});

		this.citacoesFavoritas.splice(position,1);

	}

	isFavorita(citacao: Citacao){
		return this.citacoesFavoritas.find((citacaoEl: Citacao) => {
			return citacaoEl.id == citacao.id;
		});
	}

	getCitacoesFavoritas(){
		return  this.citacoesFavoritas.slice();
	}

}