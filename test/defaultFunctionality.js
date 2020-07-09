const selectorCnt = require ('../data/selectors.json').counter;
const expectedDCF = require ('../data/expected.json').defaultFunctionality;
const inputNumber = require ('./../helpers/inputNumber');
describe('Default counter functionality', function () {
    it('TC-040 Subtract 1 gives -1', function () {
        browser.url('https://likejean.github.io/homework-5/');
        const button = $$(selectorCnt.blkBtn)[0];
        button.click();
        const countValue = $(selectorCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF.countValueTC040);
    })
    it('TC-041 Add 3 gives 2', function () {
        const button = $$(selectorCnt.blkBtn)[5];
        button.click();
        const countValue = $(selectorCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF.countValueTC041);
    })
    it('TC-042 LLF accept 1', function () {
        inputNumber('left', expectedDCF.inputMin);
        const result = $(selectorCnt.error0).isDisplayed();
        expect(result).toEqual(false);
    })
    it('TC-043 ULF accept 9', function () {
        inputNumber('right', expectedDCF.inputMax);
        const result = $(selectorCnt.error0).isDisplayed();
        expect(result).toEqual(false);
    })
    it('TC-044 LLF = 1 and ULF = 1 gives 2 black buttons', function () {
        browser.refresh();
        inputNumber('left', expectedDCF.inputMin);
        inputNumber('right', expectedDCF.inputMin);
        const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length;
        expect(actual).toEqual(+expectedDCF.countValueTC041);
    })
    it('TC-045 UIF = 9 and LIF = 9 gives 2 black buttons ', function () {
        browser.refresh();
        inputNumber('right', expectedDCF.inputMax);
        inputNumber('left', expectedDCF.inputMax)
        const result = $$(selectorCnt.blackBtn).length;
        expect(result).toEqual(2);
    });
    it('TC-046 Reset button works ', function () {
        browser.refresh();
        const button = $$(selectorCnt.blackBtn)[5];
        button.click();
        const result = $(selectorGen.totalResult).getText();
        expect(result).toEqual(expectedDCF.totalValueTC046)
        const resButton = $(selectorCnt.resetBtn).click();
        const result1 = $(selectorGen.totalResult).getText();
        expect(result1).toEqual(expectedGen.totalResult);
    });
    it('TC-047 Delete button works ', function () {
        browser.refresh();
        const button= $(selectorCnt.deleteBtn);
        button.click();
        const result = $$(selectorCnt.counterName).length
        expect(result).toEqual(1)
    });
});
