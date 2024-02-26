// dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { ZooServiceService } from '../services/zoo-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  columnSortingIndicators: { [key: string]: string } = {};
  animalData: any[] = [];
  filteredAnimalData: any[] = [];
  sortedColumn: string = '';
  sortOrder: string = 'asc';
  searchKeyword: string = '';
  private slNoCounter: number = 1;

  constructor(private zooService: ZooServiceService) { }
  
  ngOnInit(): void {
    this.getAnimalsData();
  }

  getAnimalsData(): void {
    this.resetSlNo();
    this.zooService.GetDashBoarddata().subscribe(data => {
      this.animalData = data;
  
      this.animalData.forEach(animal => {
        animal.slNo = this.slNoCounter++;
      });
  
      this.filteredAnimalData = [...this.animalData];
      
    });
  }
  

  sortTable(column: string): void {
   
    this.filteredAnimalData.sort((a, b) => {
      const order = this.sortOrder === 'asc' ? 1 : -1;
      const comparison = a[column] > b[column] ? 1 : -1;
      return comparison * order;
    });

    this.resetSlNo();

    this.updateSortingIndicators();
  }

  searchTable(): void {
    this.filteredAnimalData = this.animalData.filter(animal =>
      Object.values(animal).some((value: unknown) =>
        (String(value) as string).toLowerCase().includes(this.searchKeyword.toLowerCase())
      )
    );

    this.resetSlNo();
  }

  resetSlNo(): void {
    this.slNoCounter = 1;
    this.filteredAnimalData.forEach(animal => {
      animal.slNo = this.slNoCounter++;
    });
  }

  updateSortingIndicators(): void {
    this.columnSortingIndicators = {};
  
    this.columnSortingIndicators[this.sortedColumn] = this.sortOrder;
  }

  clearSearch(): void {
    this.searchKeyword = '';
    
    this.resetSlNo();
  }
}
