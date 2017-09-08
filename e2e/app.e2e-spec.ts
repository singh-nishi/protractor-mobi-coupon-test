import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('autotestmobi App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.driver.manage().window().maximize();
  });

  it('should display Page Title', () => {
    page.navigateToindex();
    expect(page.gettitle()).toEqual('FusionMobi');
  });

  // it('should display PageSale Load', () => {
  //   expect(page.getPageSaleLoad()).toBe(false);
  // });

  // it('should display test', () => {
  //   // expect(page.getAmount()).toBe(1500,1000);
  //   expect(page.getAmount()).toBe(true);

  // });

  it('should display Login',() =>{
    // page.navigateToindex();
    expect(page.getloginauth()).toBe(true);
  });

  it('should Check', () => {
    page.navigateToinside();
    expect(page.clickPointofSale()).toEqual('579.00');
    // expect(page.clickPointofSale()).toEqual('533.00');
  });

  // it('should Finish', () => {
  //   page.navigateToinside();
  //   expect(page. clickPointofSaleFinish()).toEqual(true);
  // });


});
