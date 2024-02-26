import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ZooServiceService } from './zoo-service.service';

describe('ZooServiceService', () => {
  let service: ZooServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
    });
    service = TestBed.inject(ZooServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
