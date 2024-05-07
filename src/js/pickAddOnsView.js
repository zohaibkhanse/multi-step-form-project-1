import view from "./view.js";

class PickAddOnsView extends view {
    _parentElement = document.querySelector('.form-info-steps');

    addPickAddOnsHandler(handler){
        this._parentElement.addEventListener('click', function(e){
            const service = e.target.closest('.form-info-steps__pick-add-ons-add-ons');
            if(!service) return;
            const addOnsState = +service.dataset.state;
            const addOnsService = +service.dataset.service;
            handler(addOnsService, addOnsState);
        })
    }

    


    _generateMarkup(){
        const data = this._data;
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
}

export default new PickAddOnsView();