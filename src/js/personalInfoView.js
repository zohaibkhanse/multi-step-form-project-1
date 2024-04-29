
import view from "./view.js";
import {validatePersonalInfo , validateEmail} from "./helper.js";

class personalInfoView extends view {
    _parentElement = document.querySelector('.form-info-steps');

    _generateMarkup(){
        const data = this._data;
        if(data.step === 1){
                return  `
                <!-- Personal Information START -->
                <div class="form-info-steps__step form-info-steps__personal-info form-info-steps__step--1 ">
                    <h2 class="form-info-steps__personal-info-title form-info-steps--title">Personal info</h2>
                    <p  class="form-info-steps__personal-info-intro form-info-steps--intro">Please provide your name, email address, and phone number.</p>
                    <!-- Name -->
                    <label class="form-info-steps__personal-info-label" for="name">Name</label>
                    <input class="form-info-steps__personal-info-input" type="text" name="name" id="name" placeholder="e.g. Stephen King" required>
                    <!-- Email -->
                    <label class="form-info-steps__personal-info-label" for="email">Email Address</label>
                    <input class="form-info-steps__personal-info-input" type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" required>
                    <!-- Phone Number -->
                    <label class="form-info-steps__personal-info-label" for="phone">Phone Number</label>
                    <input class="form-info-steps__personal-info-input" type="text" name="phone" id="phone" placeholder="e.g. +1 234 567 890" required>
                </div>
                <!-- Personal Information END -->
                `;
            }

            if(data.step === 2){
                return `
                <!-- Select Your Plane START -->
                <div class="form-info-steps__step form-info-steps__select-your-plane form-info-steps__step--2">
                    <h2 class="form-info-steps__select-your-plane-title form-info-steps--title">Select your plan</h2>
                    <p  class="form-info-steps__select-your-plane-intro form-info-steps--intro">You have the option of monthly or yearly billing.</p>
                    <div class="form-info-steps__select-your-plane-planes">
                        <div class="form-info-steps__select-your-plane-plane" data-plane="1">
                            <div class="plane-icon">
                                <img src="./assets/images/icon-arcade.svg" alt="">
                            </div>
                            <div>
                                <h3 class="plane-title">Arcade</h3>
                                <p class="plane-payment">$9/mo</p>
                                <p class="plane-bonus">2 months free</p>
                            </div>
                        </div>
                        <div class="form-info-steps__select-your-plane-plane" data-plane="2">
                            <div class="plane-icon">
                                <img src="./assets/images/icon-advanced.svg" alt="">
                            </div>
                            <div>
                                <h3 class="plane-title">Advanced</h3>
                                <p class="plane-payment">$12/mo</p>
                                <p class="plane-bonus">2 months free</p>
                            </div>
                        </div>
                        <div class="form-info-steps__select-your-plane-plane" data-plane="3">
                            <div class="plane-icon">
                                <img src="./assets/images/icon-pro.svg" alt="">
                            </div>
                            <div>
                                <h3 class="plane-title">Pro</h3>
                                <p class="plane-payment">$15/mo</p>
                                <p class="plane-bonus">2 months free</p>
                            </div>
                        </div>
                    </div>
    
                    <div class="form-info-steps__select-your-plane-plane-options">
                        <span class="plane-monthly-option">Monthly</span>
                        <div data-state="true" class="plane-options-btn"><span></span></div>
                        <span class="plane-yearly-option">Yearly</span>
                    </div>
    
                </div>
                <!-- Select Your Plane END -->
                `;
            }

            if(data.step === 3){
                return `
                <!-- Pick Add ons START -->
                <div class="form-info-steps__step form-info-steps__pick-add-ons form-info-steps__step--3">
                    <h2 class="form-info-steps__pick-add-ons-title form-info-steps--title">Pick add-ons</h2>
                    <p  class="form-info-steps__pick-add-ons-intro form-info-steps--intro">Add-ons help enhance your gaming experience.</p>
                    <!-- Online Service START -->
                    <div class="form-info-steps__pick-add-ons-add-ons">
                        <input type="checkbox" name="" id="">
                        <div>
                            <h3 class="add-ons-title">Online service</h3>
                            <p class="add-ons-info">Access to multiplayer games</p>
                        </div>
                        <p class="add-ons-plane-info">+$1/mo</p>
                    </div>
                    <!-- Online Service END -->
                    
                    <!-- Larger Storage START  -->
                    <div class="form-info-steps__pick-add-ons-add-ons">
                        <input type="checkbox" name="" id="">
                        <div>
                            <h3 class="add-ons-title">Larger storage</h3>
                            <p class="add-ons-info">Extra 1TB of cloud save</p>
                        </div>
                        <p class="add-ons-plane-info">+$2/mo</p>
                    </div>
                    <!-- Larger Storage END  -->
    
                    <!-- Customizable profile START  -->
                    <div class="form-info-steps__pick-add-ons-add-ons">
                        <input type="checkbox" name="" id="">
                        <div>
                            <h3 class="add-ons-title">Customizable Profile</h3>
                            <p class="add-ons-info">Custom theme on your profile</p>
                        </div>
                        <p class="add-ons-plane-info">+$2/mo</p>
                    </div>
                    <!-- Customizable profile END  -->
                </div>
                <!-- Pick Add ons END -->
                `;
            }

            if(data.step === 4){
                return `
                <!-- Finishing Up START -->
                <div class="form-info-steps__step form-info-steps__finishing-up form-info-steps__step--4">
                    <h2 class="form-info-steps__finishing-up-title form-info-steps--title">Finishing up</h2>
                    <p  class="form-info-steps__finishing-up-intro form-info-steps--intro">Double-check everything looks OK before confirming.</p>
                    <div class="form-info-steps__finishing-up-short-summery">
                    <div class="form-info-steps__finishing-up-summery top">
                        <div>
                            <h3 class="arcade-title" >Arcade (Monthly)</h3>
                            <a class="arcade-change-plane-link" href="#">Change</a>
                        </div>
                        <p class="arcade-payment-info">$9/mo</p>
                    </div>
    
                    <div class="form-info-steps__finishing-up-summery">
                         <p class="online-service-title">Online Service</p>
                        <p class="online-service-payment-info">+$1/mo</p>
                    </div>
                    <div class='form-info-steps__finishing-up-summery'>
                        <p class="larger-storage-title">Larger Storage</p>
                        <p class="larger-storage-payment-info">+$1/mo</p>
                    </div>
                </div>
                    <div class="form-info-steps__finishing-up-summery total-price">
                        <p class="total-payment-title">Total (per month)</p>
                        <p class="total-payment-payment-info">+$12/mo</p>
                    </div>
                </div>
                <!-- Finishing Up END -->
                `;
            }

            if(data.step === 5){
                return `
                <!-- Thank You Step Start -->
                <div class="form-info-steps__thank-you-info">
                    <img class="form-info-steps__thank-you-info-image"src="./assets/images/icon-thank-you.svg" alt="">
                    <h2 class="form-info-steps__thank-you-info-title form-info-steps--title">Thank You!</h2>
                    <p  class="form-info-steps__thank-you-info-intro form-info-steps--intro">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
                </div>
                `;
            }

        }

        
        _generateDynamicMarkup(){
        //   const data = {name: 'Ahmad', email: 'zohaib@gmial.com', phone: '3030303003'};
          const data = this._data;
          console.log(data, "😍😍")
        return  `
                <!-- Personal Information START -->
            <div class="form-info-steps__step form-info-steps__personal-info form-info-steps__step--1 ">
                <h2 class="form-info-steps__personal-info-title form-info-steps--title">Personal info</h2>
                <p  class="form-info-steps__personal-info-intro form-info-steps--intro">Please provide your name, email address, and phone number.</p>
                <!-- Name -->
                <label class="form-info-steps__personal-info-label" for="name">Name ${data.name === '' ? '<span class="input-error-message">This filled is required.</span>' : ''}</label>
                <input class="form-info-steps__personal-info-input ${data.name === ''? 'input-error': ''}" type="text" name="name" id="name" value="${data.name !== '' ? data.name : ''}" placeholder="e.g. Stephen King" required>
                <!-- Email -->
                <label class="form-info-steps__personal-info-label" for="email">Email Address ${ validateEmail(data.email) ? "" : '<span class="input-error-message">This filled is required.</span>'}</label>
                <input class="form-info-steps__personal-info-input ${validateEmail(data.email)?  '': 'input-error'}" type="email" name="email" value="${validateEmail(data.email)? data.email : '' }" id="email" placeholder="e.g. stephenking@lorem.com" required>
                <!-- Phone Number -->
                <label class="form-info-steps__personal-info-label" for="phone">Phone Number ${data.phone === '' ? '<span class="input-error-message">This filled is required.</span>' : ''}</label>
                <input class="form-info-steps__personal-info-input ${data.phone === ''? 'input-error': ''}" type="text" name="phone" id="phone" value="${data.phone !== '' ? data.phone : ''}" placeholder="e.g. +1 234 567 890" required>
            </div>
            <!-- Personal Information END -->
            `;
        }



        

    
    /*
    _stepsParentElement = document.querySelector('.form-info-steps');
    _btnParentElement = document.querySelector('.progress-btns');

    _formData;
    renderFormStep(data){
        this._stepsParentElement.innerHTML = '';
        this._data = data;
        this._stepsParentElement.insertAdjacentHTML("afterbegin", this._generateStepMarkup())
    }

    renderStep(data){
        this._data = data;
        this._stepsParentElement.insertAdjacentHTML("afterbegin", this._generateStepMarkup())
    }
    
    _renderError(data){
        this._data = data;
        console.log(data);
        this._stepsParentElement.innerHTML = '';
        this._stepsParentElement.insertAdjacentHTML("afterbegin", this._generateErrorMarkup.call(this))
    }

    
        
        
    }
   

    


   

        _generateErrorMarkup(){
            const data = this._data;
        return  `
                <!-- Personal Information START -->
            <div class="form-info-steps__step form-info-steps__personal-info form-info-steps__step--1 ">
                <h2 class="form-info-steps__personal-info-title form-info-steps--title">Personal info</h2>
                <p  class="form-info-steps__personal-info-intro form-info-steps--intro">Please provide your name, email address, and phone number.</p>
                <!-- Name -->
                <label class="form-info-steps__personal-info-label" for="name">Name ${data.name === '' ? '<span class="input-error-message">This filled is required.</span>' : ''}</label>
                <input class="form-info-steps__personal-info-input ${data.name === ''? 'input-error': ''}" type="text" name="name" id="name" value="${data.name !== '' ? data.name : ''}" placeholder="e.g. Stephen King" required>
                <!-- Email -->
                <label class="form-info-steps__personal-info-label" for="email">Email Address ${validateEmail(data.email)  ? "" : '<span class="input-error-message">This filled is required.</span>'}</label>
                <input class="form-info-steps__personal-info-input ${validateEmail(data.email)?  '': 'input-error'}" type="email" name="email" value="${validateEmail(data.email)? data.email : '' }" id="email" placeholder="e.g. stephenking@lorem.com" required>
                <!-- Phone Number -->
                <label class="form-info-steps__personal-info-label" for="phone">Phone Number ${data.phone === '' ? '<span class="input-error-message">This filled is required.</span>' : ''}</label>
                <input class="form-info-steps__personal-info-input ${data.phone === ''? 'input-error': ''}" type="text" name="phone" id="phone" value="${data.phone !== '' ? data.phone : ''}" placeholder="e.g. +1 234 567 890" required>
            </div>
            <!-- Personal Information END -->
            `;
        }

    */

        


}



export default new personalInfoView();