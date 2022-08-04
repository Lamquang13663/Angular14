import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Quang Lam';
  public class = 'se1409';
  constructor() { }

  ngOnInit(): void {
  }

}
