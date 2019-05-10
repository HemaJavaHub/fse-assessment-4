import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from './productservice';
import { Product } from '../model/product';



describe('SongService', () => {
  let injector: TestBed;
  let service: ProductService;
  let httpMock: HttpTestingController;

  const fakeData = [
    new Product("dresses","gucci","red",1966),
    new Product("dresses","marni","blue",2433)
  ]

  beforeEach(() => { 
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers:[ ProductService ]
    })
    injector = getTestBed();
    service = injector.get(ProductService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  });

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });

  it('findSongsByTitle({title}) should make a GET call to /song/title/{title}',()=>{
    service.findProducts().subscribe((productResponse)=>{
      expect(productResponse).toEqual(fakeData);
    });

    const req = httpMock.expectOne('/song/title/Africa');
    expect(req.request.method).toBe("GET");
    req.flush(fakeData);

  });
});