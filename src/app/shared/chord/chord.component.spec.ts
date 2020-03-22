import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChordComponent } from './chord.component';

describe('ChordComponent', () => {
  let component: ChordComponent;
  let fixture: ComponentFixture<ChordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
