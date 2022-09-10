import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDirectoryComponent } from './book-directory.component';

describe('BookDirectoryComponent', () => {
  let component: BookDirectoryComponent;
  let fixture: ComponentFixture<BookDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
