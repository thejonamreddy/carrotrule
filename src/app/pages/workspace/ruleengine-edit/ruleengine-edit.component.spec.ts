import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleengineEditComponent } from './ruleengine-edit.component';

describe('RuleengineEditComponent', () => {
  let component: RuleengineEditComponent;
  let fixture: ComponentFixture<RuleengineEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleengineEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleengineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
