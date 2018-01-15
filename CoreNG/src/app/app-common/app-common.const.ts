import { Injectable } from '@angular/core'

//declare var BASE_ADDRESS: string;

@Injectable()
export class AppCommonConst {

  private BASE_ADDRESS: string = "http://localhost:41588/api"

  // General properties

  // Token management
  get TOKEN_URL(): string { return this.BASE_ADDRESS + '/token' };

  get VALUES_URL(): string { return this.BASE_ADDRESS + '/values' };

  //User controller
  get USER(): string { return this.BASE_ADDRESS + '/user' };

  //Profile controller
  get PROFILE(): string { return this.BASE_ADDRESS + '/profile' };

  

  // Language controller
  get LANGUAGE(): string { return this.BASE_ADDRESS + '/language' };


  get BASE(): string {
    return this.BASE_ADDRESS;
  }

}
