import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LatestPage } from './latest.page';

describe('LatestPage', () => {
  let component: LatestPage;
  let fixture: ComponentFixture<LatestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LatestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
