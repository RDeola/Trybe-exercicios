import normas from './normas/normasDeUso';
import Quadra from './Quadra';
import { ITenis } from './interfaces/ITenis';
import { IAgenda } from './interfaces/IAgenda';

export default class QuadraTenis extends Quadra {
  // busca os dados da quadra referenciada
  public tenisData: ITenis = normas.tenis;

  public reservar<ITenis>(horaReserva: Date): IAgenda<ITenis> {
    // gerando protocolo de agendamento
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data: horaReserva,
      regras: this.tenisData as unknown as ITenis,
    };
  }
}