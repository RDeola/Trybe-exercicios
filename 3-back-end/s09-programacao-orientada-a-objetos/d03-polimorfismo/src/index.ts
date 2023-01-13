import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const trybeClube = new Clube();
const quadraFutebol = new QuadraFutebol();
const quadraTenis = new QuadraTenis();

trybeClube.adicionarQuadra(quadraFutebol);
trybeClube.adicionarQuadra(quadraTenis);

// data que queremos reservar, aqui você pode colocar qualquer data obedecendo ano-mes-dia
const dataReserva = new Date('2022-12-28');

const reservarQuadraFutebol = trybeClube
    .buscarQuadra<QuadraFutebol>(0) // buscando a quadra de futebol a posição 0, já que ela foi a primeira a ser adicionada no array de quadras do clube
    .reservar(dataReserva); // o método reservar é da Classe QuadraFutebol, e passamos a data que queremos reservar
console.log(reservarQuadraFutebol);
console.log(trybeClube);
