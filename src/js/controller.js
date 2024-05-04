
import * as model from "./model.js";
import personalInfoView from "./personalInfoView.js";
import btnView from "./btnView.js";
import {validatePersonalInfo , validateEmail} from "./helper.js";
import selectPlaneView from "./selectPlaneView.js";
import pickAddOnsView from "./pickAddOnsView.js";


const controleBtn = function(step){
    model.updateStep(step);
    btnView.render(model.state);
    personalInfoView.render(model.state);
    if(step === 1){
        personalInfoView.renderDynamic(model.state.personalInfo);
    }
}

const controleTestData = function(data, step){
    
    if(!validatePersonalInfo(data)){
        personalInfoView.renderDynamic(data);
    }
    if(validatePersonalInfo(data)){
        model.state.nextStep = true;
        // btnView.render(model.state);
        model.storePersonalInfoData(data);
        selectPlaneView.render(model.state.selectPlane);

    }
}

function currentStep(){
    return model.state.step;
}


function controleUpgradePlane(planeNumber){
    model.upgradePlane(planeNumber);
    selectPlaneView.render(model.state.selectPlane);
}

function controleChangePlane(dataPlane){
    model.changePlane(dataPlane);
    model.state.selectPlane.planeID = dataPlane;
    selectPlaneView.render(model.state.selectPlane);
}

//================================
// Pick Add-Ons
//================================

function controlPickAddOns(service, state){
    if(service === 1 && state === 1){
       model.state.pickAddOns.onlineService = false;
       model.state.pickAddOns.service1ID = 1;
          pickAddOnsView.render(model.state);
    }
    if(service === 1 && state === 0){
        model.state.pickAddOns.onlineService = true;
        model.state.pickAddOns.service1ID = 0;
        pickAddOnsView.render(model.state);
    }
    if(service === 2 && state === 1){
       model.state.pickAddOns.largerStorage = false;
       model.state.pickAddOns.service2ID = 1;
       pickAddOnsView.render(model.state);
    }
    if(service === 2 && state === 0){
       model.state.pickAddOns.largerStorage = true;
       model.state.pickAddOns.service2ID = 0;
       pickAddOnsView.render(model.state);
    }
    if(service === 3 && state === 1){
       model.state.pickAddOns.customizableProfile = true;
       model.state.pickAddOns.service3ID = 1;
       pickAddOnsView.render(model.state);
    }
    if(service === 3 && state === 0){
        model.state.pickAddOns.customizableProfile = false;
        model.state.pickAddOns.service3ID = 0;
        pickAddOnsView.render(model.state);
    }

   
}

function init(){
    // view.addBtnHandler(controleBtn)
    btnView.addBtnHandler(controleBtn, controleTestData, currentStep);
    // personalInfoView.renderFormStep()
    btnView.render(model.state)
    personalInfoView.render(model.state)

    ///////////////////////////////
    selectPlaneView.upgradePlaneHandler(controleUpgradePlane)
    selectPlaneView.changePlaneHandler(controleChangePlane)
    
    // Pick Add-Ons
    pickAddOnsView.addPickAddOnsHandler(controlPickAddOns);
}

init();
