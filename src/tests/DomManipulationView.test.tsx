/**
 * @jest-environment puppeteer
 */

import puppeteer from 'puppeteer';

describe('DomManipulationView Test', () => {
  jest.useFakeTimers('legacy');
  let browser: any;
  let page: any;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it('it contains the button', async () => {
    await page.goto('http://localhost:3000/extension');
    const btn = page.waitForSelector('.customBtn');
    expect(btn).toBeTruthy();
  });

  it('button contains required text', async () => {
    await page.goto('http://localhost:3000/extension');
    await page.waitForSelector('.customBtn');
    const text = await page.$eval('.customBtn', (e: any) => e.textContent);
    
    expect(text).toContain(' Budget-to-Beat: 351 €');
  });

  afterAll(() => browser.close());
});
