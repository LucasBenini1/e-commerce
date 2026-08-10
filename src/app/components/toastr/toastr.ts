import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ToastrService } from '../../services/toastr-service';

@Component({
  selector: 'app-toastr',
  imports: [],
  templateUrl: './toastr.html',
  styleUrl: './toastr.scss',
})
export class Toastr {
  public toastrService = inject(ToastrService);
  public visible: WritableSignal<boolean> = this.toastrService.visible;

  classHandler(){
    if(this.visible()) return 'toastr-container success';
    return;
  }
}
