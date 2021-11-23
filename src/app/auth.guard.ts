import { Request } from './shared/interfaces/request';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService:AuthService ,
    private router:Router
  ){

  }

  canActivate(): boolean  {
    this.authService.getProfile().subscribe((res:any)=>{
      if(res.status === 200){
        if(res.data.role !== 'A' && this.router.url === '/admin'){
          this.router.navigate(['home/dashbord'])
          return false
        }
        return true
      }
      this.router.navigate(['login'])
      return false
    })
    return true;
  }
}
