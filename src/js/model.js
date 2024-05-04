
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
        service3ID: 0
    },

    totalPrice: 9

}

// export updateAddOns(service, state){

// }

export function storePersonalInfoData(data){
    state.personalInfo = data;
}

export function updateStep(step){
    state.step = step;
}


function changePlane(plane = 1){
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


 function upgradePlane(data = 1){
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
console.log(state.selectPlane.plane);

export {changePlane, upgradePlane};