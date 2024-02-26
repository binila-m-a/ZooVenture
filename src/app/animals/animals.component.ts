import { Component, OnInit } from '@angular/core';
import { ZooServiceService } from '../services/zoo-service.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent  implements OnInit {
  animalData: any[] = [];

constructor(private zooService: ZooServiceService) { }

ngOnInit(): void {
  this.getAnimalsData();
}

getAnimalsData(): void {
  this.zooService.getAnimalsData().subscribe(data => {
    this.animalData = data;
  });
}
}
