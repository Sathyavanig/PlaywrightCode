const {test,expect}= require('@playwright/test');

test('@first test',async({page})=>{

const message = "Welcome to Lambda test";
await page.goto("https://www.lambdatest.com/selenium-playground/");
await page.locator("text=Simple Form Demo").click();
const url = page.url();
expect(url).toContain('simple-form-demo');
await page.locator("#user-message").first().fill(message);
await page.locator("#showInput").click();
const testMessage= await page.locator("#message").textContent();
expect(message).toEqual(testMessage);
})

test('@third test',async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.locator("text=Input Form Submit").click();
    await page.locator("[type='submit']").nth(1).click();
    await page.locator("#name").fill("Sathya");
    await page.locator("#inputEmail4").fill("Sathyavanig1609@gmail.com");
    await page.getByPlaceholder("Password").fill("Sathya");
    await page.getByPlaceholder("Company").fill("IBM");
    await page.getByPlaceholder("Website").fill("www.Lambdatest.com");
    await page.locator('select[name="country"]').selectOption('United States');
    await page.locator("#inputCity").fill("HollySprings");
    await page.locator("#inputAddress1").fill("Farlan Ct");
    await page.locator("#inputAddress2").fill("Drive Apt");
    await page.locator("#inputState").fill("North Carolina");
    await page.locator("#inputZip").fill("27530");
    await page.locator("[type='submit']").nth(1).click();
    const successMessage = await page.locator("[class='success-msg hidden']").textContent();
    console.log(successMessage);
})

test('@secondtest',async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.locator("text=Drag & Drop Sliders").click();  
    const sliderTrack = await page.locator('input[class="sp__range"]').nth(2);
    const sliderOffsetWidth = await sliderTrack.evaluate(el => {
        return el.getBoundingClientRect().width
    })

    // Using the hover method to place the mouse cursor then moving it to the right
    await sliderTrack.hover({ force: true, position: { x: 0, y: 0 } })
    await page.mouse.down()
    await sliderTrack.hover({ force: true, position: { x: sliderOffsetWidth, y: 0 } })
    await page.mouse.up();
})