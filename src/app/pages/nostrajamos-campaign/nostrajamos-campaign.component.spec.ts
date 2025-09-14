import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NostrajamosCampaignComponent } from './nostrajamos-campaign.component';

describe('NostrajamosCampaignComponent', () => {
  let component: NostrajamosCampaignComponent;
  let fixture: ComponentFixture<NostrajamosCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NostrajamosCampaignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NostrajamosCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
