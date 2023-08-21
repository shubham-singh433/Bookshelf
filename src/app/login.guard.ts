import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './service/user.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const user = inject(UserService);

    const router = inject(Router);
     let isuser = user.getUsername();
      //  window.confirm(isuser);
     if (isuser) {
       return false;
     } else {
      //  router.navigate(['/home/books-list']);
       return true;
     }
 
};
