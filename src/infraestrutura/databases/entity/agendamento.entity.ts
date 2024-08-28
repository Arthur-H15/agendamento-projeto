import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { ProcedimentoEntity } from './procedimento.entity';



@Entity()
export class AgendamentoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: Date;

  @Column()
  status: string;

  @Column()
  descricao: string;
  @Column()
  idUsuario: number;
  
  // @ManyToOne(() => Clientes, (clientes) => clientes.condominios, {
  //   onDelete: "NO ACTION",
  //   onUpdate: "NO ACTION",
  // })
  // @JoinColumn([{ name: "id_cliente", referencedColumnName: "id" }])
  // idCliente2: Clientes;

  @ManyToOne(() => UsuarioEntity,(usuarioEntity)=>usuarioEntity.agendamentos)
  @JoinColumn([{ name: "id_usuario", referencedColumnName: "id" }])
  idUsuario2: number;

  // @ManyToOne(() => ProcedimentoEntity)
  // @JoinColumn({ name: 'idProcedimento' })
  // procedimento: ProcedimentoEntity;
}
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ConsumoObjetivoHora } from "./ConsumoObjetivoHora";
import { Fechamentos } from "./Fechamentos";
import { GrupoEnvioAlertas } from "./GrupoEnvioAlertas";
import { HistoricoAlarmes } from "./HistoricoAlarmes";
import { HistoricoEstouroDeConsumo } from "./HistoricoEstouroDeConsumo";
import { Leituras } from "./Leituras";
import { UnidadesMedida } from "./UnidadesMedida";
import { Imoveis } from "./Imoveis";
import { Modems } from "./Modems";
import { TiposMedidor } from "./TiposMedidor";
import { Telas } from "./Telas";
import { MedidoresTela } from "./MedidoresTela";


@Index("serial_hidrometro_UNIQUE", ["serialMedidor"], { unique: true })
@Index("serial_radio_UNIQUE", ["serialRadio"], { unique: true })
@Index("fk_medidor_especificacao_medidor_tipo1_idx", ["idTipoMedidor"], {})
@Index("valencia_INDEX", ["valencia"], {})
@Index(
  "fk_especificacoes_medidores_unidades_medida1_idx",
  ["idUnidadeMedida"],
  {}
)
@Index("fk_medidores_apartamentos1_idx", ["idImovel"], {})
@Index("serial_INDEX", ["serialMedidor"], {})
@Index("fk_medidores_modems1_idx", ["idModem"], {})
@Index("serial_radio_INDEX", ["serialRadio"], {})
@Entity("medidores", { schema: "mindi" })
// export class Medidores {
//   @PrimaryGeneratedColumn({ type: "int", name: "id" })
//   id: number;

//   @Column("int", { name: "id_tipo_medidor" })
//   idTipoMedidor: number;

//   @Column("int", { name: "id_unidade_medida" })
//   idUnidadeMedida: number;

//   @Column("int", { name: "id_imovel" })
//   idImovel: number;

//   @Column("int", { name: "id_modem", nullable: true })
//   idModem: number | null;

//   @Column("varchar", { name: "serial_radio", unique: true, length: 30 })
//   serialRadio: string;

//   @Column("varchar", { name: "serial_medidor", unique: true, length: 30 })
//   serialMedidor: string;

//   @Column("int", { name: "numero_ponto_servico", nullable: true })
//   numeroPontoServico: number | null;

//   @Column("varchar", { name: "tipo_ponto_servico", nullable: true, length: 1 })
//   tipoPontoServico: string | null;

//   @Column("decimal", {
//     name: "valencia",
//     precision: 7,
//     scale: 3,
//     default: () => "'0.001'",
//   })
//   valencia: string;

//   @Column("decimal", {
//     name: "leitura",
//     nullable: true,
//     precision: 13,
//     scale: 3,
//     default: () => "'0.000'",
//   })
//   leitura: string | null;

//   @Column("decimal", {
//     name: "volume_mca",
//     nullable: true,
//     precision: 5,
//     scale: 2,
//     default: () => "'0.00'",
//   })
//   volumeMca: string | null;

//   @Column("decimal", {
//     name: "reservatorio_nivel_maximo",
//     nullable: true,
//     precision: 5,
//     scale: 2,
//     default: () => "'0.00'",
//   })
//   reservatorioNivelMaximo: string | null;

//   @Column("decimal", {
//     name: "reservatorio_nivel_minimo",
//     nullable: true,
//     precision: 5,
//     scale: 2,
//     default: () => "'0.00'",
//   })
//   reservatorioNivelMinimo: string | null;

//   @Column("decimal", {
//     name: "entrada_an0",
//     nullable: true,
//     precision: 5,
//     scale: 2,
//     default: () => "'0.00'",
//   })
//   entradaAn0: string | null;

//   @Column("decimal", {
//     name: "fator_conversao",
//     nullable: true,
//     precision: 6,
//     scale: 3,
//     default: () => "'1.000'",
//   })
//   fatorConversao: string | null;

//   @Column("decimal", {
//     name: "valor_an0_4ma",
//     nullable: true,
//     precision: 10,
//     scale: 3,
//     default: () => "'0.000'",
//   })
//   valorAn0_4ma: string | null;

//   @Column("decimal", {
//     name: "valor_an0_20ma",
//     nullable: true,
//     precision: 10,
//     scale: 3,
//     default: () => "'0.000'",
//   })
//   valorAn0_20ma: string | null;

//   @Column("decimal", {
//     name: "valor_an0_calculado",
//     nullable: true,
//     precision: 5,
//     scale: 2,
//     default: () => "'0.00'",
//   })
//   valorAn0Calculado: string | null;

//   @Column("int", { name: "bateria", nullable: true })
//   bateria: number | null;

//   @Column("datetime", { name: "data_hora_leitura", nullable: true })
//   dataHoraLeitura: Date | null;

//   @Column("int", { name: "meta_consumo_diario", nullable: true })
//   metaConsumoDiario: number | null;

//   @Column("int", { name: "meta_consumo", nullable: true })
//   metaConsumo: number | null;

//   @Column("int", { name: "dia_referencia_meta", nullable: true })
//   diaReferenciaMeta: number | null;

//   @Column("tinyint", { name: "alarme_proprio", width: 1, default: () => "'0'" })
//   alarmeProprio: boolean;

//   @Column("int", { name: "parametro_horas_sem_consumo", default: () => "'72'" })
//   parametroHorasSemConsumo: number;

//   @Column("tinyint", {
//     name: "alarme_vazamento",
//     width: 1,
//     default: () => "'0'",
//   })
//   alarmeVazamento: boolean;

//   @Column("tinyint", {
//     name: "alarme_vazamento_ativado",
//     nullable: true,
//     width: 1,
//     default: () => "'1'",
//   })
//   alarmeVazamentoAtivado: boolean | null;

//   @Column("tinyint", {
//     name: "alarme_vazamento_historico",
//     width: 1,
//     default: () => "'0'",
//   })
//   alarmeVazamentoHistorico: boolean;

//   @Column("tinyint", {
//     name: "alarme_vazamento_historico_ativado",
//     nullable: true,
//     width: 1,
//     default: () => "'1'",
//   })
//   alarmeVazamentoHistoricoAtivado: boolean | null;

//   @Column("tinyint", {
//     name: "alarme_medidor_parado",
//     width: 1,
//     default: () => "'0'",
//   })
//   alarmeMedidorParado: boolean;

//   @Column("tinyint", {
//     name: "alarme_medidor_parado_ativado",
//     nullable: true,
//     width: 1,
//     default: () => "'1'",
//   })
//   alarmeMedidorParadoAtivado: boolean | null;

//   @Column("tinyint", {
//     name: "alarme_fraude_mecanica",
//     width: 1,
//     default: () => "'0'",
//   })
//   alarmeFraudeMecanica: boolean;

//   @Column("tinyint", {
//     name: "alarme_fraude_mecanica_ativado",
//     nullable: true,
//     width: 1,
//     default: () => "'1'",
//   })
//   alarmeFraudeMecanicaAtivado: boolean | null;

//   @Column("tinyint", {
//     name: "alarme_fraude_mecanica_historico",
//     width: 1,
//     default: () => "'0'",
//   })
//   alarmeFraudeMecanicaHistorico: boolean;

//   @Column("tinyint", {
//     name: "alarme_fraude_mecanica_historico_ativado",
//     nullable: true,
//     width: 1,
//     default: () => "'1'",
//   })
//   alarmeFraudeMecanicaHistoricoAtivado: boolean | null;

//   @Column("tinyint", {
//     name: "alarme_fluxo_reverso",
//     width: 1,
//     default: () => "'0'",
//   })
//   alarmeFluxoReverso: boolean;

//   @Column("tinyint", {
//     name: "alarme_fluxo_reverso_ativado",
//     nullable: true,
//     width: 1,
//     default: () => "'1'",
//   })
//   alarmeFluxoReversoAtivado: boolean | null;

//   @Column("tinyint", {
//     name: "recebe_email_alarme",
//     nullable: true,
//     width: 1,
//     default: () => "'1'",
//   })
//   recebeEmailAlarme: boolean | null;

//   @Column("datetime", { name: "data_ultimo_email_alarme", nullable: true })
//   dataUltimoEmailAlarme: Date | null;

//   @Column("datetime", { name: "data_hora_criacao" })
//   dataHoraCriacao: Date;

//   @Column("datetime", { name: "data_hora_atualizacao" })
//   dataHoraAtualizacao: Date;

//   @Column("tinyint", { name: "excluido", width: 1, default: () => "'0'" })
//   excluido: boolean;

//   @Column("tinyint", {
//     name: "alarme_reservatorio_extravazamento",
//     nullable: true,
//     width: 1,
//     default: () => "'0'",
//   })
//   alarmeReservatorioExtravazamento: boolean | null;

//   @Column("tinyint", {
//     name: "alarme_reservatorio_extravazamento_ativado",
//     width: 1,
//     default: () => "'1'",
//   })
//   alarmeReservatorioExtravazamentoAtivado: boolean;

//   @Column("tinyint", {
//     name: "alarme_reservatorio_nivel_minimo",
//     nullable: true,
//     width: 1,
//     default: () => "'0'",
//   })
//   alarmeReservatorioNivelMinimo: boolean | null;

//   @Column("tinyint", {
//     name: "alarme_reservatorio_nivel_minimo_ativado",
//     width: 1,
//     default: () => "'1'",
//   })
//   alarmeReservatorioNivelMinimoAtivado: boolean;

//   @Column("decimal", {
//     name: "coluna_seca",
//     nullable: true,
//     precision: 5,
//     scale: 2,
//     default: () => "'0.00'",
//   })
//   colunaSeca: string | null;

//   @Column("decimal", {
//     name: "leitura_calibracao",
//     precision: 13,
//     scale: 3,
//     default: () => "'0.000'",
//   })
//   leituraCalibracao: string;

//   @Column("int", { name: "an1_calibracao", nullable: true })
//   an1Calibracao: number | null;

//   @Column("datetime", { name: "data_hora_calibracao", nullable: true })
//   dataHoraCalibracao: Date | null;

//   @Column("datetime", { name: "data_hora_confirmacao", nullable: true })
//   dataHoraConfirmacao: Date | null;

//   @Column("tinyint", {
//     name: "alarme_sensor_de_chuva",
//     width: 1,
//     default: () => "'0'",
//   })
//   alarmeSensorDeChuva: boolean;

//   @Column("tinyint", {
//     name: "alarme_sensor_de_chuva_ativado",
//     width: 1,
//     default: () => "'1'",
//   })
//   alarmeSensorDeChuvaAtivado: boolean;

//   @Column("varchar", { name: "comando_valvula", nullable: true, length: 45 })
//   comandoValvula: string | null;

//   @Column("datetime", { name: "comando_valvula_criacao", nullable: true })
//   comandoValvulaCriacao: Date | null;

//   @Column("datetime", { name: "comando_valvula_confirmacao", nullable: true })
//   comandoValvulaConfirmacao: Date | null;

//   @Column("int", { name: "comando_tipo_intervalo", nullable: true })
//   comandoTipoIntervalo: number | null;

//   @Column("int", { name: "comando_valor_intervalo", nullable: true })
//   comandoValorIntervalo: number | null;

//   @Column("decimal", {
//     name: "signal_intensity",
//     nullable: true,
//     precision: 4,
//     scale: 1,
//   })
//   signalIntensity: string | null;

//   @Column("decimal", {
//     name: "battery_volt",
//     nullable: true,
//     precision: 4,
//     scale: 2,
//   })
//   batteryVolt: string | null;

//   @Column("tinyint", { name: "is_valve_close", nullable: true, width: 1 })
//   isValveClose: boolean | null;

//   @Column("tinyint", {
//     name: "is_remote_close_valve",
//     nullable: true,
//     width: 1,
//   })
//   isRemoteCloseValve: boolean | null;

//   @Column("tinyint", { name: "is_battery_bad", nullable: true, width: 1 })
//   isBatteryBad: boolean | null;

//   @Column("tinyint", {
//     name: "is_magnetic_disturbance",
//     nullable: true,
//     width: 1,
//   })
//   isMagneticDisturbance: boolean | null;

//   @Column("tinyint", { name: "is_reveal_gas", nullable: true, width: 1 })
//   isRevealGas: boolean | null;

//   @Column("tinyint", { name: "is_flow_exception", nullable: true, width: 1 })
//   isFlowException: boolean | null;

//   @Column("tinyint", { name: "is_tilt", nullable: true, width: 1 })
//   isTilt: boolean | null;

//   @Column("tinyint", { name: "disassemble", nullable: true, width: 1 })
//   disassemble: boolean | null;

//   @Column("tinyint", { name: "pulse_break", nullable: true, width: 1 })
//   pulseBreak: boolean | null;

//   @Column("tinyint", { name: "is_communicate_bad", nullable: true, width: 1 })
//   isCommunicateBad: boolean | null;

//   @Column("decimal", {
//     name: "nivel_minimo_emergencia",
//     nullable: true,
//     precision: 5,
//     scale: 2,
//   })
//   nivelMinimoEmergencia: string | null;

//   @Column("tinyint", { name: "manutencao", width: 1, default: () => "'0'" })
//   manutencao: boolean;

//   @Column("tinyint", {
//     name: "alarme_estouro_consumo_hora_ativado",
//     width: 1,
//     default: () => "'0'",
//   })
//   alarmeEstouroConsumoHoraAtivado: boolean;

//   @Column("tinyint", {
//     name: "alarme_consumo_minimo_hora_ativado",
//     width: 1,
//     default: () => "'0'",
//   })
//   alarmeConsumoMinimoHoraAtivado: boolean;

//   @Column("tinyint", {
//     name: "alarme_estouro_consumo",
//     width: 1,
//     default: () => "'0'",
//   })
//   alarmeEstouroConsumo: boolean;

//   @Column("tinyint", {
//     name: "alarme_estouro_consumo_ativado",
//     width: 1,
//     default: () => "'1'",
//   })
//   alarmeEstouroConsumoAtivado: boolean;

//   @Column("tinyint", {
//     name: "alarme_estouro_consumo_mensal",
//     width: 1,
//     default: () => "'0'",
//   })
//   alarmeEstouroConsumoMensal: boolean;

//   @Column("tinyint", {
//     name: "alarme_estouro_consumo_mensal_ativado",
//     width: 1,
//     default: () => "'0'",
//   })
//   alarmeEstouroConsumoMensalAtivado: boolean;

//   @Column("varchar", { name: "versao_radio", nullable: true, length: 15 })
//   versaoRadio: string | null;

//   @Column("varchar", { name: "codigo_instalacao", nullable: true, length: 45 })
//   codigoInstalacao: string | null;

//   @Column("varchar", { name: "barcode", nullable: true, length: 15 })
//   barcode: string | null;

//   @Column("smallint", { name: "lorawan_port", nullable: true, unsigned: true })
//   lorawanPort: number | null;

//   @Column("smallint", {
//     name: "serial_mensagem",
//     nullable: true,
//     unsigned: true,
//   })
//   serialMensagem: number | null;

//   @Column("decimal", {
//     name: "versao_ns",
//     nullable: true,
//     precision: 4,
//     scale: 2,
//   })
//   versaoNs: string | null;

//   @OneToMany(
//     () => ConsumoObjetivoHora,
//     (consumoObjetivoHora) => consumoObjetivoHora.idMedidor2
//   )
//   consumoObjetivoHoras: ConsumoObjetivoHora[];

//   @OneToMany(() => Fechamentos, (fechamentos) => fechamentos.idMedidor2)
//   fechamentos: Fechamentos[];

//   @OneToMany(
//     () => GrupoEnvioAlertas,
//     (grupoEnvioAlertas) => grupoEnvioAlertas.idMedidor2
//   )
//   grupoEnvioAlertas: GrupoEnvioAlertas[];

//   @OneToMany(
//     () => HistoricoAlarmes,
//     (historicoAlarmes) => historicoAlarmes.idMedidor2
//   )
//   historicoAlarmes: HistoricoAlarmes[];

//   @OneToMany(
//     () => HistoricoEstouroDeConsumo,
//     (historicoEstouroDeConsumo) => historicoEstouroDeConsumo.idMedidor2
//   )
//   historicoEstouroDeConsumos: HistoricoEstouroDeConsumo[];

//   @OneToMany(() => Leituras, (leituras) => leituras.idMedidor2)
//   leituras: Leituras[];

//   @ManyToOne(
//     () => UnidadesMedida,
//     (unidadesMedida) => unidadesMedida.medidores,
//     { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
//   )
//   @JoinColumn([{ name: "id_unidade_medida", referencedColumnName: "id" }])
//   idUnidadeMedida2: UnidadesMedida;

//   @ManyToOne(() => Imoveis, (imoveis) => imoveis.medidores, {
//     onDelete: "NO ACTION",
//     onUpdate: "NO ACTION",
//   })
//   @JoinColumn([{ name: "id_imovel", referencedColumnName: "id" }])
//   idImovel2: Imoveis;

//   @ManyToOne(() => Modems, (modems) => modems.medidores, {
//     onDelete: "NO ACTION",
//     onUpdate: "NO ACTION",
//   })
//   @JoinColumn([{ name: "id_modem", referencedColumnName: "id" }])
//   idModem2: Modems;

//   @ManyToOne(() => TiposMedidor, (tiposMedidor) => tiposMedidor.medidores, {
//     onDelete: "NO ACTION",
//     onUpdate: "NO ACTION",
//   })
//   @JoinColumn([{ name: "id_tipo_medidor", referencedColumnName: "id" }])
//   idTipoMedidor2: TiposMedidor;

//   @ManyToMany(() => Telas, (telas) => telas.medidores)
//   @JoinTable({
//     name: "medidores_tela",
//     joinColumns: [{ name: "id_medidor", referencedColumnName: "id" }],
//     inverseJoinColumns: [{ name: "id_tela", referencedColumnName: "id" }],
//     schema: "mindi",
//   })
//   telas: Telas[];
//   @OneToMany(() => MedidoresTela, (medidoresTela) => medidoresTela.idMedidor2)
//   medidoresTelas: MedidoresTela[];
// }
