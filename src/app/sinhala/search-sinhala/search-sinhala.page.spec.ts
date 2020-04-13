import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchSinhalaPage } from './search-sinhala.page';

describe('SearchSinhalaPage', () => {
  let component: SearchSinhalaPage;
  let fixture: ComponentFixture<SearchSinhalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSinhalaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchSinhalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
