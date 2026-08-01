import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WindowFrameComponent } from './window-frame';


describe('WindowFrame', () => {
  let component: WindowFrameComponent;
  let fixture: ComponentFixture<WindowFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowFrameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WindowFrameComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
