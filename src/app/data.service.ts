import { Injectable } from '@angular/core';
import {IProfile} from "./interfaces/IProfile";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  profile: IProfile | null = null;
  $profile = new Subject<IProfile>();


  constructor() {
  }

  setProfile(profile: IProfile) {
    this.profile = profile;
    this.$profile.next(this.profile)

  }
}
