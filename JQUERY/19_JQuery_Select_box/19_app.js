let cars=[{id:1,name:'Maruthi Suzuki'},{id:2,name:'Maruthi NEXA'},{id:3,name:'Mahindra'}];
let models=[{car_id:1,name:'Swift'},{car_id:1,name:'Brezza'},
    {car_id:1,name:'Dzire'},{car_id:2,name:'Baleno'},
    {car_id:2,name:'Scross'},{car_id:2,name:'Ignis'},
    {car_id:3,name:'Bolero'},{car_id:3,name:'Scorpio'},
    {car_id:3,name:'XUV 500'}];

let brandSelect = $('#brand');
let modelSelect = $('#model');

let optionsTag = '<option>Select a Car</option>';
cars.forEach((car) => {
    optionsTag += `<option value="${car.id}">${car.name}</option> \n`;
});
brandSelect.empty().append(optionsTag);

brandSelect.change(function() {
    let modelOptions = '';
    let car_id = Number(brandSelect.val());
    let selectedModels = models.filter((model) => {
        return model.car_id === car_id;
    });
    selectedModels.forEach((model) => {
        modelOptions += `<option value="${model.car_id}">${model.name}</option> \n`;
    });
    modelSelect.empty().append(modelOptions);
});
