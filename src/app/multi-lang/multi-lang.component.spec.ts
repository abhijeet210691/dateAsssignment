import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLangComponent } from './multi-lang.component';

describe('MultiLangComponent', () => {
  let component: MultiLangComponent;
  let fixture: ComponentFixture<MultiLangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiLangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
