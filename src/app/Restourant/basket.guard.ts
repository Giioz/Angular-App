import { CanActivateFn } from '@angular/router';
import { BasketOpenerService } from './basket-opener.service';
import { map, take } from 'rxjs';
import { inject } from '@angular/core';

export const basketGuard: CanActivateFn = (route, state) => {
  const basketService = inject(BasketOpenerService)

  return basketService.subject.pipe(
    take(1),
    map(data => {
      const lengthh = data;
      return true;
    })
  );
};
