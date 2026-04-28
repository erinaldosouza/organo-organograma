import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingGender } from './reading-gender';

describe('ReadingGender', () => {
  let component: ReadingGender;
  let fixture: ComponentFixture<ReadingGender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingGender],
    }).compileComponents();

    fixture = TestBed.createComponent(ReadingGender);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
