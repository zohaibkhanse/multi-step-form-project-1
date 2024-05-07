import view  from "./view.js";
class SideBarVeiw extends view {
    _parentElement = document.querySelector('.progress');

    _generateMarkup(){
        const data = this._data;
        return `
            <div class="progress__step ">
                <span class="progress__step-number ${data.step === 1 ? "progress__step--active" : '' } ">1</span> 
                <div class="progress__step-info"><span>STEP 1</span>Your Info</div>
            </div>
            <div class="progress__step">
                <span class="progress__step-number ${data.step === 2 ? "progress__step--active" : '' }">2</span> 
                <div class="progress__step-info"><span>STEP 2</span>Select plan</div>
            </div>
            <div class="progress__step">
                <span class="progress__step-number ${data.step === 3 ? "progress__step--active" : '' }">3</span> 
                <div class="progress__step-info"><span>STEP 3</span>Add-ons</div>
            </div>
            <div class="progress__step">
                <span class="progress__step-number ${data.step === 4 ? "progress__step--active" : '' }">4</span> 
                <div class="progress__step-info"><span>STEP 4</span>Summary</div>
            </div>
        `;
    }
}

export default new SideBarVeiw();