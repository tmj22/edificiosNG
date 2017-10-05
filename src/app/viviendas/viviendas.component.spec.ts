/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViviendasComponent } from './viviendas.component';

describe('ViviendasComponent', () => {
  let component: ViviendasComponent;
  let fixture: ComponentFixture<ViviendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViviendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViviendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
