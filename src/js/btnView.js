import { validatePersonalInfo } from "./helper.js";

import view from "./view.js";

class btnView extends view {
    _parentElement = document.querySelector('.progress-btns');

    addBtnHandler(btnHandler, testData, currentStep){
        const CL = this;
        this._parentElement.addEventListener('click', function(e){
            e.preventDefault();
            const btn = e.target.closest('.btn');
            if(!btn) return;
            const {step} = btn.dataset;
            const curStep = currentStep();
            if(curStep === 1){
                if(e.target.closest('.btn--next')){
                    const data = new FormData(btn.closest('.container'));
                    const FData = Object.fromEntries(data);   
                    testData(FData, curStep);
                }
            
            }

            

            if(CL._data.nextStep){
                btnHandler(+step);
            }
        })
    }


    _generateMarkup(){
        const data = this._data;

        if(data.step === 1){
            return `
                <button class="progress-btns__btn btn btn--next" data-step="${data.step + 1}">Next Step</button>
            `;
        }

        if(data.step > 1 && data.step <= 3){
            return `
            <button class="progress-btns__btn btn btn--previous" data-step="${data.step - 1}">Go Back</button>
            <button class="progress-btns__btn btn btn--next" data-step="${data.step + 1}">Next Step</button>
            `;
        }
        
        if(data.step === 4){
            return ` 
            <button class="progress-btns__btn btn btn--previous" data-step="${data.step - 1}">Go Back</button>
            <button class="progress-btns__btn btn btn--next" data-step="${data.step + 1}">Conform</button>`;
        }

        return '';


    }

}


export default new btnView();