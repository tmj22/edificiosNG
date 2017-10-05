import { PipeTransform, Pipe} from '@angular/core'
import { Ivivienda } from 'app/vivienda'

@Pipe({
  name: 'filtrado'
})


export class FiltradoViviendas implements PipeTransform{
transform(value:Ivivienda[], tipofiltrado: string): Ivivienda[]{
  return value.filter((vivienda:Ivivienda)=>vivienda.tipo.indexOf(tipofiltrado) !== -1)
}
}
