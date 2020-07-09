const general = require('./../data/selectors.json').general;
const counter = require('./../data/selectors.json').counter;
const values =  require('./../data/expected.json').general;
const counterValues = require('./../data/expected.json').counter;
const { assert } = require('chai');


describe('Complex Counter App', function () { //define suite title by passing a string

    describe('Default counter', function () { //define sub-suite title by passing a string

        it('TC-001 Header is present on the page  ', function () { //define test title by passing a string
            browser.url('https://likejean.github.io/homework-5/'); //open baseUrl
            let title = browser.getTitle(); //get page title and assign it to the "title" variable
            browser.pause(2000); //just pause to visually see that something is happening on the page
            expect(title).toEqual('Complex Counter App') //compare {title} (actual) and "Complex Counter App" (expected)
        })

    });
    describe('Elements exist', function () {

        it('TC-002 Header', function () {
            const actual = $(general.header).isDisplayed()
            expect(actual).toEqual(true);
        })

        it('TC-003 Total Result', function () {
            const header = $('h3.total-count').isDisplayed();
            expect(header).toEqual(true);
        })

        it('TC-004 Counter Name', function () {
            const header = $(general.addNameField).isDisplayed();
            expect(header).toEqual(true);
        })

        it('TC-005  Label for Add Name Field', function () {
            const actual = $$(general.addNameFieldLabel)[$$(general.addNameFieldLabel).length-2].isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-006 Default value Field', function () {
            const header = $(general.defaultValueField).isDisplayed();
            expect(header).toEqual(true);
        })

        it('TC-007 Default value Field Label', function () {
            const header = $$(general.defaultValueFieldLabel)[$$(general.defaultValueFieldLabel).length-1].isDisplayed();
            expect(header).toEqual(true);
        })

        it('TC-008 Add Counter Button', function () {
            const header = $(general.addCounterBtn).isDisplayed();
            expect(header).toEqual(true);
        });

    });

    describe('Elements value', function () {

        it('TC-009 Header = Counter', function () {
            const actual = $(general.header).getText();
            expect(actual).toEqual(values.header);
        })

        it('TC-010 Total Result = Total: 0', function () {
            const actual = $(general.totalResult).getText();
            expect(actual).toEqual(values.totalResult);
        })

        it('TC-011 Placeholder  for Add Name Field = Counter Name', function () {
            const actual = $(general.addNameField).getValue()
            expect(actual).toEqual(values.addNameField);
        })


        it('TC-012 Label for Add Name Field = Enter Counter Title:', function () {
            const actual = $$(general.addNameFieldLabel)[$$(general.addNameFieldLabel).length-2].getText();
            expect(actual).toEqual(values.addNameFieldLabel);
        })

        it('TC-013 Label for Dafault Value Field = Enter Initial Count', function () {
            const actual = $$(general.defaultValueFieldLabel)[$$(general.addNameFieldLabel).length-1].getText();
            expect(actual).toEqual(values.defaultValueFieldLabel);
        })

        it('TC-014 Default Value Field text = 50', function () {
            const actual = $(general.defaultValueField).getValue();
            expect(actual).toEqual(values.defaultValueField);
        })

        it('TC-015 Add Counter = ADD COUNTER', function () {
            const actual = $(general.addCounterBtn).getText();
            expect(actual).toEqual(values.addCounterBtn);
        });



    });


    describe('Default Counter Elements exist', function () {

        it('TC-016 Counter Name', function () {
            const actual = $$(counter.counterName)[1].isDisplayed()
            expect(actual).toEqual(true);
        })

        it('TC-017 Count Value', function () {
            const actual = $(counter.countValue).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-018 llf', function () {
            const actual = $(counter.lowerLimitField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-019  ULF', function () {
            const actual = $(counter.upperLimitField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-020, TC-021 Default Sub and Add Buttons', function () {
            const actual = $$(counter.blkBtn).filter(el => el.isDisplayed()).length;
           // const actual = $$(counter.blkBtn)
            expect(actual).toEqual(counterValues.defaultNumberBlackBtn)
        })

         it('TC-022 Delete Button', function () {
           const actual = $(counter.deleteBtn).isDisplayed();
          expect(actual).toEqual(true);
         });


        it('TC-023 Reset Button', function () {
            const actual = $(counter.resetBtn).isDisplayed();
            expect(actual).toEqual(true);
        });

        it('TC-024 Edit Name Field ', function () {
            const actual = $(counter.editNameField).isDisplayed();
            expect(actual).toEqual(true);
        });

        it('TC-025 Edit Name Field Label', function () {
            const actual = $(counter.editNameFieldLabel).isDisplayed();
            expect(actual).toEqual(true);
        });

        it('TC-026 Input for LLF', function () {
            $(counter.lowerLimitField).click()
            const actual = $(counter.lowerInputField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-027 Input for ULF', function () {
            $(counter.upperLimitField).click()
            const actual = $(counter.upperInputField).isDisplayed();
            expect(actual).toEqual(true);
        })


    });

    describe('Default Counter Elements value', function () {

        it('TC-028, Counter Name = 1. Default Counter', function () {
            const actual = $$(counter.counterName)[1].getText();
            expect(actual).toEqual(counterValues.counterName);
        })

        it('TC-029 Count Value = 0', function () {
            const actual = $(counter.countValue).getText();
            expect(actual).toEqual(counterValues.countValue);
        })


        it('TC-031, T-033 Default Btns = -1,-2,-3, 1, 2, 3', function () {
            const actual = $$(counter.blkBtn).map(el => el.getText());
            expect(actual).toEqual(counterValues.blkBtn);
        })

        it('TC-030 LLF = CHANGE STEP OPTIONS?', function () {
            browser.refresh()
            const actual = $(counter.lowerLimitField).getText();
            expect(actual).toEqual(counterValues.lowerLimitField);
        })

        it('TC-032 ULF = CHANGE STEP OPTIONS?', function () {
            const actual = $(counter.upperLimitField).getText();
            expect(actual).toEqual(counterValues.upperLimitField);
        })

        it('TC-034 Delete Button = Delete', function () {
            const actual = $(counter.deleteBtn).getText()
            expect(actual).toEqual(counterValues.deleteBtn);
        })

        it('TC-035 Reset Button = Reset', function () {
            const actual = $(counter.resetBtn).getText()
            expect(actual).toEqual(counterValues.resetBtn);
        })

        it('TC-036 Label = Edit Counter Title:', function () {
            const actual = $(counter.editNameFieldLabel).getText()
            expect(actual).toEqual(counterValues.editNameFieldLabel);
        })

        it('TC-037 Placeholder for Edit Name Field = Default Counter', function () {
            const actual = $(counter.editNameField).getValue()
            expect(actual).toEqual(counterValues.editNameField);
        })

        it('TC-038 Input for LLF = 1', function () {
            $(counter.lowerLimitField).click()
            const actual = $(counter.lowerInputField).getValue();
            expect(actual).toEqual(counterValues.lowerInputField);
        })

        it('TC-039 Input for LLF = 1', function () {
            $(counter.upperLimitField).click()
            const actual = $(counter.lowerInputField).getValue();
            expect(actual).toEqual(counterValues.lowerInputField);
        })




    });


});
