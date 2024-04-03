import {Model, model, property} from '@loopback/repository';

@model()
export class FactorDeAuntenticacionPorCodigo extends Model {
  @property({
    type: 'string',
    required: true,
  })
  usuarioId: string;

  @property({
    type: 'string',
    required: true,
  })
  codigo2fa: string;


  constructor(data?: Partial<FactorDeAuntenticacionPorCodigo>) {
    super(data);
  }
}

export interface FactorDeAuntenticacionPorCodigoRelations {
  // describe navigational properties here
}

export type FactorDeAuntenticacionPorCodigoWithRelations = FactorDeAuntenticacionPorCodigo & FactorDeAuntenticacionPorCodigoRelations;
