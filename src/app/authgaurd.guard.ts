import { CanActivateFn,Router } from '@angular/router';
import { UserService } from './service/user.service';
import {inject} from '@angular/core'


export const authgaurdGuard: CanActivateFn = (route, state) => {
const user = inject(UserService);
const router = inject(Router);
// console.log("HELLOIAM GAURD",user.getUsername())
let isuser = user.getUsername();
if(isuser)
{
  return true;
}
else{
  router.navigate(['/login']);
  return false;
}

};
