import { TestBed } from '@angular/core/testing';
import { Campeonato } from '../models/campeonato';
import { CampeonatoService } from './campeonato.service';
import { RestService } from './rest.service';


describe('CampeonatoService', () => {

  let fakeRestService: RestService;  
  let service: CampeonatoService;

  beforeEach(async ()=>{

    fakeRestService = jasmine.createSpyObj<RestService>('RestService',
      {
        post: new Promise((resolve, reject)=>{
          resolve(new Response());
        }),
        get: new Promise((resolve)=>{
          resolve(new Response());
        })
      }
    );

    await TestBed.configureTestingModule({
      providers:[
        {provide:RestService, useValue: fakeRestService}
      ]
    })

  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampeonatoService);
  });


});
