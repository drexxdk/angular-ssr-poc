import { isPlatformServer } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-ssr-button[product]',
  templateUrl: './ssr-button.component.html',
  styleUrls: ['./ssr-button.component.scss']
})
export class SsrButtonComponent implements OnInit {

  @Input() product!: Product;

  loading: boolean = true;

  isServer: boolean = isPlatformServer(this.platformId);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit(): void {
  }

  showAlert(message: string): void {
    alert(message);
  }

  ngAfterViewInit(): void {
    if(!this.isServer) {
      setTimeout(() => {
        this.loading = false;
      }, this.product.delay || 0);
    }
  }
}
