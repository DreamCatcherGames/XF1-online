import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  hasTeam1: boolean = true;

  constructor(
    authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

}
