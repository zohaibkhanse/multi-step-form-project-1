
export default class {

    _data;

    _clear(){
        this._parentElement.innerHTML = '';
    }

    render(data){
        this._clear();
        this._data = data;
        this._parentElement.insertAdjacentHTML("afterbegin", this._generateMarkup());
    }
    
    renderDynamic(data){
        this._clear();
        this._data = data;
        this._parentElement.insertAdjacentHTML("afterbegin", this._generateDynamicMarkup());
    }

}