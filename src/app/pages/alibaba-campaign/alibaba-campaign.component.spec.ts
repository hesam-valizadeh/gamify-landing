import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlibabaCampaignComponent } from './alibaba-campaign.component';

describe('AlibabaCampaignComponent', () => {
  let component: AlibabaCampaignComponent;
  let fixture: ComponentFixture<AlibabaCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlibabaCampaignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlibabaCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
