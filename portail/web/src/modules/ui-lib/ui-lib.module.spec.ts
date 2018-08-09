import { UiLibModule } from './ui-lib.module';

describe('UiLibModule', () => {
  let uiLibModule: UiLibModule;

  beforeEach(() => {
    uiLibModule = new UiLibModule();
  });

  it('should create an instance', () => {
    expect(uiLibModule).toBeTruthy();
  });
});
