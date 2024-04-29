import view from "./view.js";

class SelectPlane extends view{
 _parentElement = document.querySelector('.form-info-steps');

    changePlaneHandler(){
        this._parentElement.addEventListener('click', function(e){

        });
    }
    
    upgradePlaneHandler(handler){
        this._parentElement.addEventListener('click', function(e){
        const planeCon =  e.target.closest('.form-info-steps__select-your-plane-plane');
            
        if(!planeCon) return; 
            
        const {plane} = planeCon.dataset;
                handler(+plane);
                console.log(plane);
        })
    }

    _generateDynamicMarkup(){
        const data = this._data;

        return `
        <!-- Select Your Plane START -->
            <div class="form-info-steps__step form-info-steps__select-your-plane form-info-steps__step--2">
                <h2 class="form-info-steps__select-your-plane-title form-info-steps--title">Select your plan</h2>
                <p  class="form-info-steps__select-your-plane-intro form-info-steps--intro">You have the option of monthly or yearly billing.</p>
                <div class="form-info-steps__select-your-plane-planes">
                ${
                    data.map((el, i) => {
                        return `
                            <div class="form-info-steps__select-your-plane-plane" data-plane="${i}">
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

                <div class="form-info-steps__select-your-plane-plane-options">
                    <span class="plane-monthly-option">Monthly</span>
                    <div data-state="true" class="plane-options-btn"><span></span></div>
                    <span class="plane-yearly-option">Yearly</span>
                </div>

            </div>
            <!-- Select Your Plane END -->
        
        `;

    }

   
    
}

export default new SelectPlane();