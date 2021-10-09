import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesandfieldsComponent } from './rolesandfields.component';

describe('RolesandfieldsComponent', () => {
  let component: RolesandfieldsComponent;
  let fixture: ComponentFixture<RolesandfieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesandfieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesandfieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
