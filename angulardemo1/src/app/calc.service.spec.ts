import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  let service: CalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('testing add method', ()=>{
    const calc= new CalcService();
    const res = calc.add(1,2);
    expect(res).toBe(3);
  })
});
