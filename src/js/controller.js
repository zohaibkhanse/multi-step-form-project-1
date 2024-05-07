
import * as model from "./model.js";
import personalInfoView from "./personalInfoView.js";
import btnView from "./btnView.js";
import {validatePersonalInfo} from "./helper.js";
import selectPlaneView from "./selectPlaneView.js";
import pickAddOnsView from "./pickAddOnsView.js";
import sideBarView  from './sideBarView.js';



const controleBtn = function(step){
    // 1. Update Steps in Model
    model.updateStep(step);
    // 2. Sends data form Model and Render Buttons in UI
    btnView.render(model.state);
    // 3. Sends State to View and Render the current Form-step
    if(model.state.step === 4){
       model.culculateTotalPrice()
    }
    personalInfoView.render(model.state);

     // 4. Sends State to View and Render Current Step on UI
    sideBarView.render(model.state);
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
        // Render Side bar View
        sideBarView.render(model.state);

    }
}

function currentStep(){
    return model.state.step;
}


function controleUpgradePlane(planeNumber){
    model.upgradePlane(planeNumber);
    model.calculateTotalPriceOnService(planeNumber)
    selectPlaneView.render(model.state.selectPlane);
}

function controleChangePlane(dataPlane){
    model.changePlane(dataPlane);
    model.state.selectPlane.planeID = dataPlane;
    model.calculateTotalPriceOnPlane(dataPlane)
    selectPlaneView.render(model.state.selectPlane);
   }

//================================
// Pick Add-Ons
//================================

function controlPickAddOns(component, componentState){
    if(component === 1 && componentState === 1){
        model.state.pickAddOns.onlineService = false;
        model.state.pickAddOns.service1ID = 1;
        pickAddOnsView.render(model.state);
        
    }
    if(component === 1 && componentState === 0){
        model.state.pickAddOns.onlineService = true;
        model.state.pickAddOns.service1ID = 0;
        pickAddOnsView.render(model.state);
        
    }
    if(component === 2 && componentState === 1){
        model.state.pickAddOns.largerStorage = false;
        model.state.pickAddOns.service2ID = 1;
        pickAddOnsView.render(model.state);
        
    }
    if(component === 2 && componentState === 0){
        model.state.pickAddOns.largerStorage = true;
        model.state.pickAddOns.service2ID = 0;
        pickAddOnsView.render(model.state);
        
    }
    if(component === 3 && componentState === 1){
        model.state.pickAddOns.customizableProfile = true;
        model.state.pickAddOns.service3ID = 1;
        pickAddOnsView.render(model.state);
        
    }
    if(component === 3 && componentState === 0){
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
