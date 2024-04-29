
import * as model from "./model.js";
import personalInfoView from "./personalInfoView.js";
import btnView from "./btnView.js";
import {validatePersonalInfo , validateEmail} from "./helper.js";
import selectPlane from "./selectPlane.js";


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
        btnView.render(model.state);
        model.storePersonalInfoData(data);
        selectPlane.renderDynamic(model.state.selectPlane.plane);

    }
}

function currentStep(){
    return model.state.step;
}


function controleUpgradePlane(planeNumber){
    model.updateStep(planeNumber);
    selectPlane.renderDynamic(model.state.selectPlane.plane);
}


function init(){
    // view.addBtnHandler(controleBtn)
    btnView.addBtnHandler(controleBtn, controleTestData, currentStep);
    // personalInfoView.renderFormStep()
    btnView.render(model.state)
    personalInfoView.render(model.state)

    ///////////////////////////////
    selectPlane.upgradePlaneHandler(controleUpgradePlane)
}

init();
