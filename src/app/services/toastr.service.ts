import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  public visible: WritableSignal<boolean> = signal(false);

  show(show: boolean) {
    this.visible.set(show);
    if (show) {
      setTimeout(() => {
        this.visible.set(false);
      }, 3000);
    }
  }
}
