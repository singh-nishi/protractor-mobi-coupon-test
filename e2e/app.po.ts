import { browser, by, element, ExpectedConditions,protractor } from 'protractor';

export class AppPage {
  navigateTotouch_pos() {
    //Mode of Payment
    browser.waitForAngularEnabled(false);
    return browser.get('http://localhost:62304/rl-touch-pos.html');
  }

  getAmountAfterCoponcCode() {
    element(by.id('tdGrandTotal')).sendKeys('1000');
    element(by.id('txtCoupon')).sendKeys('A00F0000');
    element(by.id('btnCoupon')).click();
    return element(by.id('divMOPAmount1')).getText();//900
  }

  getAmount() {
    // browser.driver.manage().window().setSize(1500, 1000);
    // return browser.driver.manage().window().getSize();

    // browser.getElementById("tdGrandTotal").style.display = 'block';
    // element(by.id('tdGrandTotal')).sendKeys('1000');

    return element(by.id('tdGrandTotal')).isDisplayed();
  }
  getAmountAfterCoponcCode1() {
    element(by.id('tdGrandTotal')).sendKeys('1000');
    element(by.id('txtCoupon')).sendKeys('A00F0000');
    element(by.id('btnCoupon')).click();
    return element(by.id('divMOPAmount1')).getText();//900
  }
  getPageSaleLoad() {
    return element(by.id('divHeaderTender')).isDisplayed();
  }

  navigateToindex() {
    //Mode of Payment
    browser.waitForAngularEnabled(false);
    return browser.get('http://localhost:62304/index.html');
  }

  gettitle() {
    return browser.getTitle();
  }

  getloginauth() {
    //  element(by.id('chkBoxStaySignin')).clear();
    element(by.id('inputUserName')).clear();
    element(by.id('inputPassword')).clear();
    element(by.id('inputUserName')).sendKeys('adm');
    element(by.id('inputPassword')).sendKeys('adm');
    element(by.id('btnLogin')).click();
    return browser.wait(ExpectedConditions.visibilityOf(element(by.id('menuPage'))), 5000);
  }

  check() {
    return element(by.id('caption')).getText();
  }

  navigateToinside() {
    //Mode of Payment
    browser.waitForAngularEnabled(false);
    return browser.get('http://localhost:62304/rl-inside.html');
  }

  clickPointofSale() {
    element(by.id('caption')).click();
    if (browser.wait(ExpectedConditions.visibilityOf(element(by.id('divLayoutTables'))), 10000)) {
      element(by.css('[data-fr-tablename="10"]')).click();
      if (browser.wait(ExpectedConditions.visibilityOf(element(by.id('divProductListWrapper'))), 10000)) {
        element(by.className('product-titleBox')).click();
        if (browser.wait(ExpectedConditions.visibilityOf(element(by.id('divProductListWrapper'))), 10000)) {
          element(by.css('[data-product-id="0001"]')).click();
          element(by.css('[data-product-id="0001"]')).click();
          element(by.css('[data-product-id="0003"]')).click();
          element(by.css('[data-product-id="0004"]')).click();
          browser.wait(ExpectedConditions.visibilityOf(element(by.css('[data-product-id="0005"]'))), 10000);
          element(by.css('[data-product-id="0005"]')).click();
          element(by.css('[data-product-id="0005"]')).click();
          element(by.id('liMoreOptions')).click();
          browser.wait(ExpectedConditions.visibilityOf(element(by.css('[data-value="tender"]'))), 10000);
          element(by.css('[data-value="tender"]')).isDisplayed();
          element(by.css('[data-value="tender"]')).click();
          browser.wait(ExpectedConditions.visibilityOf(element(by.id('txtCoupon'))), 80000);
          element(by.id('txtCoupon')).clear();
          element(by.id('txtCoupon')).sendKeys('A00F0000');
          // element(by.id('txtCoupon')).sendKeys('A00G0000');
          element(by.id('btnCoupon')).click();
          browser.switchTo().alert().accept();
          browser.wait(ExpectedConditions.visibilityOf(element(by.id('tdGrandTotal'))), 30000);
          return element(by.id('tdGrandTotal')).getText();
        }
      }
    }
  }
  clickPointofSaleFinish() {
    element(by.id('caption')).click();
    // element(by.css('value="Point of Sale"')).click();
    if (browser.wait(ExpectedConditions.visibilityOf(element(by.id('divLayoutTables'))), 10000)) {
      element(by.css('[data-fr-tablename="10"]')).click();
      if (browser.wait(ExpectedConditions.visibilityOf(element(by.id('divProductListWrapper'))), 10000)) {
        element(by.className('product-titleBox')).click();
        if (browser.wait(ExpectedConditions.visibilityOf(element(by.id('divProductListWrapper'))), 10000)) {
          element(by.css('[data-product-id="0001"]')).click();
          element(by.css('[data-product-id="0001"]')).click();
          element(by.css('[data-product-id="0003"]')).click();
          element(by.css('[data-product-id="0004"]')).click();
          browser.wait(ExpectedConditions.visibilityOf(element(by.css('[data-product-id="0005"]'))), 10000);
          element(by.css('[data-product-id="0005"]')).click();
          element(by.css('[data-product-id="0005"]')).click();
          element(by.id('liMoreOptions')).click();
          browser.wait(ExpectedConditions.visibilityOf(element(by.css('[data-value="tender"]'))), 10000);
          element(by.css('[data-value="tender"]')).isDisplayed();
          element(by.css('[data-value="tender"]')).click();
          browser.wait(ExpectedConditions.visibilityOf(element(by.id('txtCoupon'))), 50000).then(() => {
            element(by.id('txtCoupon')).clear();
            element(by.id('txtCoupon')).sendKeys('A00F0000');
            // element(by.id('txtCoupon')).sendKeys('A00G0000');
          });
          element(by.id('btnCoupon')).click();
          browser.switchTo().alert().accept();
          browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.id('footerTender')).element(by.css('tbody')).element(by.id('tr')).all(by.id('td')).last()), 50000);
          return element(by.id('footerTender')).element(by.css('tbody')).element(by.id('tr')).all(by.id('td')).last().getText();
          // browser.wait(ExpectedConditions.elementToBeClickable(element(by.id('btnFinish'))), 100000);
          // element(by.id('btnFinish')).isEnabled();
          // return element(by.id('btnFinish')).click();
          // if(element(by.id('btnFinish')).isEnabled()){
          //   return element(by.id('btnFinish')).click();
          //   // if (browser.wait(ExpectedConditions.visibilityOf(element(by.id('divLayoutTables'))), 80000)) {
          //   //     //browser.switchTo().alert().accept();
          //   //     return element(by.id('divLayoutTables')).isDisplayed();
          //   //   }
          // }

          // element(by.id('btnFinish')).click();
          // element(by.id('footerTender')).element(by.tagName('tbody')).element(by.tagName('tr')).all(by.tagName('td')).last().getText();
          // element(by.id('footerTender')).element(by.tagName('tbody')).element(by.tagName('tr')).all(by.tagName('td')).last().click();
          // 


        }
      }
    }
  }
}
