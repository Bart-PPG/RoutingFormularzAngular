import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiagComponent } from './ciag.component';

describe('CiagComponent', () => {
  let component: CiagComponent;
  let fixture: ComponentFixture<CiagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
