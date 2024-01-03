import { Component, OnInit, } from '@angular/core';
import { DistritosService } from './service/distritos.service';


interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  distritos: Array<{ id: number, nome: string }> = [];
  displayedColumns: string[] = ['id', 'name'];
  dataSource = this.distritos;


  constructor(private distritosService: DistritosService) { }

  ngOnInit() {
    this.distritosService.listar().subscribe(
      retornoApi => this.distritos = retornoApi
    )
  }
};
export class SelectOverviewExample {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}



// export class AppComponent {
//   title = 'tabela-api';
// }
