import Page from './page'

class venueSearchResultsPage extends Page {

  open () {
    super.open('/place/elemis-west-end/#t=50&serviceIds=TR2180999,TR1641576,TR2362717');
  }

  waitForPageToLoad () {
    browser.element("//h1[contains(text(), 'ELEMIS - West End')]").waitForVisible();
  }

  services(serviceName) { 
    return browser.element("//h5[contains(text(), '" + serviceName + "')]"); 
  }

  section(sectionName) { 
    return "//h2[contains(text(), '" + sectionName + "')]/parent::div/following-sibling::div"; 
  }

  serviceSelected(serviceName) { 
    return "//*[contains(text(), '" + serviceName + "')]/parent::div/parent::div//div[contains(@class, 'MenuItem--icon-added')]"; 
  }

  selectService (serviceName) {
    this.services(serviceName).click();
  }

  serviceSelectedPath (sectionName, serviceName) {
    return this.section(sectionName) + this.serviceSelected(serviceName);
  }

}

export default new venueSearchResultsPage()