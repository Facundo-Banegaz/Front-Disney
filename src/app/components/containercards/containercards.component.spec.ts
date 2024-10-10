import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainercardsComponent } from './containercards.component';

describe('ContainercardsComponent', () => {
  let component: ContainercardsComponent;
  let fixture: ComponentFixture<ContainercardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainercardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainercardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
