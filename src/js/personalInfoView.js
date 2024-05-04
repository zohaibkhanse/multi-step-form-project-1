
import view from "./view.js";
import {validatePersonalInfo , validateEmail} from "./helper.js";

class personalInfoView extends view {
    _parentElement = document.querySelector('.form-info-steps');

    _generateMarkup(){
        const data = this._data;
        console.log(data);
        if(data.step === 1)
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

            if(data.step === 2){
               const d2 =  this._data.selectPlane;
               console.log(d2);
                return `
                <!-- Select Your Plane START -->
                    <div class="form-info-steps__step form-info-steps__select-your-plane form-info-steps__step--2">
                        <h2 class="form-info-steps__select-your-plane-title form-info-steps--title">Select your plan</h2>
                        <p  class="form-info-steps__select-your-plane-intro form-info-steps--intro">You have the option of monthly or yearly billing.</p>
                        <div class="form-info-steps__select-your-plane-planes">
                        ${
                            d2.plane.map((el, i) => {
                                return `
                                    <div class="form-info-steps__select-your-plane-plane ${el.active ? 'active-plane' : ''}" data-plane="${i}">
                                        <div class="plane-icon">
                                            <img src="${el.url}" alt="">
                                        </div>
                                        <div>
                                            <h3 class="plane-title">${el.planeName}</h3>
                                            <p class="plane-payment">$${el.price}/${el.plane}</p>
                                            ${el.plane === 'yr' ? '<p class="plane-bonus">2 months free</p>' : ''}
                                        </div>
                                    </div>
                                `;
                            }).join('')
                
                        }
                           
                        </div>
        
                        ${ d2.planeID === 0 ? ` <div class="form-info-steps__select-your-plane-plane-options">
                    <span class="plane-monthly-option">Monthly</span>
                    <div data-plane="${d2.planeID + 1}" class="plane-options-btn"><span></span></div>
                    <span class="plane-yearly-option">Yearly</span>
                    </div>` :

                    ` <div class="form-info-steps__select-your-plane-plane-options">
                    <span class="plane-monthly-option">Monthly</span>
                    <div data-plane="${d2.planeID - 1}" class="plane-options-btn"><span></span></div>
                    <span class="plane-yearly-option">Yearly</span>
                    </div>`

                }
        
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
                    <div data-service="1" data-state="${data.pickAddOns.service1ID === 0 ? 1 : 0 }" class="form-info-steps__pick-add-ons-add-ons ${data.pickAddOns.onlineService ? "active-pick-add-ons-service" : ''}">
                        <div class="check-box ${data.pickAddOns.onlineService ? "active-pick-add-ons-check-box" : ''}"></div>
                        <div>
                            <h3 class="add-ons-title">Online service</h3>
                            <p class="add-ons-info">Access to multiplayer games</p>
                        </div>
                        <p class="add-ons-plane-info">${data.selectPlane.planeTime === 'mo' ? "+$1/mo" : "+$10/yr"}</p>
                    </div>
                    <!-- Online Service END -->
                    
                    <!-- Larger Storage START  -->
                    <div data-service="2" data-state="${data.pickAddOns.service2ID === 0 ? 1 : 0 }" class="form-info-steps__pick-add-ons-add-ons ${data.pickAddOns.largerStorage ? "active-pick-add-ons-service" : ''}">
                        <div class="check-box ${data.pickAddOns.largerStorage ? "active-pick-add-ons-check-box" : ''}"></div>
                        <div>
                            <h3 class="add-ons-title">Larger storage</h3>
                            <p class="add-ons-info">Extra 1TB of cloud save</p>
                        </div>
                        <p class="add-ons-plane-info">${data.selectPlane.planeTime === 'mo' ? "+$2/mo" : "+$20/yr"}</p>
                    </div>
                    <!-- Larger Storage END  -->
    
                    <!-- Customizable profile START  -->
                    <div data-service="3" data-state="${data.pickAddOns.service3ID === 0 ? 1 : 0 }" class="form-info-steps__pick-add-ons-add-ons  ${data.pickAddOns.customizableProfile ? "active-pick-add-ons-service" : ''}">
                        <div class="check-box  ${data.pickAddOns.customizableProfile ? "active-pick-add-ons-check-box" : ''}"></div>   
                        <div>
                            <h3 class="add-ons-title">Customizable Profile</h3>
                            <p class="add-ons-info">Custom theme on your profile</p>
                        </div>
                        <p class="add-ons-plane-info">${data.selectPlane.planeTime === 'mo' ? "+$2/mo" : "+$20/yr"}</p>
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
                        <h3 class="arcade-title" >Arcade ${data.selectPlane.planeTime === 'mo' ? "(Monthly)" : '(Yearly)'}</h3>
                        <a class="arcade-change-plane-link" href="#">Change</a>
                    </div>
                        <p class="arcade-payment-info">${data.selectPlane.planeTime === 'mo' ? "$9/mo" : '$90/yr'}</p>
                    </div>
    
                    ${data.pickAddOns.onlineService ? `
                        <div class="form-info-steps__finishing-up-summery">
                            <p class="online-service-title">Online Service</p>
                            <p class="online-service-payment-info">${data.selectPlane.planeTime === 'mo' ? "$1/mo" : '$10/yr'}</p>
                        </div>
                    ` :
                    '' }
    
                    ${data.pickAddOns.largerStorage ? `
                        <div class='form-info-steps__finishing-up-summery'>
                        <p class="larger-storage-title">Larger Storage</p>
                        <p class="larger-storage-payment-info">${data.selectPlane.planeTime === 'mo' ? "+$2/mo" :'+$20/yr'}</p>
                        </div>
                    ` 
                    :
                    '' }
                    ${data.pickAddOns.customizableProfile ? `
                        <div class='form-info-steps__finishing-up-summery'>
                        <p class="larger-storage-title">Customizable Profile</p>
                        <p class="larger-storage-payment-info">${data.selectPlane.planeTime === 'mo' ? "+$2/mo" :'+$20/yr'}</p>
                    </div>
                    ` 
                    :
                    '' }

                    
                    
                    </div>
                        <div class="form-info-steps__finishing-up-summery total-price">
                            <p class="total-payment-title">Total ${data.selectPlane.planeTime === 'mo' ? '(per month)' : 'per (year)'}</p>
                            <p class="total-payment-payment-info">Add Total Price</p>
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