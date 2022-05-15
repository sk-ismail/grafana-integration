import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafanaFramesComponent } from './grafana-frames.component';

describe('GrafanaFramesComponent', () => {
  let component: GrafanaFramesComponent;
  let fixture: ComponentFixture<GrafanaFramesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafanaFramesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafanaFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
