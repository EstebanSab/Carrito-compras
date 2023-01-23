import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() nombreProducto='';
  @Input() precioProducto='';
  @Input() calidadProducto=0;
}
