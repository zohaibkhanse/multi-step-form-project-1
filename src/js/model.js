
/// STATE
export const state = {
    step:1,
    personalInfo: {name: '', email: '', phone: ''},

    nextStep: false,

    selectPlane: {
        plane: [],
        planeTime: 'mo',
        planeID: 0
    },

    selectedPlane: {},

    pickAddOns: {
        onlineService: true,
        largerStorage: true,
        customizableProfile: false,
        service1ID: 0,
        service2ID: 0,
        service3ID: 0,
        price: []
    },

    totalPrice: 9

}

// export updateAddOns(service, state){

// }

function dynamicPickAddOnsDataPrice(){
    state.pickAddOns.price = [{state: state.pickAddOns.onlineService, value : state.selectPlane.planeTime === 'mo'? 1 : 10},
    {state: state.pickAddOns.largerStorage, value : state.selectPlane.planeTime === 'mo'? 2 : 20},
    {state: state.pickAddOns.customizableProfile, value : state.selectPlane.planeTime === 'mo'? 2 : 20}
     ];

}




export function storePersonalInfoData(data){
    state.personalInfo = data;
}

export function updateStep(step){
    state.step = step;
}

export function calculateTotalPriceOnService(service = 1){
    if(service === 1 && state.selectPlane.planeTime === 'mo') state.totalPrice = 9;
    if(service === 1 && state.selectPlane.planeTime === 'yr') state.totalPrice = 90;
    if(service === 2 && state.selectPlane.planeTime === 'mo') state.totalPrice = 12;
    if(service === 2 && state.selectPlane.planeTime === 'yr') state.totalPrice = 120;
    if(service === 3 && state.selectPlane.planeTime === 'mo') state.totalPrice = 15;
    if(service === 3 && state.selectPlane.planeTime === 'yr') state.totalPrice = 150;
}
export function calculateTotalPriceOnPlane( plane = 0){
    if(plane === 0) state.totalPrice = 9;
    if(plane === 1) state.totalPrice = 90;
}


export function culculateTotalPrice(){
    const curService = state.selectPlane.plane.find(el => el.active);
    dynamicPickAddOnsDataPrice();
    const pickAddOnsprices = state.pickAddOns.price.filter(el => el.state);
    state.totalPrice =  pickAddOnsprices.reduce((acc, p) => acc + p.value , 0) + curService.price;
}




export function changePlane(plane = 1){
    state.selectPlane.planeTime = plane === 0 ? 'mo' : 'yr';
        state.selectPlane.plane = [
            {
                planeName: 'Arcade',
                plane: plane === 0 ? 'mo' : 'yr',
            price: plane === 0 ? 9 : 90,
            url: './assets/images/icon-arcade.svg',
            active: true,
            
        },
        {
            planeName: 'Advance',
            plane: plane === 0 ? 'mo' : 'yr',
            price: plane === 0 ? 12 : 120,
            url: './assets/images/icon-advanced.svg',
            active: false,
        },
        {
            planeName: 'Pro',
            plane: plane === 0 ? 'mo' : 'yr',
            price: plane === 0 ? 15 : 150,
            url:'./assets/images/icon-pro.svg',
            active: false,
        }
    ]
    
}


 export function upgradePlane(data = 1){
    const planeTime = state.selectPlane.planeTime;
     state.selectPlane.plane =   [
            {
                planeName: 'Arcade',
                plane:  planeTime,
                price: planeTime === 'mo' ? 9 : 90,
                url: './assets/images/icon-arcade.svg',
                active: data === 1 ? true : false,
            },
            {
                planeName: 'Advance',
                plane: planeTime,
                price: planeTime === 'mo' ? 12 : 120,
                url: './assets/images/icon-advanced.svg',
                active: data === 2 ? true : false,
            },
            {
                planeName: 'Pro',
                plane: planeTime,
                price: planeTime === 'mo' ? 15 : 150,
                url:'./assets/images/icon-pro.svg',
                active: data === 3 ? true : false,
            }
        ]
};

changePlane(0);
upgradePlane(1);

// culculateTotalPriceOnPickAddOns(1,true)
// culculateTotalPriceOnPickAddOns(2,true)

